import Image from 'next/image'
import React from 'react'
import { montserratLightBold, montserratSemiSemiBold } from '@/app/fonts'
import Form3 from '@/components/Form3'
import blueTick from "../../../public/blueTick.webp"
import TextCarousel from '@/components/TextCarousel'
import { NivaanFeatureHeroSectionMob } from '@/app/api/requestAppointmentData'
import FormPmax from '@/components/FormPmax'

const HeroSectionMob = ({ formLocation }: { formLocation?: string }) => {
  return (
    <div className='bg-[#54B1E2] text-white px-6 pb-6'>
      <div className='flex flex-col'>
        <h1 className={`${montserratLightBold.className} text-lg mt-12`}>Book Your Appointment with <br/> the Best Pain Specialists in Delhi NCR</h1>
        <h2 className='hidden'>Get Expert Consultation for Your Pain Management Needs</h2>
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
        { formLocation === 'request appointment pmax' ? <FormPmax formLocation={formLocation} /> : <Form3 formLocation={formLocation} />  }
      </div>
    </div>
  )
}

export default HeroSectionMob
