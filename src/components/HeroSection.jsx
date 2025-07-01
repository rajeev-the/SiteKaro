import React from 'react'
import Rajeev from "../assets/20250616_1848_Stylized Portrait Photography_remix_01jxwe6ebxe5qsrgqqwthvf377.png"
import Rajeev1 from "../assets/20250619_0131_Bold Portrait Design_remix_01jy2a079kegw9mtt1y5g8w87k.png"
import Rajeev2  from "../assets/20250616_1848_Stylized Portrait Photography_remix_01jxwe6ebxe5qsrgqqwthvf377-Photoroom.png"
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
     <section className="bg-[#FF4F0F] text-white  h-full px-6 py-14 md:py-20 rounded-3xl">
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
              See past projects
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
              className="w-full p-3 text-black  bg-[#FFA673] outline-none"
            />
            <button className="bg-green-900 p-3">
              <Search className="text-white" />
            </button>
          </div>

          {/* Brands Section */}
      
        </div>

        {/* Right Images */}
        <div className="flex space-x-[-40px] mt-8 lg:mt-0">
          <img
            src={Rajeev1}
            alt="Rajeev"
            className="w-36 h-48 rounded-xl  mt-[25px] object-cover z-10"
          />
          <img
            src={Rajeev}
            alt="Camille"
            className="w-46 h-60 rounded-xl object-cover z-20"
          />
          <img
            src={Rajeev2}
            alt="James"
            className="w-36 h-48 mt-[25px] rounded-xl object-cover z-10"
          />
        </div>
        
      </div>
          <div className="bg-[#03A6A1] backdrop-blur-md rounded-xl   mx-[50px] px-4 py-4 mt-[50px] flex  gap-6 items-center text-sm font-medium">
            <span className="text-white">"Trusted By Leading Brands</span>
            <span className="text-white">HITACHI</span>
            <span className="text-white">similarweb</span>
            <span className="text-white">SKECHERS</span>
            <span className="text-white">MyHeritage</span>
            <span className="text-white">NETFLIX</span>
            <span className="text-white">L'ORÉAL</span>
            <span className="text-white">Unilever</span>
             <span className="text-white">MyHeritage</span>
            <span className="text-white">NETFLIX</span>
            <span className="text-white">L'ORÉAL</span>
            <span className="text-white">Unilever</span>
    
            <span className="text-white">Unilever</span>
          </div>
    </section>
  )
}

export default HeroSection