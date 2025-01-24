import React from 'react'
import ToggleButton from './ToggleButton'
import Links from './Links'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar flex flex-col items-center justify-center bg-white text-black'>
        <div className='bg fixed left-0 top-0 max-w-[400px] '>
         <Links />
        </div>
        <ToggleButton />
    </div>
    </>
  )
}

export default Sidebar