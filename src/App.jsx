import React from 'react'
import Navbar from './components/Navbar'
import BottomNavbar from './components/BottomNavbar'
import HeaderNavbar from './components/HeaderNavbar'
import TopHeader from './components/TopHeader'
import HeroSection from './components/HeroSection'
import SectionHome2 from './components/SectionHome2'
import ExpertiseSection from './components/ExpertiseSection'

const App = () => {
  return (
  //   <div className=''>
  //  <Navbar/>

  //   </div>
   <div className="relative min-h-screen  bg-[#FFE3BB] ">
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

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Service Navigation Demo</h1>
          <p className="text-gray-600">Click on "Ecommerce Development" to see the expanded view</p>
        </header>
        
         <ExpertiseSection/>
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2025 Service Navigation Component. All rights reserved.</p>
        </footer>
      </div>
    </div>
    
     
    </div>
    
  )
}

export default App