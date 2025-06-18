import { useState } from "react";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-yellow-700 bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo Kerupuk Kulit Bu Ulyanah Cap Matahari"
            className="h-12 w-12 rounded-full shadow flex-shrink-0"
          />
          <span className="text-lg lg:text-xl font-bold text-green-100 select-none">
            Kerupuk Kulit Bu Ulyanah
          </span>
        </a>
        <nav>
          <ul className="hidden md:flex space-x-10 font-medium tracking-wide text-green-100">
            <li>
              <a
                href="#produk"
                className="hover:text-amber-300 focus:text-amber-300 focus:outline-none"
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                className="hover:text-amber-300 focus:text-amber-300 focus:outline-none"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="hover:text-amber-300 focus:text-amber-300 focus:outline-none"
              >
                Kontak
              </a>
            </li>
          </ul>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle menu"
            className="md:hidden text-green-100 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <span className="material-icons font-[32px]">menu</span>
          </button>
        </nav>
      </div>

      {isExpanded && (
        <div
          className="lg:hidden bg-yellow-100 bg-opacity-90 backdrop-blur-md px-4 pb-4 text-green-900"
        >
          <ul className="space-y-4 font-medium tracking-wide p-2">
            <li>
              <a
                href="#produk"
                className="block hover:text-amber-500 focus:text-amber-500 focus:outline-none"
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                className="block hover:text-amber-500 focus:text-amber-500 focus:outline-none"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="block hover:text-amber-500 focus:text-amber-500 focus:outline-none"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
       )}
    </header>
  );
}

export default Header;
