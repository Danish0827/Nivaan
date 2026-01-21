import Image from 'next/image'
import React from 'react'
import { montserratLightBold, montserratSemiSemiBold } from '@/app/fonts'
import Form3 from '@/components/Form3'
import blueTick from "../../../public/blueTick.webp"
import TextCarousel from '@/components/TextCarousel'
import { NivaanFeatureHeroSectionMob } from '@/app/api/requestAppointmentData'

const HeroSectionMob = () => {
  return (
    <div className='bg-[#54B1E2] text-white px-6 pb-6'>
      <div className='flex flex-col'>
        <h2 className={`${montserratLightBold.className} text-lg mt-12`}>India{"'"}s most effective <br/> Non-Surgical pain Treatment</h2>
        <span className='bg-white w-[67.9px] h-[2.55px] my-5'></span>
        <div>
            {
                NivaanFeatureHeroSectionMob.map((feature,i) => (
                    <div key={i} className={`flex flex-row ${i===0 ? 'items-baseline' : 'items-center'} gap-2 mb-4`}>
                        <Image src={blueTick} alt='blue-tick' className='w-[15.28px] h-[11.88px]' unoptimized/>
                        <span className={`${montserratSemiSemiBold.className} text-sm`}>{feature}</span>
                    </div>
                ))
            }
        </div>
        <h2 className={`${montserratLightBold.className} text-base mt-1 mb-2`}>We Treat</h2>
        <TextCarousel />
        <Form3 />
      </div>
    </div>
  )
}

export default HeroSectionMob
