import { overlaySlideDataType } from '@/app/api/allTypes'
import { montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import ImageOverlaySlideComponent from '@/components/ImageOverlaySlideComponent'
import React from 'react'

const WhoIsSection = ({data}: {data: overlaySlideDataType[]}) => {
  return (
    <div className='text-center mb-10'>
      <h1 className={`${montserratSemiBold.className} text-xl md:text-4xl mb-3 md:mb-6 mt-10 text-[#264494]`}>Who is a Pain Specialists?</h1>
      <p className={`${montserratSemiSemiBold.className} text-sm md:text-base text-[#181818B2] w-[80%] md:w-[62%] mx-auto text-left md:text-center`}>
        Pain Specialists are physicians who specialise in the evaluation, diagnosis, and treatment of pain. 
        After their Master{"'"}s Degree, these physicians undergo an additional one-year fellowship in pain management. 
        They have advanced training that qualifies them as your best source of treatment if you are experiencing 
        any type of pain due to illness or injury.
      </p>
      <h1 className={`${montserratSemiBold.className} text-xl md:text-4xl mb-3 md:mb-10 mt-7 md:mt-14 text-[#264494] w-3/4 text-left md:text-center md:w-1/2 mx-auto`}>Why is a Pain Specialist the best doctor to treat your pain?</h1>
      <div className='flex flex-col items-center md:flex-row md:justify-center gap-6'>
        {
            data.map(obj => <ImageOverlaySlideComponent key={obj.title} overlaySlideData={obj} />)
        }
      </div>
    </div>
  )
}

export default WhoIsSection
