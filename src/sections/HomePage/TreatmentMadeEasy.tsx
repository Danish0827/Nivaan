'use client'
import { commonCausesData } from '@/app/api/homePageData'
import { montserratLightBold, montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import SubscribeButton from '@/components/SubscribeButton'
import Image from 'next/image'
import React from 'react'
import treatmentMadeEasyImg from '../../../public/homepage/treatMadeEasyImg.webp'
import treatmentMadeEasyImgMob from '../../../public/homepage/treatMadeEasyImgMob.webp'
import { useRouter } from 'next/navigation'


const TreatmentMadeEasy = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push('/next/request-appointment')
  }
  
  return (
    <div className='flex flex-col md:flex-row bg-[#D4EBF8] pl-4 pr-4 md:pl-28 md:pr-0 py-8 md:py-[3rem] mt-4'>
      <div className='flex-initial'>
        <h4 className={`${montserratSemiBold.className} text-[#54B1E2] text-xs md:text-lg mb-2`}>India’s First Most Advanced Non- Surgical Pain Treatment Chain of Clinics</h4>
        <h1 className={`${montserratSemiBold.className} text-[#29519B] text-xl md:text-[2.5rem] md:leading-[2.875rem] mb-6`}>Treatment of Complex Pain <br/>Made Easy</h1>
        <p className={`${montserratSemiSemiBold.className} text-xs md:text-base mb-2 text-[#181818B2]`}>Pain is a complex condition with multiple underlying causes. It can vary in intensity (from a persistent ache to a sharp piercing sensation), duration and even location. To develop a comprehensive care pathway, it is crucial to identify the main reason behind the pain.<span className={`${montserratLightBold.className}`}> Some common causes of chronic pain can be</span></p>
        {/* <ul className='list-disc pl-4 mb-4'>
            {commonCausesData.map((cause, index) => (
                <li key={index} className={`${montserratSemiBold.className} text-[#181818B2] text-xs md:text-base`}>{cause}</li>
            ))}
        </ul> */}
        <ul className="list-disc grid grid-cols-2 md:grid-cols-1 gap-2 pl-4 my-4">
            {commonCausesData.map((cause, index) => (
                <li key={index} className={`${montserratSemiBold.className} text-[#181818B2] text-xs md:text-base`}>
                {cause}
                </li>
            ))}
        </ul>
        <p className={`${montserratSemiSemiBold.className} text-[#181818B2] mb-6 hidden md:block`}>This is why at Nivaan, we offer a team of multiple specialists who come together and create an integrated pain management plan that offers well-rounded care.</p>
        <div className='flex flex-row justify-start w-[196px]'>
            <SubscribeButton onClick={handleClick} title="Know More" />
        </div>
      </div>
      <div className='hidden md:block md:flex-none mt-20'>
        <Image src={treatmentMadeEasyImg} alt="Form3" className='w-full' width={418.63} height={360} unoptimized/>
      </div>
      <div className='block mt-12 md:hidden'>
        <Image src={treatmentMadeEasyImgMob} alt="Form3" className='w-full' width={283.69} height={405.86} unoptimized/>
      </div>
    </div>
  )
}

export default TreatmentMadeEasy
