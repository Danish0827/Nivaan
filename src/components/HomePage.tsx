import Footer4 from '@/sections/Footer/Footer4'
import Navbar2 from '@/sections/Nav/Navbar2'
import React from 'react'
import Navbar2Mob from '@/sections/Nav/Navbar2Mob'
import HeroSection from '@/sections/HomePage/HeroSection'
import GetBackToLifeSection from '@/sections/GetBackToLifeSection/GetBackToLifeSection'
import HappyPatientSection from '@/sections/HomePage/HappyPatientSection'
import { HappyPatientCardData, OurCoreteamData, featuredBlogData, whyOurCenterData } from '@/app/api/homePageData'
import TreatmentMadeEasy from '@/sections/HomePage/TreatmentMadeEasy'
import OurCoreteam from '@/sections/HomePage/OurCoreteam'
import WhyOurCenter from '@/sections/HomePage/WhyOurCenter'
import FeaturedBlogs from '@/sections/HomePage/FeaturedBlogs'
import { GraphCardData } from '@/app/api/requestAppointmentData'

const HomePage = () => {
  return (
    <div>
        <Navbar2 />
        <Navbar2Mob />
        <HeroSection />
        <HappyPatientSection data={HappyPatientCardData} />
        <TreatmentMadeEasy />
        <OurCoreteam data={OurCoreteamData} />
        <GetBackToLifeSection 
            heading="Extraordinary Results for Chronic Pain Conditions" 
            para="Nivaan’s first-of-its-kind pain management approach demonstrated the below results in the clinical studies." 
            GraphCardData={GraphCardData} 
        />
        <WhyOurCenter data={whyOurCenterData} title="Why should you choose our pain management centre?" />
        <FeaturedBlogs data={featuredBlogData} />
      <Footer4 />
    </div>
  )
}

export default HomePage
