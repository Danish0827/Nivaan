import Footer4 from '@/sections/Footer/Footer4'
import Navbar2 from '@/sections/Nav/Navbar2'
import React from 'react'
import Navbar2Mob from '@/sections/Nav/Navbar2Mob'
import ContactUs from '@/components/ContactUs'


const HomePage = () => {
  return (
    <div>
        <Navbar2 />
        <Navbar2Mob />
        <ContactUs />
        <Footer4 />
    </div>
  )
}

export default HomePage
