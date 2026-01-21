import React from "react";
import Image from "next/image";
import { rubikBold, rubikReg, rubikSemiBold, rubikSemiBolder } from "@/app/fonts";
import { TreatmentData } from "@/app/api/allTypes";

const TreatmentCard = ({ treatment }: { treatment: TreatmentData }) => {
  return (
    <div className="p-6 bg-white rounded-lg w-full md:w-[21.825rem] md:h-[28rem] h-[21rem] ">
      <div className="flex justify-between">
        <h3 className={`${rubikBold.className} font-black text-[16px] leading-[18px] md:text-[22px] md:leading-[26px] text-[#2F438F] w-[65%] mt-4`}>
          {treatment.name}
        </h3>
        <div className="">
          <Image
            className="hidden md:block"
            src={treatment.img!}
            alt="treatement image"
            width={94}
            height={91.4}
            unoptimized
          />
          <Image
            className="block md:hidden"
            src={treatment.img!}
            alt="treatement image"
            width={66}
            height={64.15}
            unoptimized
          />
        </div>
      </div>
      <div className="mt-4 text-[12px] leading-[18px] md:text-[14px] md:leading-[22px]">
        <h4 className={`${rubikSemiBolder.className} text-[#2F438F]`}>Process:</h4>
        <p className={`${rubikReg.className} w-[107%] md:w-[105%]`}>{treatment.process}</p>
      </div>
      <div className="mt-4 text-[12px] leading-[18px] md:text-[14px] md:leading-[22px]">
        <h4 className={`${rubikSemiBolder.className} text-[#2F438F]`}>Benefits:</h4>
        <ul className="capitalize">
          {treatment.benefits.map((benefit, i) => (
            <li className={`${rubikReg.className}`} key={i}>
              <span className="ml-0 md:ml-2">•</span> {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TreatmentCard;
