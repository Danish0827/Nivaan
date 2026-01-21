import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { rubikReg } from "@/app/fonts";

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

const DoctorCard: React.FC<DoctorCardProps> = ({ doc }) => {
  return (
    <div>
      {/* Show DoctorCardDesktop on md screens and larger */}
      <div className="hidden md:block">
        <DoctorCardDesktop doc={doc} />
      </div>
      {/* Show DoctorCardMob on screens smaller than md */}
      <div className="block md:hidden">
        <DoctorCardMob doc={doc} />
      </div>
    </div>
  );
};

export default DoctorCard;

const DoctorCardDesktop: React.FC<DoctorCardProps> = ({ doc }) => {
  return (
    <Card className="px-0  mb-6 md:text-center flex flex-row md:flex-col lg:pb-8 pb-2 w-[82%] md:w-[380px] ">
      <CardHeader>
        <Image className="mx-auto" src={doc.img} alt="doctor img" unoptimized/>
      </CardHeader>
      <CardContent className="w-[130%] md:w-full mt-4 px-0 text-[#1E1E1E]">
        <h3 className="font-semibold text-sm md:text-xl">{doc.name}</h3>
        <p className="text-[11px] md:text-base">{doc.field}</p>
        <p className="text-[11px] md:text-base">{doc.degree}</p>
        <p
          className={`bg-[#EAF1FB] text-[#2F438F] text-xs md:text-xl mt-2 block md:hidden w-full p-1 ${rubikReg.className} `}
        >{`${doc.experience} years of experience`}</p>
      </CardContent>
      <p
        className={`bg-[#EAF1FB] text-[#2F438F] text-xl mt-2 hidden md:block  w-full p-2 ${rubikReg.className}`}
      >{`${doc.experience} years of experience`}</p>
    </Card>
  );
};

const DoctorCardMob: React.FC<DoctorCardProps> = ({ doc }) => {
  return (
    <div className="max-w-md p-6 bg-white rounded-2xl border-2 border-gray-100">
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <Image
            src={doc.img}
            alt="Doctor profile"
            className="w-24 h-24 rounded-full object-cover"
            unoptimized
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-base font-bold text-gray-900">{doc.name}</h2>
          <p className="text-gray-700 mt-1 text-sm">{doc.field}</p>
          <p className="text-gray-700 text-sm">{doc.degree}</p>
          <p
            className={`bg-[#EAF1FB] text-[#2F438F] text-sm md:text-xl mt-2 block md:hidden w-full p-1 ${rubikReg.className} `}
          >
            {`${doc.experience} years of experience`}
          </p>
        </div>
      </div>
    </div>
  )
}
