import { overlaySlideDataType } from '@/app/api/allTypes'
import { montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import ImageOverlaySlideComponent from '@/components/ImageOverlaySlideComponent'
import ImageOverlaySlideComponent2 from '@/components/ImageOverlaySlideComponent2'
import React from 'react'

const OurTeam = ({data, title}: {data: overlaySlideDataType[], title: string}) => {
  return (
    <div className='text-center mb-10 mx-10'>
      <h1 className={`${montserratSemiBold.className} text-xl md:text-4xl mb-3 md:mb-6 mt-10 text-[#264494]`}>{title}</h1>

      <div className='flex flex-col items-center md:flex-row md:justify-center gap-6'>
        {
            data.map(obj => <ImageOverlaySlideComponent2 key={obj.title} overlaySlideData={obj} />)
        }
      </div>
    </div>
  )
}

export default OurTeam
