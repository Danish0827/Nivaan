import React from "react";
import Image from "next/image";
import { Doctor } from "@/app/api/allTypes";

const DoctorCardNcr = ({ doctorData }: { doctorData: Doctor[] }) => {
  const doctor = doctorData[0];
  return (
    <div className="w-[90vw] sm:w-[300px] md:w-[320px] lg:w-[340px] bg-white rounded-2xl shadow-md mx-auto my-4 flex-shrink-0 flex flex-col items-center text-center overflow-hidden">
      <div className="p-5 w-full flex flex-col items-center">
        <Image
          src={doctor.img}
          alt={doctor.name}
          width={130}
          height={130}
          className="rounded-full object-cover mb-4"
          unoptimized
        />
        <h3 className="text-base font-semibold text-black">{doctor.name}</h3>
        <p className="text-sm text-gray-700 mt-2">{doctor.field}</p>
        <p className="text-sm text-gray-700">{doctor.degree}</p>
      </div>

    {
    doctor.experience ?
        (doctor.experience=='27+' ?

        <div className="bg-[#EAF1FB] mb-auto w-full py-2">
          <p className="text-[#2F438F] text-sm font-semibold text-center">
            {doctor.experience}&nbsp;years of experience
          </p>
        </div>
        :
        <div className="bg-[#EAF1FB] mb-auto w-full py-2" style={{ marginTop: '2.8rem' }}>
          <p className="text-[#2F438F] text-sm font-semibold text-center">
            {doctor.experience}&nbsp;years of experience
          </p>
        </div>
        )
      :
        <>
        </>
    }

      {/* Extra padding below for spacing */}
      <div className="h-4" />
    </div>
  );
};

export default DoctorCardNcr;
