export default function Project () {
  return (
    <section id="project" className="relative bg-gradient-to-r from-black to-green-900 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          My Project
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-4">
              I create responsive and visually appealing websites tailored to your needs. Whether it's a personal site or a business platform, I can build it.
            </p>
            <a href="#contact" className="text-blue-600 hover:underline">Learn More</a>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">
              I design intuitive and user-friendly interfaces that provide a seamless experience for users. I focus on both functionality and aesthetics.
            </p>
            <a href="#contact" className="text-blue-600 hover:underline">Learn More</a>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600 mb-4">
              I specialize in creating and managing online stores. From product listings to secure payment integrations, I can help you sell online effectively.
            </p>
            <a href="#contact" className="text-blue-600 hover:underline">Learn More</a>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
            <p className="text-gray-600 mb-4">
              I help improve your website's visibility on search engines, increasing your online presence and driving traffic to your site.
            </p>
            <a href="#contact" className="text-blue-600 hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};
