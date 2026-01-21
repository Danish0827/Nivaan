import React from 'react'
import { rubikSemiBolder, montserratLightBold } from '@/app/fonts'
import { TreatmentData } from '@/app/api/allTypes'

const ProcedureCard = ({ treatment }: { treatment: TreatmentData }) => {
  return (
    <div className="p-6 bg-white rounded-lg md:w-[19.5rem] md:h-[24rem] h-[20rem] w-[16.25rem]">
      <div className="flex justify-between h-14 md:h-[75px] border-b-2 border-[#D95326]">
        <h3 className={`font-bold text-[16px] leading-[18px] md:text-[18px] md:leading-[24px] text-[#2F438F] w-[65%] ${montserratLightBold}`}>
          {treatment.name}
        </h3>
      </div>
      <div className="text-[12px] leading-[18px] md:text-[14px] md:leading-[22px] mt-4">
        <h4 className={`text-[#2F438F] font-semibold ${rubikSemiBolder}`}>Process:</h4>
        <p className='text-black'>{treatment.process}</p>
      </div>
      <div className="text-[12px] leading-[18px] md:text-[14px] md:leading-[22px] mt-4">
        <h4 className={`text-[#2F438F] font-semibold ${rubikSemiBolder}`}>Benefits:</h4>
        <ul>
          {treatment.benefits.map((benefit, i) => (
            <li key={i} className='text-black'>
              <span className="font-extrabold ml-0 md:ml-2">•</span> {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProcedureCard
