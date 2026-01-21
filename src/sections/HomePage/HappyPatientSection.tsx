'use client'
import { HappyPatientCardDataType } from '@/app/api/homePageData'
import { montserratSemiBold } from '@/app/fonts'
import React from 'react'
import HappyPatientCarousel from './HappyPatientCarousel'

const HappyPatientSection = ({data}: {data: HappyPatientCardDataType[]}) => {
  return (
    <div className='flex flex-col items-center justify-center pb-10'>
      <h2 className={`${montserratSemiBold.className} text-xl md:text-[2.5rem] text-[#264494] mt-8`}>Hear Our Happy Patients</h2>
      <HappyPatientCarousel reviews={data} />
    </div>
  )
}

export default HappyPatientSection