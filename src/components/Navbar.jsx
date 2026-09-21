function Navbar() {
  return (
    <nav className="bg-[#2d2926] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex gap-8">
          <a href="#" className="hover:text-[#d6b98c] transition">
            Home
          </a>

          <a href="#" className="hover:text-[#d6b98c] transition">
            Furniture
          </a>

          <a href="#" className="hover:text-[#d6b98c] transition">
            Living Room
          </a>

          <a href="#" className="hover:text-[#d6b98c] transition">
            Bedroom
          </a>

          <a href="#" className="hover:text-[#d6b98c] transition">
            About Us
          </a>

          <a href="#" className="hover:text-[#d6b98c] transition">
            Contact
          </a>
        </div>

        <div className="text-sm"><i class="fa-solid fa-cart-shopping"></i>Cart (0)</div>
      </div>
    </nav>
  );
}

export default Navbar;
