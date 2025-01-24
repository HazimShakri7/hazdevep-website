import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';

interface Country {
  name: string;
  code: string;  // Country code (e.g., 'AE' for United Arab Emirates)
}

async function downloadFlags(): Promise<void> {
  const jsonUrl = 'https://country-code-au6g.vercel.app/Country.json';
  const baseUrl = 'https://country-code-au6g.vercel.app/'; // Base URL for flag images
  const outputFolder = path.join(__dirname, 'flags'); // Folder to save the flags

  try {
    // Ensure the output folder exists
    await fs.ensureDir(outputFolder);

    // Fetch the JSON data
    const response = await axios.get<Country[]>(jsonUrl);
    const countries = response.data;

    // Loop through each country and download the flag
    for (const country of countries) {
      const { name, code } = country;

      const flagUrl = `${baseUrl}${code}.svg`; // Construct full URL for the flag
      const flagPath = path.join(outputFolder, `${code}.svg`); // Save as country code (e.g., AE.svg)

      console.log(`Downloading ${name}'s flag from ${flagUrl}...`);

      try {
        // Download the flag image
        const imageResponse = await axios({
          url: flagUrl,
          method: 'GET',
          responseType: 'stream',
        });

        // Save the flag image to the folder
        const writer = fs.createWriteStream(flagPath);
        imageResponse.data.pipe(writer);

        // Wait for the file to finish writing
        await new Promise<void>((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
        });

        console.log(`${name}'s flag saved as ${flagPath}`);
      } catch (err: any) {
        if (err.response && err.response.status === 404) {
          console.warn(`Flag not found for ${name}: ${flagUrl}`);
        } else {
          console.error(`Error downloading ${name}'s flag:`, err.message);
        }
      }
    }

    console.log('All flags downloaded successfully!');
  } catch (error: any) {
    console.error('Error downloading flags:', error.message);
  }
}

// Run the function
downloadFlags();
