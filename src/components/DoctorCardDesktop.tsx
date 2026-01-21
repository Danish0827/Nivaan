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

const DoctorCardDesktop: React.FC<DoctorCardProps> = ({ doc }) => {
  return (
    <Card className="w-full max-w-[350px] pb-8 text-center">
      <CardHeader>
        <Image
          className="mx-auto"
          src={doc.img}
          alt={`${doc.name} profile picture`}
          width={160}
          height={160}
          unoptimized
        />
      </CardHeader>
      <CardContent className=" text-base px-4 text-[#1E1E1E]">
        <h3 className="font-semibold text-xl mb-2">{doc.name}</h3>
        <p className="mb-1">{doc.field}</p>
        <p className="mb-42">{doc.degree}</p>
      </CardContent>
      <p
          className={`bg-[#EAF1FB] text-[#2F438F] text-xl w-full p-2 ${rubikReg.className}`}
        >
          {`${doc.experience} years of experience`}
        </p>
    </Card>
  );
};

export default DoctorCardDesktop;
