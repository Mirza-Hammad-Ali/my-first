function Footer() {
  return (
    <footer className="bg-[#2d2926] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-serif font-bold">UK</h2>

            <p className="text-[#d6b98c] text-xs tracking-[4px] mt-1">
              FURNITURE
            </p>

            <p className="text-gray-400 mt-5 leading-7">
              Quality furniture made to bring comfort, beauty and style into
              your home.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>Furniture</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Sofas</li>
              <li>Beds</li>
              <li>Dining Tables</li>
              <li>Chairs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-3">Birmingham, United Kingdom</p>
            <p className="text-gray-400 mb-3">+44 300 1234567</p>
            <p className="text-gray-400">info@woodora.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
           2026 UK Furniture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
