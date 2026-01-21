import Footer4 from '@/sections/Footer/Footer4'
import Navbar2 from '@/sections/Nav/Navbar2'
import React from 'react'
import SubscribeNewsletter from './SubscribeNewsletter'
import Navbar2Mob from '@/sections/Nav/Navbar2Mob'
import HeroSection from '@/sections/RequestAppointment/HeroSection'
import HeroSectionMob from '@/sections/RequestAppointment/HeroSectionMob'
import ReviewSection from '@/sections/ReviewSection/ReviewSection'
import WhoIsSection from '@/sections/WhoIsSection/WhoIsSection'
import GetBackToLifeSection from '@/sections/GetBackToLifeSection/GetBackToLifeSection'
import MeetYourCareTeam from '@/sections/MeetYourCareTeam/MeetYourCareTeam'
import { requestAppointmentReviewData, GraphCardData, TeamCardData, TeamCardDataMob, overlaySlideData } from '@/app/api/requestAppointmentData'

const RequestAppointmentPmax = ({formLocation}: { formLocation?: string }) => {
  return (
    <div>
      <Navbar2 />
      <Navbar2Mob />
      <div className='hidden md:block'><HeroSection formLocation={formLocation} /></div>
      <div className='block md:hidden'><HeroSectionMob formLocation={formLocation} /></div>
      <ReviewSection requestAppointmentReviewData={requestAppointmentReviewData} />
      <WhoIsSection data={overlaySlideData} />
      <GetBackToLifeSection GraphCardData={GraphCardData} />
      <div className='hidden md:block'><MeetYourCareTeam TeamCardData={TeamCardData} /></div>
      <div className='block md:hidden'><MeetYourCareTeam TeamCardData={TeamCardDataMob} /></div>

      <div className='block md:hidden'><SubscribeNewsletter /></div>
      <Footer4 />
    </div>
  )
}

export default RequestAppointmentPmax
