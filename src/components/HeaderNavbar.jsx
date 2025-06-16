import React, { useState } from 'react';
import { FiPhone, FiMail, FiArrowRight, FiMenu, FiX } from 'react-icons/fi';

const HeaderNavbar = () => {


  return (
    <header className="bg-white shadow-sm px-6 py-4 sticky top-0 z-50">
          <div className=' sm:hidden flex  mb-[10px] gap-5'> 
            <div className="flex items-center space-x-1">
            <FiPhone className="text-red-400 text-sm" />
            <a href="tel:+919310851557" className="hover:text-red-500 font-sm transition-colors">
              +91 93108 51557
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <FiMail className="text-red-400 text-sm" />
            <a href="mailto:info@sitekaro.com" className="hover:text-red-500 font-sm transition-colors">
              info@sitekaro.com
            </a>
          </div>
         </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-gray-800 tracking-tight">
          <a href="/" className="flex items-center space-x-1">
            <span>SiteKaro</span>
            <span className="text-red-500">.com</span>
          </a>
        </div>

        {/* Proposal Button (Always Visible) */}
        <div className="md:hidden">
          <a
            href="#proposal"
            className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-full shadow-sm flex items-center gap-2 transition-all duration-200 text-sm"
          >
            Get Proposal <FiArrowRight className="text-white" />
          </a>
        </div>

        {/* Desktop Contact + Button */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 text-sm">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-red-400 text-lg" />
            <a href="tel:+919310851557" className="hover:text-red-500 font-medium transition-colors">
              +91 93108 51557
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-red-400 text-lg" />
            <a href="mailto:info@sitekaro.com" className="hover:text-red-500 font-medium transition-colors">
              info@sitekaro.com
            </a>
          </div>
          <a
            href="#proposal"
            className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-5 rounded-full shadow-sm flex items-center gap-2 transition-all duration-200"
          >
            Get Proposal <FiArrowRight className="text-white" />
          </a>
        </div>

        

      </div>
    

   
    </header>
  );
};

export default HeaderNavbar;
