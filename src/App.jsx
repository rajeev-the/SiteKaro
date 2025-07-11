import React from 'react'
import Navbar from './components/Navbar'
import BottomNavbar from './components/BottomNavbar'
import HeaderNavbar from './components/HeaderNavbar'
import TopHeader from './components/TopHeader'
import HeroSection from './components/HeroSection'
import SectionHome2 from './components/SectionHome2'
import ExpertiseSection from './components/ExpertiseSection'
import SuccessStories from './components/SuccessStories'
import Demo from './components/Demo'
import GrowthSection from './components/GrowthSection'

import OrbitingAvatars from './components/OrbitingAvatars'
import SectionSP from './components/SectionSP'
import Reward from './components/Reward'
import BeforeAfter from './components/BeforeAfter'

const App = () => {
  return (
  //   <div className=''>
  //  <Navbar/>

  //   </div>

  <>  
   <div className="  relative min-h-screen  bg-[#FFE3BB] ">
      {/* Other content */}
      <HeaderNavbar/>
      <BottomNavbar />
      <TopHeader/>
      <div className='sm:px-[50px]  px-[10px]  ' >
        
      <HeroSection /> 
      </div>
      <div className='mt-[80px]'>
       <SectionHome2/>
      </div>

        <div className="min-h-screen py-12 px-4">
  
      
        
   <Demo/>
       
    </div>

     <div className="min-h-screen ">
    
        <SuccessStories />
   
    
    </div>

     <div className="min-h-screen ">
    
        <GrowthSection />
   
    
    </div>
   
    
      
   
    
  <div className=" ">
    
        <SectionSP />
   
    
    </div>

     <div className="mb-20 ">
     <h1 className='text-center  text-4xl  mb-5 font-extrabold'>Our Work Speaks Louder with Awards</h1>
          <p className='text-center  text-sm  mb-1  font-medium '>Our Work Speaks Louder with AwardsAwardsAwardsAwardsAwardsAwards</p>


        <Reward />
   
    
    </div>


    <div className="min-h-screen ">
     <h1 className='text-center  text-4xl  mb-5 font-extrabold'>Before and after </h1>

        <BeforeAfter/>
   
    
    </div>
    
    
     
    </div>

   
    </>
    
  )
}

export default App