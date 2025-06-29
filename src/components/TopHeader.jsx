import React,{useRef } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

const TopHeader = () => {
    const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
        const categories = [
    { name: "Trending", icon: "🔥" },
    { name: "Graphics & Design" },
    { name: "Programming & Tech" },
    { name: "Digital Marketing" },
    { name: "Video & Animation" },
    { name: "Writing & Translation" },
    { name: "Music & Audio" },
    { name: "Business" },
    { name: "Finance" },
    { name: "AI Services" },
    { name: "Lifestyle" },
    { name: "Gaming" },
    { name: "Education" },
  ];

  return (
    <div className="relative w-full mt-2  scrollbar-hide whitespace-nowrap  gap-3  flex justify-center  items-center sm:px-[130px]  ">
      {/* Left Arrow */}

  <button
        onClick={() => scroll("left")}
        className="absolute left-[125px] top-1/2 transform -translate-y-1/2 
             bg-white/30 backdrop-blur-md z-10 hidden md:flex 
             items-center justify-center w-7 h-7 rounded-full 
             shadow-md hover:shadow-xl hover:bg-white/50 
             transition-all duration-300 ease-in-out hover:scale-110 
             ring-1 ring-white/40"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide whitespace-nowrap px-4 py-3 scroll-smooth"
      >
        {categories.map((item, index) => (
          <div
            key={index}
            className="text-gray-700 hover:text-[#FF4F0F] mx-3 text-sm md:text-base flex items-center whitespace-nowrap"
          >
            {item.icon && <span className="mr-1">{item.icon}</span>}
            {item.name}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-[120px] top-1/2 transform -translate-y-1/2 
             bg-white/30 backdrop-blur-md z-10 hidden md:flex 
             items-center justify-center w-7 h-7 rounded-full 
             shadow-md hover:shadow-xl hover:bg-white/50 
             transition-all duration-300 ease-in-out hover:scale-110 
             ring-1 ring-white/40"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

export default TopHeader