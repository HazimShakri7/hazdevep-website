import '@fortawesome/fontawesome-free/css/all.css';
import Socmed from '../shared/Socmed';
import Header from '../shared/Header';
import Engage from '../shared/Engage';

export default function Hero() {
    return (
        <>
    <Header />
      <section id="home" className="relative bg-gradient-to-r from-black to-green-900 text-white h-screen flex items-center justify-center">
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-between">
          {/* Left Side: Profile Image */}
          <div className="w-2/3 mt-[-250px]">
            <img
              src="/hero/HazHen.png" // Replace this with your actual image path
              alt="Hazim Shakri"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
    
          {/* Right Side: Name, Bio, and Button */}
          
          <div className="w-2/3 pl-8">
          <p className="text-lg sm:text-3xl ml-1">
              Hi, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4">
              Hazim Shakri
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              I'm a passionate developer focused on creating user-friendly and
              functional websites. Let me create your own personal website
              for portfolio, marketing, promotion and more.
              Just the way you like.
            </p>
            <a
              href="#projects"
              className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Find Me On <i className="fa-solid fa-hand-point-down text-xl text-black ml-2"></i>
            </a>
            <Socmed />
            <Engage />
          </div>
        </div>
      </section>
      </>
    );
  }
  