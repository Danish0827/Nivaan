import { whyOurCenterDataType } from '@/app/api/homePageData'
import { montserratSemiBold } from '@/app/fonts'
import Image from 'next/image'
import React from 'react'

const WhyOurCenterCard = ({centerData}: {centerData: whyOurCenterDataType}) => {
  return (
    <div className='mx-auto w-full md:w-[286.63px] h-[459.69px] rounded-2xl border border-solid border-[#D3D2D2] bg-[#51B4EF]'>
        <Image src={centerData.img} alt="Why our center" width={285.73} height={206.41} unoptimized/>
        <div className='text-white px-3'>
            <h4 className={`${montserratSemiBold.className} text-[14.42px] pt-2 mb-3`}>{centerData.title}</h4>
            {centerData.description !=="" && <p className={`${montserratSemiBold.className} text-[12.62px] leading-[19.83px] mb-2`}>{centerData.description}</p>}
            <ul className='list-disc text-xs pl-3'>
                {
                    (centerData?.descListArr && centerData?.descListArr?.length > 0) && 
                        centerData?.descListArr?.map((desc, i) => <li key={i} className='mb-2'>{desc}</li>)
                }
            </ul>
        </div>
    </div>
  )
}

export default WhyOurCenterCard
