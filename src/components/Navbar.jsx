import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-800">
            Site<span className="text-blue-600">Karo</span>
          </span>
        </div>


        {/* Right: CTA Button */}
        <button className="ml-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          Get a Proposal
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
