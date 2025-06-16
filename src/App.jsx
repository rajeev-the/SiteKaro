import React from 'react'
import Navbar from './components/Navbar'
import BottomNavbar from './components/BottomNavbar'
import HeaderNavbar from './components/HeaderNavbar'

const App = () => {
  return (
  //   <div className=''>
  //  <Navbar/>

  //   </div>
   <div className="relative min-h-screen  bg-white">
      {/* Other content */}
      <HeaderNavbar/>
      <BottomNavbar />
    </div>
  )
}

export default App