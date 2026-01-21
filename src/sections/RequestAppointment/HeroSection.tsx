import Image from 'next/image'
import React from 'react'
import heroImg from '../../../public/requestapt.png'
import { montserratLightBold, montserratSemiSemiBold } from '@/app/fonts'
import Form3 from '@/components/Form3'
import TextCarousel from '@/components/TextCarousel'
import FormPmax from '@/components/FormPmax'

const HeroSection = ({ formLocation }: { formLocation?: string }) => {
    // const BannerImgOverlayTxt = () => {
    //     return (
    //         <div className="absolute top-[73%] left-[46%] transform -translate-x-3/4 -translate-y-1/2 flex flex-col gap-6">
    //             <div 
    //                 className="flex items-center gap-2 px-4 py-2 rounded-3xl w-1/2 bg-white/50 backdrop-blur-md ml-44"
    //             >
    //                 <span className={`${montserratLightBold.className} text-[1.5rem] sm:text-[1.685rem] text-[#363F44]`}>4.5</span>
    //                 <Image src={Star} alt='star icon' width={28.79} height={28.79} />
    //                 <span className={`${montserratSemiBold.className} text-xs sm:text-sm`}>User Ratings in</span>
    //                 <Image src={GoogleIcon} alt='google icon' width={30} height={30} />
    //             </div>
    //             {
    //                 heroList.map((list, i) => (
    //                     <div 
    //                         key={i}
    //                         className={`flex items-center gap-2 px-4 py-4 rounded-3xl ${i % 2 === 0 ? 'w-[70%] mr-44' : 'w-1/2 ml-44' } bg-white/50 backdrop-blur-md`} 
    //                     >
    //                         <Image src={checkMark} alt='check mark icon' width={18} height={14} />
    //                         <span className={`${montserratLightBold.className} text-sm sm:text-lg text-[#181818]`}>{list}</span>
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     );
    // };

  return (
    <div className='bg-[#54B1E2] text-white flex flex-row px-28 pt-[4.6rem]'>
      <div className='flex flex-col'>
        <h1 className={`${montserratLightBold.className} md:text-3xl mt-4 md:mt-0 mb-6`}>Book Your Appointment with<br/> the Best Pain Specialists in Delhi NCR</h1>
        <div className='flex flex-row items-center gap-3'>
            <div className='w-[3.6px] h-9 bg-white'></div>
            <p className={`${montserratSemiSemiBold.className} md:text-base w-[75%]`}>Our integrated approach to treating pain is clinically proven to be <span className='text-[#29519B]'>9.3X*</span> more effective than any other pain treatment in the country.</p>
        </div>
        <Image
            className="hidden md:block md:relative md:bottom-0"
            src={heroImg}
            alt="hero Img"
            width={677} 
            height={500}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
        />
        {/* <BannerImgOverlayTxt /> */}
      </div>
      <div>
        { formLocation === 'request appointment pmax' ? <FormPmax formLocation={formLocation} /> : <Form3 formLocation={formLocation} />  }
        { formLocation !== 'request appointment meta' && <TextCarousel /> }
      </div>
    </div>
  )
}

export default HeroSection

const heroList = ["Led by Super Specialist Pain Doctor", "Round-The-Clock Care", "4 Super-Specialist Under One Roof"]