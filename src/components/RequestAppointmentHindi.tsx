import Footer4 from '@/sections/Footer/Footer4'
import Navbar2 from '@/sections/Nav/Navbar2'
import React from 'react'
import Navbar2Mob from '@/sections/Nav/Navbar2Mob'
import MeetYourCareTeam from '@/sections/MeetYourCareTeam/MeetYourCareTeam'
import HeroSectionHindi from '@/sections/RequestAppointment/HeroSectionHindi'
import HeroSectionHindiMob from '@/sections/RequestAppointment/HeroSectionHindiMob'
import WhoIsSectionHindi from '@/sections/WhoIsSection/WhoIsSectionHindi'
import GetBackToLifeSection from '@/sections/GetBackToLifeSection/GetBackToLifeSection'
import ReviewSection from '@/sections/ReviewSection/ReviewSection'
import SubscribeNewsletterHindi from './SubscribeNewsletterHindi'
import SubscribeNewsletterDesktopHindi from './SubscribeNewsletterDesktopHindi'
import { GraphCardDataHindi, TeamCardDataHindi, TeamCardDataMobHindi, overlaySlideDataHindi, requestAppointmentReviewHindiData } from '@/app/api/requestAppointmentHindiData'

const RequestAppointmentHindi = ({formLocation}: { formLocation?: string }) => {
  return (
    <div>
      <Navbar2 isHindi={true} />
      <Navbar2Mob isHindi={true} />
      <div className='hidden md:block'><HeroSectionHindi formLocation={`Hero Section ${formLocation}`} /></div>
      <div className='block md:hidden'><HeroSectionHindiMob formLocation={`Hero Section ${formLocation}`} /></div>
      <WhoIsSectionHindi data={overlaySlideDataHindi} />
      <GetBackToLifeSection isHindi={true} GraphCardData={GraphCardDataHindi} heading="हमारे बेहतरीन रिजल्ट" para="भारत में इस तरह का पहला ऐसा तरीका जिसने क्लीनिकल टडी में नीचे दिए गए रिजल्ट में बेहतर प्रदर्शन किया है।" />
      <div className='hidden md:block'><MeetYourCareTeam TeamCardData={TeamCardDataHindi} lang='hindi' /></div>
      <div className='block md:hidden'><MeetYourCareTeam TeamCardData={TeamCardDataMobHindi} lang='hindi' /></div>
      <ReviewSection requestAppointmentReviewData={requestAppointmentReviewHindiData} title="रीव्यू" />
      <div className='block md:hidden'><SubscribeNewsletterHindi /></div>
      <div className='hidden md:block'><SubscribeNewsletterDesktopHindi /></div>
      <Footer4 />
    </div>
  )
}

export default RequestAppointmentHindi;