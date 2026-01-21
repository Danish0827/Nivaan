import { rubikReg, rubikSemiBold } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const ThankYouPlaceCard = () => {
  return (
    <div className="border-[#2F438F] border-[1px] rounded-lg py-4 md:py-6 px-3 md:px-16 relative w-[1000px] -z-10">
      <div className=" z-[99] absolute top-0 -translate-y-6 bg-white left-1/2 transform -translate-x-1/2 ">
        <Image
          src={require("../../public/locationIcon.webp")}
          alt="logo"
          className=""
          unoptimized
        />
      </div>
      <p
        className={`${rubikSemiBold.className} text-center mb-6 lg:text-2xl text-[#2F438F] text-sm`}
      >
        We have clinics across
      </p>
      <ul
        className={`${rubikReg.className} list-disc grid grid-cols-2 md:grid-cols-4 gap-4 lg:text-xl text-[#2F438F] text-xs pl-5`}
      >
        <li>South Delhi</li>
        <li>North Delhi</li>
        <li>West Delhi</li>
        <li>East Delhi</li>
        <li>Gurugram</li>
        <li>Noida</li>
        <li>Ghaziabad</li>
        <li>Faridabad</li>
        {/* <li>Meerut</li> */}
        <li>Lucknow</li>
        <li>Jaipur</li>
        <li>Mumbai</li>
      </ul>
    </div>
  );
};

export default ThankYouPlaceCard;
