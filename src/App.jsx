import React from 'react'
import Navbar from './components/Navbar'
import BottomNavbar from './components/BottomNavbar'
import HeaderNavbar from './components/HeaderNavbar'
import TopHeader from './components/TopHeader'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
  //   <div className=''>
  //  <Navbar/>

  //   </div>
   <div className="relative min-h-screen  bg-white">
      {/* Other content */}
      <HeaderNavbar/>
      <BottomNavbar />
      <TopHeader/>
      <div className='sm:px-[50px]  px-[10px]  mt-5' >
        
      <HeroSection /> 
      </div>
    </div>
  )
}

export default App