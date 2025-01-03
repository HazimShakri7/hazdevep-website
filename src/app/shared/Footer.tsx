export default function Footer() {

  return (
    <footer id="footer" className="relative bg-gradient-to-r from-black to-green-900 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        {/* Footer Content */}
        <div className="mb-4">
          <p className="text-lg font-semibold">© 2025 My Portfolio. All rights reserved.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

