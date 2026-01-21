import Image from 'next/image'
import React from 'react'
// import homeHeroImg from '../../../public/homepage/homeHeroImg.webp'
// import homeHeroImgMob from '../../../public/homepage/homeHeroImgMob.webp'  
import homeHeroImg from '../../../public/homepage/home.png'
import homeHeroImgMob from '../../../public/homepage/homemobile1.png'
import { montserratLightBold, montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import rightTick from '../../../public/rightTick.webp'
import SubscribeButton from '@/components/SubscribeButton'
import TextCarousel from '@/components/TextCarousel'

const HeroSection = () => {
  return (
    <div className='bg-[#54B1E2] text-white flex flex-col px-4 md:flex-row md:pl-28 md:pr-0 pt-4 md:py-[4rem]'>
      {/* <div className='bg-[#54B1E2] text-white flex flex-col px-4 md:flex-row md:pl-28 md:pr-0 py-8 md:py-[4rem]'> */}
      <div className='flex flex-col'>
        <h1 className={`${montserratLightBold.className} text-xl md:text-[2.8125rem] md:leading-[3.375rem] mt-0 mb-4 md:mb-6`}>Consult With India’s Most<br /> Advanced Pain Management<br /> Specialists</h1>
        <div className='flex flex-col md:flex-row md:items-center gap-3 mb-8'>
          <div className='w-16 h-0.5 md:w-[3.6px] md:h-20 bg-white'></div>
          <p className={`${montserratSemiSemiBold.className} text-xs md:text-xl w-[82%] md:w-[68%]`}>Our integrated approach to treating pain is clinically proven to be <span className='text-[#29519B]'>9.3X*</span> more effective than any other pain treatment in the country.</p>
        </div>
        <ul>
          {
            heroList.map((item, i) => (
              <li key={i} className='flex flex-row items-center gap-3 mb-3'>
                <Image width={18} height={15} src={rightTick} alt={'list icon'} className='hidden md:block' unoptimized/>
                <Image width={15.33} height={12.77} src={rightTick} alt={'list icon'} className='block md:hidden' unoptimized/>
                <span className={`${montserratLightBold.className} text-[0.8125rem] md:text-lg`}>{item}</span>
              </li>
            ))
          }
        </ul>
        <h4 className={`${montserratLightBold.className} text-base md:text-2xl mt-8 mb-4`}>Chronic Pain Conditions We Treat</h4>
        <div className={`${montserratSemiBold.className} hidden md:flex md:flex-row gap-6 mb-6`}>
          {
            conditionWeTreat.map((item, i) => <span key={i} className='text-[#FFFFFFCC] text-base md:text-xl'>{item}</span>)
          }
        </div>
        <div className='block md:hidden'>
          <TextCarousel />
        </div>
        <div className='flex flex-row w-[187px]'>
          {/* <SubscribeButton onClick={handleClick} title="Let’s Get Started" /> */}
          <SubscribeButton route="/next/request-appointment" title="Let’s Get Started" />
        </div>
      </div>
      <div className='hidden md:block mt-20'>
        <Image
          src={homeHeroImg}
          alt="Form3"
          className='w-full'
          loading="eager"
          priority={true}
          quality={30}
          unoptimized
        />
      </div>
      <div className='block md:hidden'>
        <Image
          src={homeHeroImgMob}
          alt="Form3"
          className='w-full'
          loading="eager"
          priority={true}
          unoptimized
        // quality={100}
        // height={70}
        // width={70}
        />
      </div>
    </div>
  )
}

export default HeroSection

const heroList = ["Led by pain management specialists", "Round-the-clock care", "360-degree diagnosis involving 4 superspecialists", "20+ advanced non-surgical pain procedures to treat chronic pain"]
const conditionWeTreat = ['Knee Pain', 'Back Pain', 'Shoulder Pain', 'Neck Pain']