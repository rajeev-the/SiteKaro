import React from 'react'
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
     <section className="bg-red-500 text-white px-6 py-14 md:py-20 rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A premium business solution <br /> that delivers trusted talent
          </h1>

          {/* Toggle Buttons */}
          <div className="flex flex-wrap gap-2 bg-white/10 backdrop-blur-md p-1 rounded-full w-fit">
            <button className="bg-white text-green-900 px-4 py-1 rounded-full font-semibold text-sm">
              Browse freelancers
            </button>
            <button className="text-white px-4 py-1 rounded-full font-medium text-sm">
              Post a project brief
            </button>
            <button className="text-white px-4 py-1 rounded-full font-medium text-sm">
              Sourcing experts
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex w-full max-w-md rounded-md overflow-hidden mt-4">
            <input
              type="text"
              placeholder="Search for skills or services"
              className="w-full p-3 text-gray-700 outline-none"
            />
            <button className="bg-green-500 p-3">
              <Search className="text-white" />
            </button>
          </div>

          {/* Brands Section */}
      
        </div>

        {/* Right Images */}
        <div className="flex space-x-[-40px] mt-8 lg:mt-0">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_180,h_240,dpr_2.0/v1/attachments/generic_asset/asset/d4d207ffdd2f63033846414e7499d10d-1681301972293/pro1.png"
            alt="Jonah"
            className="w-36 h-48 rounded-xl object-cover z-10"
          />
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_180,h_240,dpr_2.0/v1/attachments/generic_asset/asset/43f74742db9b6f0ff6fcdfb348c15849-1681301970793/pro2.png"
            alt="Camille"
            className="w-36 h-48 rounded-xl object-cover z-20"
          />
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_180,h_240,dpr_2.0/v1/attachments/generic_asset/asset/bdfbb7f26d0edcb15f17d9ce24e4fc1e-1681301971574/pro3.png"
            alt="James"
            className="w-36 h-48 rounded-xl object-cover z-10"
          />
        </div>
        
      </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl  mb-[10px] mx-[60px] px-4 py-4 mt-8 flex  gap-6 items-center text-sm font-medium">
            <span className="text-white">Brands who hire with Fiverr Pro</span>
            <span className="text-white">HITACHI</span>
            <span className="text-white">similarweb</span>
            <span className="text-white">SKECHERS</span>
            <span className="text-white">MyHeritage</span>
            <span className="text-white">NETFLIX</span>
            <span className="text-white">L'ORÉAL</span>
            <span className="text-white">Unilever</span>
          </div>
    </section>
  )
}

export default HeroSection