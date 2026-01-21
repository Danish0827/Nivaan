import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import MedicalIcon from '../../public/medical_icon.webp'
import { rubikSemiBolder, rubikReg, montserratSemiBold } from "@/app/fonts";

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
}

const DoctorCard2: React.FC<DoctorCardProps> = ({ doc }) => {
  return (
    <Card className="relative px-0 mb-10 md:text-center lg:pb-6 w-60 md:w-[23.75rem] text-[#1E1E1E] border-[#BEE4F7]">
      <CardHeader className="relative">
        <Image className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[89px] h-[89px] md:w-[115px] md:h-[115px]" src={doc.img} alt="doctor img" unoptimized/>
      </CardHeader>
      <CardContent className="md:w-full mt-0 md:mt-6 px-0 text-center text-[#1E1E1E]">
        <h3 className={`font-semibold text-base md:text-xl ${rubikSemiBolder.className}`}>{doc.name}</h3>
        <div className="w-12 h-0.5 bg-[#2F438F] mx-auto my-2"></div>
        <p className={`text-xs md:text-[15.6px] mb-1 ${rubikReg.className}`}>{doc.field}</p>
        <p className={`text-xs md:text-[15.6px] ${rubikReg.className}`}>{doc.degree}</p>
        <Image className="mx-auto mt-2" src={MedicalIcon} alt="MedicalIcon" unoptimized/>
        <p className={`text-[#1E1E1E] text-xs font-semibold md:text-[15.6px] mt-2 block md:hidden w-full p-1 ${rubikSemiBolder.className}`}>{`${doc.experience} years of experience`}</p>
      </CardContent>
      <p className={`text-[#1E1E1E] text-xl hidden md:block w-full ${montserratSemiBold.className}`}>{`${doc.experience} years of experience`}</p>
    </Card>
  );
};

export default DoctorCard2;
