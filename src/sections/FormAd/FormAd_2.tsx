'use client'
import { rubikBold, montserratBold, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";
import googleImg from "../../../public/googleImage.webp";
import smileImg from "../../../public/smile.webp";
import likeImg from "../../../public/like.webp";
import reviewIcon from "../../../public/review_icon.webp";
import { usePathname } from "next/navigation";
import FormAd_2 from "@/components/Form2";
import FormMumbai from "@/components/FormMumbai";
import Form_Mumbai from "@/components/Form_mumbai";
import Form2 from "@/components/Form2";
import Form_2 from "@/components/Form_2";
type CardDataType = {
  title: string;
  desc: string;
  img: any;
};
interface FormAdProps {
  isForm2?: boolean;
  formLocation?: string;
  pageRoute?: string
  cardData?: CardDataType[];
  location?: string;
}
const FormAd__2: React.FC<FormAdProps> = ({ isForm2, formLocation, pageRoute, cardData,location="" }) => {
  const pathName = usePathname();
  const isNextPath = pathName === "/next/acl-injury"

  return (
    <div className="py-8 px-2">
      <div className="max-w-7xl mx-auto p-2 flex flex-col-reverse justify-center gap-1 md:gap-16 md:flex-row">
        <div className="hidden md:flex flex-col gap-3 mt-10">
          <FormAdCard title="4.8/5" desc="Positive Reviews" img={googleImg} />
          <FormAdCard title="20K+" desc="Happy Patients" img={smileImg} />
          <FormAdCard title="90%" desc="Surgeries Avoided" img={likeImg} />
        </div>
        {
          isNextPath || location === "mumbai"
            ? <Form_Mumbai />
            : <Form_2 />
        }
      </div>
    </div>
  );
};
export default FormAd__2;
const FormAdCard = ({ title, desc, img }: CardDataType) => {
  return (
    <div className="border-[1px] border-[#2F438F] w-[25%] md:w-[260px] rounded-lg text-[#2F438F] px-4 md:px-8 p-4 relative">
      <p className={`${montserratBold.className} text-sm md:text-2xl`}>
        {title}
      </p>
      <p className={`${rubikReg.className} text-xs md:text-xl`}>{desc}</p>
      <div className="border-[1px] border-[#2F438F] rounded-full absolute bg-white top-5 -left-5 p-1 md:p-[6px]">
        <Image src={img} alt="logo" height={30} unoptimized/>
      </div>
    </div>
  );
};

const FormAdCard2 = ({ title, desc, img }: CardDataType) => {
  return (
    <div className="flex gap-2 border-[1px] border-[#E0E0DD] bg-[#FBFAFA] drop-shadow-lg w-[30%] rounded-lg text-[#2F438F] px-2 p-4 relative md:gap-3 md:px-3 md:w-[250px] ">
      <Image className="size-5 md:size-11" src={img} alt="logo" unoptimized/>
      <div>
        <p className={`${montserratBold.className} text-xs md:text-2xl`}>
          {title}
        </p>
        <p className={`${rubikReg.className} text-[10px] md:text-lg`}>{desc}</p>
      </div>
    </div>
  );
};

const FormAdCard2Mob = ({ title, desc, img }: CardDataType) => {
  return (
    <div className="flex flex-col gap-2 border-[1px] border-[#E0E0DD] bg-[#FBFAFA] drop-shadow-lg w-full rounded-lg text-[#2F438F] p-2 relative md:gap-3 md:px-3 md:w-[250px] ">
      <div className="flex flex-row items-center gap-2">
        <Image className="size-5 md:size-11" src={img} alt="logo" unoptimized/>
        <p className={`${montserratBold.className} text-xs md:text-2xl`}>
          {title}
        </p>
      </div>
      <div>
        <p className={`${rubikReg.className} text-[10px] md:text-lg`}>{desc}</p>
      </div>
    </div>
  );
};
