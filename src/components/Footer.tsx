const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EcoCodiots</h3>
            <p>Leading the way in smart city waste management.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-green-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-green-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-green-400">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-green-400">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-400">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-400">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
