export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between">
            {/* About Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
                We are committed to providing exceptional services tailored to your needs. Your satisfaction is our priority.
              </p>
            </div>
  
            {/* Links Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#services" className="hover:text-gray-100 transition">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-100 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-100 transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-gray-400 text-sm">
                Email: info@example.com
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Phone: +123 456 7890
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  