import { Doctor } from '@/app/api/homePageData'
import { montserratLightBold, montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import React from 'react'
import Image from 'next/image'

const CoreTeamCard = ({data}: {data: Doctor}) => {
  return (
    <div className='border-[0.75px] border-solid border-[#C6C6C6] rounded-[15px] px-[0.625rem] pt-[0.625rem] pb-6 w-full md:w-[90%] mx-auto'>
        <Image src={data.img} alt={data.name} width={322.99} height={204.75} unoptimized/>
        <div className='ml-1'>
            <h4 className={`${montserratSemiBold.className} text-base mt-3 mb-1`}>{data.name}</h4>
            <p className={`${montserratSemiBold.className} text-[#181818B2] mb-5`}>{data.field}</p>
            <p className='mb-1'>{data.degree}</p>
            <div className={`${montserratSemiSemiBold.className} text-xs flex flex-row`}>
                <span>{data.experience}</span>
                {/* <a href={data.url} target="_blank" className={`${montserratLightBold.className} text-[#51B4EF]`}>{`Know More >>`}</a> */}
            </div>
        </div>
    </div>
  )
}

export default CoreTeamCard
