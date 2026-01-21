import React from 'react'
import NivaanI from '../../public/nivaan_i_icon.webp'
import NivaanIMob from '../../public/nivaan_i_icon_mob.webp'
import { montserratLightBold, rubikReg } from '@/app/fonts'
import Image from 'next/image'
import { FeatureListCardDataType } from '@/app/api/allTypes'

const FeatureListCard = ({ title, data }: { title: string | React.ReactNode, data: FeatureListCardDataType[] }) => {
  return (
    <div className='bg-[#EAF1FB] shadow-[0_4px_4px_0_#00000040] rounded-[10px] pt-6 px-6 w-[19.0625rem] md:min-h-[380px] md:w-[545px]'>
      <h2 className={`${montserratLightBold.className} text-[1.0625rem] mb-2 md:text-2xl md:mb-6`}>{title}</h2>
      <ul>

        {data?.map((listItem: FeatureListCardDataType) => (
          <li key={listItem.id} className="flex items-start gap-3 mb-4">
          {/* icon box (fixed size) */}
          <div className="relative flex-shrink-0 w-6 h-6 md:w-7 md:h-7">
            {/* desktop icon */}
            <Image
              src={NivaanI}
              alt="Nivaan"
              fill
              className="hidden md:block object-contain"
              unoptimized
            />
            {/* mobile icon */}
            <Image
              src={NivaanIMob}
              alt="Nivaan Mob"
              fill
              className="block md:hidden object-contain"
              unoptimized
            />
          </div>
        
          {/* text */}
          <p className={`${rubikReg.className} text-xs md:text-2xl`}>{listItem.desc}</p>
        </li>
          // <li key={listItem.id} className='flex flex-row items-center gap-2 md:gap-4 mb-3'>
          //   <Image src={NivaanI} alt='Nivaan' className='hidden md:block max-h-[26px]' />
          //   <Image src={NivaanIMob} alt='Nivaan Mob' className='block md:hidden max-h-[12px]' />
          //   <span className={`${rubikReg.className} text-xs md:text-2xl`}>{listItem.desc}</span>
          // </li>
        ))}
      </ul>
    </div>
  )
}
export default FeatureListCard
