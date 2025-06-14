import { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";

export default function BottomNavbar() {
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const[menu,setMenu ] = useState("home")

  return (
  <div className="fixed bottom-[60px] left-1/2 transform -translate-x-1/2 z-50 w-[486px] h-[10px]">
  <div className="flex items-center bg-red-500 rounded-full px-0.5 py-0.5 shadow-lg space-x-0.5 text-white">
    
  <button
  onClick={()=>{
    setMenu("home")
    setIsCompanyOpen(false)
  }}
  className={`py-2 px-5 rounded-full ${
    menu === "home" ? "bg-white/30" : ""
  }`}
>
  <GrHomeRounded className="text-white text-xl" />
</button>


    <div className="relative">
      <button
      onClick={ 
        () => {setIsCompanyOpen(!isCompanyOpen)

            setMenu("service")
        }
      }

        className={`font-semibold text-sm  hover:bg-white/20 py-2 px-5 rounded-full   `}
      >
        Services ▾
      </button>
    </div>

     {isCompanyOpen && (
  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full  bg-white text-black rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-6 z-50">
    
    {/* Website Solutions */}
    <div>
      <h3 className="font-bold text-sm bg-yellow-100 p-1 rounded">Website Solutions</h3>
      <ul className="text-sm mt-2 space-y-1">
        <li>Web Development</li>
        <li>Web Design</li>
        <li>Web Optimisation</li>
        <li>Website Maintenance Services</li>
        <li>Website Security Services</li>
        <li>E-commerce Development</li>
      </ul>
    </div>

    {/* Digital Marketing */}
    <div>
      <h3 className="font-bold text-sm bg-yellow-100 p-1 rounded">Digital Marketing</h3>
      <ul className="text-sm mt-2 space-y-1">
        <li>Social Media Marketing</li>
        <li>Content Marketing</li>
        <li>Influencer Marketing</li>
        <li>Online Reputation Management</li>
        <li>Marketing Automation</li>
        <li>Google & Meta Ads</li>
      </ul>
    </div>

    {/* SEO */}
    <div>
      <h3 className="font-bold text-sm bg-yellow-100 p-1 rounded">SEO</h3>
      <ul className="text-sm mt-2 space-y-1">
        <li>Keyword Research</li>
        <li>On-Page SEO</li>
        <li>Off-Page SEO</li>
        <li>Technical SEO</li>
        <li>Local SEO</li>
        <li>Outreach & Link Building</li>
        <li>SEO Audits</li>
        <li>SEO Reporting and Analysis</li>
        <li>GPT Search Optimization</li>
      </ul>
    </div>

    {/* Content Writing */}
    <div>
      <h3 className="font-bold text-sm bg-yellow-100 p-1 rounded">Content Writing</h3>
      <ul className="text-sm mt-2 space-y-1">
        <li>Website Content</li>
        <li>SEO Blog Writing</li>
        <li>Social Media Content</li>
        <li>Email Newsletters</li>
        <li>Case Studies Writing</li>
        <li>Product Descriptions</li>
        <li>Editing and Proofreading</li>
      </ul>
    </div>





  </div>
)}


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
       
        className=  "font-semibold text-sm   hover:bg-white/20 p-2 px-5 rounded-full"
      >
        Contact Us
      </button>
       
    </div>
  </div>
</div>

  );
}
