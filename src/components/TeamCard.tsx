import React from 'react'
import Image from 'next/image'
import { montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import { overlaySlideDataType } from '@/app/api/allTypes'

const TeamCard = ({cardData}: {cardData: overlaySlideDataType}) => {
  return (
    <div className='rounded-xl w-[230px] h-[417.43px] border border-solid border-[#D3D2D2]'>
      <Image src={cardData.img} alt='team' width={224.91} unoptimized/>
      <div className='px-2'>
        <h4 className={`${montserratSemiBold.className} text-sm text-[#181818] w-[224.91px] py-3 text-left`}>{cardData.title}</h4>
        <p className={`${montserratSemiSemiBold.className} text-xs`}>{cardData.desc}</p>
      </div>
    </div>
  )
}

export default TeamCard
