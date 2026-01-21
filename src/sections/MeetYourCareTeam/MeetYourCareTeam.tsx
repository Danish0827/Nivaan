import { overlaySlideDataType } from '@/app/api/allTypes'
import { montserratLightBold, montserratSemiSemiBold } from '@/app/fonts'
import ImageOverlaySlideComponent from '@/components/ImageOverlaySlideComponent'
import TeamCard from '@/components/TeamCard'
import React from 'react'

const MeetYourCareTeam = ({TeamCardData, lang}: {TeamCardData: overlaySlideDataType[], lang?: string}) => {
  return (
    <div className='mb-12'>
      {
        lang === 'hindi' 
        ? <h1 className={`${montserratLightBold.className} text-center text-xl md:text-4xl mt-7 md:mt-14 mb-5 md:mb-10 text-[#29519B]`}>अपनी देखभाल टीम से मिलें</h1>
        : <h1 className={`${montserratSemiSemiBold.className} text-center text-xl md:text-4xl mt-7 md:mt-14 mb-5 md:mb-10 text-[#29519B]`}>Meet Your <span className={`${montserratLightBold.className}`}>Care Team</span></h1>
      }
      <div className='hidden md:flex md:flex-row md:justify-center gap-4'>
        {
            TeamCardData.map(obj => <TeamCard key={obj.title} cardData={obj} />)
        }
      </div>
      <div className='flex flex-col items-center md:hidden gap-4'>
        {
            TeamCardData.map(obj => <ImageOverlaySlideComponent key={obj.title} overlaySlideData={obj} />)
        }
      </div>
    </div>
  )
}

export default MeetYourCareTeam
