import { useState } from "react";

const Header = ({ onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-green-700 tracking-tight">
          FanFuture
        </h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          <a href="#features" className="text-green-700 hover:underline">
            Features
          </a>
          <a href="#about" className="text-green-700 hover:underline">
            About
          </a>
          <a href="#bio" className="text-green-700 hover:underline">
            Bio
          </a>
          <button
            onClick={onContactClick}
            className="text-green-700 hover:underline cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <a
            href="#features"
            className="block py-2 hover:underline text-green-700"
          >
            Features
          </a>
          <a
            href="#about"
            className="block py-2 hover:underline text-green-700"
          >
            About
          </a>
          <a href="#bio" className="block py-2 hover:underline text-green-700">
            Bio
          </a>
          <button
            onClick={onContactClick}
            className="text-green-700 block py-2  hover:underline cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
