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

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
          <li className="group relative cursor-pointer">
            SEO & Lead Generation
            <span className="ml-1">▼</span>
          </li>
          <li className="group relative cursor-pointer">
            Revenue Marketing & CRO
            <span className="ml-1">▼</span>
          </li>
          <li className="group relative cursor-pointer">
            UX & Interactive
            <span className="ml-1">▼</span>
          </li>
          <li className="group relative cursor-pointer">
            AI & Technology
            <span className="ml-1">▼</span>
          </li>
          <li className="group relative cursor-pointer">
            Who We Are
            <span className="ml-1">▼</span>
          </li>
        </ul>

        {/* Right: CTA Button */}
        <button className="ml-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          Get a Proposal
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
