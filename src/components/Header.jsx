function Header() {
  return (
    <header className="bg-[#f5f1eb]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#2d2926]">
            Uk
          </h1>
          <p className="text-xs tracking-[4px] text-[#8b7355]">FURNITURE</p>
        </div>

        <div className="hidden md:block text-right">
          <p className="text-sm text-gray-500">Need Help?</p>
          <p className="font-semibold text-[#2d2926]">+92 300 1234567</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
