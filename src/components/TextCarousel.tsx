'use client'
import { weTreatHeroSectionMob } from '@/app/api/requestAppointmentData';
import { weTreatHeroSectionMobHindi } from '@/app/api/requestAppointmentHindiData';
import React, { useRef } from 'react';

export default function TextCarousel({lang}:{lang?:string}) {
  const ref = useRef<HTMLUListElement>(null);
  const txtData = lang === "hindi" ? weTreatHeroSectionMobHindi : weTreatHeroSectionMob;

  return (
    <div className="relative w-full overflow-hidden mb-6">
      <div className="absolute inset-0 pointer-events-none" />
      <ul
        ref={ref}
        className="flex flex-row whitespace-nowrap overflow-x-auto scrollbar-hidden"
      >
        {txtData.map((treat, index) => (
          <li
            key={index}
            className="inline-block px-4 mx-2 rounded-lg text-[#FFFFFF] font-bold"
          >
            {treat}
          </li>
        ))}
      </ul>
    </div>
  );
}
