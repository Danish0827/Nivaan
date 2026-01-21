import { Doctor } from '@/app/api/homePageData'
import { montserratSemiBold } from '@/app/fonts'
import React from 'react'
import CoreTeamCard from './CoreTeamCard'
import OurCoreteamCarousel from './OurCoreteamCarousel'

const OurCoreteam = ({data}: {data: Doctor[]}) => {
  return (
    <div>
        <h1 className={`${montserratSemiBold.className} text-[#29519B] text-xl md:text-[2.5rem] md:leading-[2.875rem] my-8 text-center`}>Our Core Team</h1>
        <OurCoreteamCarousel data={data} />
    </div>
  )
}

export default OurCoreteam
