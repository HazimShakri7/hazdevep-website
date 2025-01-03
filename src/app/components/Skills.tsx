export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-r from-black to-green-900 text-white min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          My Skills
        </h1>

        <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Skill Cards */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group w-full h-52 max-w-full" // Square shape
            >
              <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700">
                {/* Front Side */}
                <div className="absolute w-full h-full bg-white border-4 border-yellow-500 p-6 rounded-lg shadow-md [backface-visibility:hidden]">
                  <h2 className="text-xl font-semibold text-black mb-4">{skill.name}</h2>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-20 h-20 mx-auto"
                  />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-yellow-500 border-4 border-white p-6 rounded-lg shadow-md flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="text-black font-bold text-center">{skill.description}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name: "Next.js", image: "/skills/Nextjs.png", description: "A tool to build websites with React." },
  { name: "React", image: "/skills/React.png", description: "A JavaScript library to build websites and apps." },
  { name: "TypeScript", image: "/skills/TypeScript.png", description: "A language that helps write safer and clearer code." },
  { name: "Tailwind CSS", image: "/skills/TailwindCSS.png", description: "A language to quickly style websites using simple code." },
  { name: "Payload", image: "/skills/Payload.png", description: "A software to manage your website's content." },
  { name: "MongoDB", image: "/skills/MongoDB.png", description: "A database that stores data in easy-to-use format." },
  { name: "GitHub", image: "/skills/GitHub.png", description: "A platform to share and work on code." },
  { name: "Vercel", image: "/skills/Vercel.png", description: "A platform to deploy and host websites and apps." },
];
