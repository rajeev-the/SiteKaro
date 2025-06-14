import { useState } from "react";
import { FaHome } from "react-icons/fa";

export default function BottomNavbar() {
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
  <div className="fixed bottom-[60px] left-1/2 transform -translate-x-1/2 z-50 w-[486px] h-[10px]">
  <div className="flex items-center bg-red-500 rounded-full px-0.5 py-0.5 shadow-lg space-x-0.5 text-white">
    
    <button className="bg-white/20 py-2 px-5 rounded-full">
      <FaHome className="text-white text-xl  " />
    </button>

    <div className="relative">
      <button
        onClick={() => setIsPersonalOpen(!isPersonalOpen)}
        className=   " font-semibold text-sm  hover:bg-white/20 py-2 px-5 rounded-full"
      >
        Services ▾
      </button>
    </div>

    <a
      href="#"
      className= " font-semibold text-sm   hover:bg-white/20 py-2 px-5 rounded-full transition-all"
    >
      Our Work ▾
    </a>

    <div className="relative">
      <button
        onClick={() => setIsCompanyOpen(!isCompanyOpen)}
        className=  "font-semibold text-sm   hover:bg-white/20 p-2 px-5 rounded-full"
      >
        About
      </button>
    </div>

      <div className="relative">
      <button
        onClick={() => setIsCompanyOpen(!isCompanyOpen)}
        className=  "font-semibold text-sm   hover:bg-white/20 p-2 px-5 rounded-full"
      >
        Contact Us
      </button>
    </div>
  </div>
</div>

  );
}
