"use client";
import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { rubikReg, rubikSemiBolder } from "@/app/fonts";
import { usePathname } from "next/navigation";

export interface Doctor {
  id: number;
  img: StaticImageData;
  name: string;
  field: string;
  degree: string;
  experience: string;
}

interface DoctorCardProps {
  doc: Doctor;
  handleClick: (docName: string) => void;
}
const DoctorCardWithConsultation: React.FC<DoctorCardProps> = ({
  doc,
  handleClick,
}) => {
  const pathName = usePathname();

  return (
    <Card className="px-0 py-6 mb-4 md:mb-6 md:text-center flex flex-col w-[82%] md:w-[380px] rounded-bl-2xl rounded-br-2xl">
      <div className="flex flex-row md:flex md:flex-col mb-3">
        <div className="w-[40%] flex justify-center items-center mt-3 mx-auto">
          <Image
            className="block md:hidden"
            src={doc.img}
            alt="doctor img"
            width={70}
            height={70}
            unoptimized
          />
          <Image
            className="hidden md:block mt-4"
            src={doc.img}
            alt="doctor img"
            width={158}
            height={158}
            unoptimized
          />
        </div>

        <div className="w-[60%] md:w-full mt-4 text-[11px] leading-[18.94px] md:text-base px-0 text-[#1E1E1E]">
          <h3
            className={`${rubikSemiBolder.className} text-[10px] leading-[16.94px] md:text-xl`}
          >
            {doc.name}
          </h3>
          <p
            className={`${rubikReg.className} text-[9.5px] leading-[12.94px] md:text-base`}
          >
            {doc.field}
          </p>
          <p
            className={`${rubikReg.className} text-[9.5px] leading-[12.94px] md:text-base`}
          >
            {doc.degree}
          </p>
          <p
            className={`bg-[#EAF1FB] text-[#2F438F] text-[11px] leading-[18.94px] md:text-xl mt-1 block md:hidden w-full p-1 ${rubikReg.className} `}
          >{`${doc.experience} years of experience`}</p>
          <p
            className={`bg-[#EAF1FB] text-[#2F438F] text-xl mt-1 hidden md:block  w-full p-2 ${rubikReg.className}`}
          >{`${doc.experience} years of experience`}</p>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCardWithConsultation;
