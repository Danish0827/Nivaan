import React from 'react';
import Image from 'next/image';
import { rubikBold, rubikReg } from '@/app/fonts';
import { ConditionsTreatedCardDataType } from '@/app/api/allTypes';

const ConditionsTreatedCard = ({ conditionsTreatedCardDataObj }: { conditionsTreatedCardDataObj: ConditionsTreatedCardDataType }) => {
  return (
    <div className="p-6 pt-10 border bg-[#EAF1FB] rounded-lg shadow-md relative w-60 h-80 md:w-[22rem] md:h-[30.4375rem]">
      <h2 className={`${rubikBold.className} text-sm md:text-2xl font-semibold mb-4 md:mb-6 text-[#2D458F]`}>{conditionsTreatedCardDataObj.heading}</h2>
      <ul className="list-disc list-inside mb-4">
        {
            conditionsTreatedCardDataObj.listArr.map((item,index) => <li key={index} className={`${rubikReg.className} text-xs md:text-2xl mb-2`}>{item}</li>)
        }
      </ul>
      <div className="absolute bottom-6 right-6">
        <Image src={conditionsTreatedCardDataObj.icon} alt="Icon" width={78.92} height={83.25} className='hidden md:block' unoptimized/>
        <Image src={conditionsTreatedCardDataObj.icon} alt="Icon" width={55.94} height={57.61} className='block md:hidden' unoptimized/>
      </div>
    </div>
  );
};

export default ConditionsTreatedCard;