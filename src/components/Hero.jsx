function Hero() {
  return (
    <section className="bg-[#ebe4da]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-[#8b7355] uppercase tracking-[4px] text-sm mb-4">
            Modern Furniture Collection
          </p>

          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#2d2926] leading-tight mb-6">
            Make Your Home
            <span className="block text-[#8b7355]">Feel Beautiful</span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Discover elegant and comfortable furniture designed to make your
            home warm, stylish and beautiful.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#2d2926] text-white px-7 py-3 rounded-md hover:bg-[#4a4039] transition">
              Shop Collection
            </button>

            <button className="border border-[#2d2926] text-[#2d2926] px-7 py-3 rounded-md hover:bg-[#2d2926] hover:text-white transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
