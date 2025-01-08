export default function Function() {
  const functionList = [
    { title: "Portfolio" }, { title: "Branding" }, { title: "Blogging" }, { title: "E-Commerce" },
  ];

  return (
    <section
      id="function"
      className="relative bg-gradient-to-r from-black to-green-900 text-white py-20 flex items-center justify-center"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          What can you do with a Website?
        </h2>

        {/* Mapping Method to Avoid Duplication Code for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {functionList.map((box, index) => (
            <div
              key={index}
              className="bg-transparent border-2 p-6 sm:p-8 lg:p-12 xl:p-16 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-500 mb-4">
                {box.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
