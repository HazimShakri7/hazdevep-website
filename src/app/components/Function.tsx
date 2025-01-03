export default function Function () {
    return (
      <section
        id="function"
        className="relative bg-gradient-to-r from-black to-green-900 text-white h-screen flex items-center justify-center"
  
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            What can you do with a Website?
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Skill Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">HTML</h3>
              <p className="text-gray-600">Building the structure of websites with semantic HTML.</p>
            </div>
  
            {/* Skill Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">CSS</h3>
              <p className="text-gray-600">Styling websites to make them visually appealing and responsive.</p>
            </div>
  
            {/* Skill Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">JavaScript</h3>
              <p className="text-gray-600">Adding interactivity and functionality to websites with JavaScript.</p>
            </div>
  
            {/* Skill Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">React</h3>
              <p className="text-gray-600">Building dynamic and scalable web applications using React.</p>
            </div>
  
            {/* Skill Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tailwind CSS</h3>
              <p className="text-gray-600">Efficiently styling modern websites using utility-first CSS framework.</p>
            </div>
  
            {/* Skill Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Node.js</h3>
              <p className="text-gray-600">Building fast and scalable backend services with Node.js.</p>
            </div>
  
            {/* Skill Card 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Git</h3>
              <p className="text-gray-600">Version control using Git to manage and track code changes.</p>
            </div>
  
            {/* Skill Card 8 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">MongoDB</h3>
              <p className="text-gray-600">Storing and managing data with MongoDB for backend applications.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  