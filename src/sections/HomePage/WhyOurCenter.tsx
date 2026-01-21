import { whyOurCenterDataType } from '@/app/api/homePageData'
import { montserratSemiBold } from '@/app/fonts'
import React from 'react'
import WhyOurCenterCarousel from './WhyOurCenterCarousel'

const WhyOurCenter = ({data, title}: {data: whyOurCenterDataType[], title: string}) => {
  return (
    <div className='mb-12'>
      <h2 className={`${montserratSemiBold.className} text-xl md:text-[2.5rem] md:leading-[3.0625rem] text-[#29519B] my-8 text-center`}>{title}</h2>
      <WhyOurCenterCarousel data={data} />
    </div>
  )
}

export default WhyOurCenter
