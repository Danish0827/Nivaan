import Image from 'next/image'
import React from 'react'
import { montserratLightBold, montserratSemiSemiBold } from '@/app/fonts'
import GoogleIcon from '../../../public/google-logo.webp'
import Star from '../../../public/oneStar.webp'
import blueTick from "../../../public/blueTick.webp"
import Form3Hindi from '@/components/Form3Hindi'
import { NivaanFeatureHeroSectionMobHindi2, weTreatHeroSectionMobHindi } from '@/app/api/requestAppointmentHindiData'

const HeroSectionHindiMob = ({ formLocation }: { formLocation?: string }) => {
  return (
    <div className='bg-[#54B1E2] text-white px-4 pb-6'>
      <div className='flex flex-col'>
        <h2 className={`${montserratLightBold.className} text-lg mt-8`}>भारत का सबसे एडवांस नॉन-सर्जिकल <br/> पेन ट्रीटमेंट</h2>
        <span className='bg-white w-[67.9px] h-[2.55px] mt-2 mb-4'></span>
        <p className='mb-4'>दर्द से छुटकारा पाने के लिए (बहु-विशेषज्ञ टीम द्वारा किया गया इलाज) <span className='text-lg font-bold'>9X</span> गुना अधिक प्रभावी साबित हुआ है।</p>
        <div className={`flex flex-row items-center gap-2 mb-4 mt-2`}>
            <Image src={blueTick} alt='blue-tick' className='w-[15.28px] h-[11.88px]' unoptimized />
            <div className={`${montserratSemiSemiBold.className} text-sm flex flex-row gap-1.5`}>4.9 <Image src={Star} alt='star' width={12} height={12} unoptimized/> यूजर रेटिंग्स <Image src={GoogleIcon} alt='google' width={16.92} height={17.09} unoptimized/></div>
        </div>
        <div className='mb-4'>
            {
                NivaanFeatureHeroSectionMobHindi2.map((feature,i) => (
                    <div key={i} className={`flex flex-row ${i===0 ? 'items-baseline' : 'items-center'} gap-2 mb-4`}>
                        <Image src={blueTick} alt='blue-tick' className='w-[15.28px] h-[11.88px]' unoptimized/>
                        <span className={`${montserratSemiSemiBold.className} text-sm`}>{feature}</span>
                    </div>
                ))
            }
        </div>
        <Form3Hindi formLocation={formLocation} />
        <h2 className={`${montserratLightBold.className} text-base mt-4 mb-1 text-[#264494]`}>हमारे यहाँ इलाज किया जाता हैं</h2>
        {/* <TextCarousel lang="hindi" /> */}
        <div className='flex flex-row gap-8'>
          {
            weTreatHeroSectionMobHindi.map((festure,i) => <span key={i} className={`font-bold text-base text-white`}>{festure}</span>)
          }
        </div>
      </div>
    </div>
  )
}

export default HeroSectionHindiMob