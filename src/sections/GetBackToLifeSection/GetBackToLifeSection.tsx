import { GraphCardType } from '@/app/api/allTypes'
import { montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import GraphCard from '@/components/GraphCard'
import React from 'react'

const GetBackToLifeSection = ({isHindi, GraphCardData, heading="Get Back To The Life You Love", para="Out first of it's kind approach in India has demonstrated the below results in clinical studies."}: {isHindi?: boolean, GraphCardData: GraphCardType[], heading?: string, para?: string}) => {
  return (
    <div className='bg-[#54B1E240] py-10 md:py-20 px-6 text-left'>
        <h1 className={`${montserratSemiBold.className} text-[#29519B] text-xl md:text-[2.5rem] mb-4 ml-8 md:text-center`}>{heading}</h1>
        <p className={`${montserratSemiSemiBold.className} text-sm md:text-lg mb-10 w-[80%] mx-auto md:w-full md:text-center`}>{para}</p>
        <div className='flex flex-col items-center md:flex-row md:justify-center gap-8'>
            {
                GraphCardData.map(obj => <GraphCard key={obj.id} graphObj={obj} isHindi={isHindi} />)
            }
        </div>
    </div>
  )
}

export default GetBackToLifeSection
