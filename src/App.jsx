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
   
    
      
   
    
  <div className="min-h-screen ">
    
        <SectionSP />
   
    
    </div>
    
    
     
    </div>

   
    </>
    
  )
}

export default App