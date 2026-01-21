import { rubikSemiBolder } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { ThankYou } from "@/app/api/allTypes";

const ThankYouCard = ({card}: {card: ThankYou}) => {
  return (
    <div className="border-[#2F438F] border-[1px] rounded-xl lg:w-36 p-2 md:p-4 flex flex-col items-center justify-center gap-1 md:gap-3 bg-white shadow-lg min-w-[80px]">
      <Image className="hidden md:block" src={card.img} alt="img" unoptimized/>
      <Image className="block md:hidden" src={card.mobImg} alt="img-mob" unoptimized/>
      <p
        className={`${rubikSemiBolder.className} text-[#2D458F] text-[7.91px] md:text-xs text-center font-semibold`}
      >
        {card.title}
      </p>
    </div>
  );
};

export default ThankYouCard;
