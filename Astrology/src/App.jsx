import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className=' font-["Satoshi"] text-white  bg-zinc-900 h-screen '>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App