export default function Footer() {
  return (
    <footer id="footer" className="relative bg-gradient-to-r from-black to-green-900 text-white shadow-md border-t-2 border-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Big Title */}
          <div className="col-span-3 md:col-span-1 text-left md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">This is Hazim Shakri Website</h1>
          </div>

          {/* Sections */}
          <div className="col-span-3 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section 1: About */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Our Story</a></li>
                <li><a href="#" className="hover:underline">Team</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>

            {/* Section 2: Services */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Web Development</a></li>
                <li><a href="#" className="hover:underline">UI/UX Design</a></li>
                <li><a href="#" className="hover:underline">Consulting</a></li>
              </ul>
            </div>

            {/* Section 3: Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Email Us</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 text-center relative">
          <div className="absolute inset-0 bg-white h-8 -top-2"></div>
          <p className="text-sm text-black relative z-10">
            © 2025 Hazim Shakri&apos;s Website. Created with passion and powered by Next.js for a seamless experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
