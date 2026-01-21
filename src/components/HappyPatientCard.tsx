import { HappyPatientCardDataType } from '@/app/api/homePageData'
import React from 'react'
import Image from 'next/image'
import { rubikBold, rubikReg } from '@/app/fonts'

const HappyPatientCard = ({data}: {data: HappyPatientCardDataType}) => {
    return (
        <div className='text-center relative flex flex-col items-center justify-center'>
            <Image src={data.img} alt="rating" className='relative top-8' width={64} height={64} unoptimized/>
            <div className='flex flex-col items-center justify-center md:w-[66.5rem] h-[29.5rem] md:h-[20rem] border border-[#00000040] shadow-md rounded-2xl px-2 md:px-16'>
                <h4 className={`${rubikBold.className} text-sm mb-1 w-[80%] md:w-full`}>{data.name}</h4>
                <span className={`${rubikReg.className} text-xs mb-1 text-gray-400`}>{data.postedOn}</span>
                <Image src={data.starImg} alt="rating" width={94} height={18} unoptimized/>
                <p className={`${rubikReg.className} text-xs md:text-[0.9375rem] mt-6`}>{data.description}</p>
            </div>
            
        </div>
    )
}

export default HappyPatientCard
