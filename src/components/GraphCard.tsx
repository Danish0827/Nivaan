import React from 'react'
import Image from 'next/image'
import { GraphCardType } from '@/app/api/allTypes'

const GraphCard = ({graphObj, isHindi}: {graphObj: GraphCardType, isHindi?: boolean}) => {
  return (
    <div className='bg-[#F4FBFF] rounded-2xl py-6 w-[18.25rem] md:w-[28.2rem]'>
      {
        isHindi ? (
          <>
            <Image src={graphObj.img} alt='graph footer' className='mx-auto hidden md:block' unoptimized/>
            <Image src={graphObj.imgMob} alt='graph footer' width={291.76} className='mx-auto block md:hidden' unoptimized/>
          </>
        ) : (
          <>
            <Image src={graphObj.img} alt='graph footer' className='mx-auto hidden md:block' unoptimized/>
            <Image src={graphObj.imgMob} alt='graph footer' width={291.76} className='mx-auto block md:hidden' unoptimized/>
          </>
        )
      }
    </div>
  )
}

export default GraphCard
