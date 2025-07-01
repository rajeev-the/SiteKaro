import React from 'react'
import Navbar from './components/Navbar'
import BottomNavbar from './components/BottomNavbar'
import HeaderNavbar from './components/HeaderNavbar'
import TopHeader from './components/TopHeader'
import HeroSection from './components/HeroSection'
import SectionHome2 from './components/SectionHome2'

const App = () => {
  return (
  //   <div className=''>
  //  <Navbar/>

  //   </div>
   <div className="relative min-h-screen  ">
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
     
    </div>
    
  )
}

export default App