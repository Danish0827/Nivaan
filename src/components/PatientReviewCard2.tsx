import React from "react";
import googleIcon from "../../public/desktop/google-icon-small.webp";
import Image from "next/image";
import star from "../../public/desktop/star.webp";
import { rubikReg } from "@/app/fonts";
import { Review } from "@/app/api/allTypes";

const PatientReviewCard2 = ({ review }: { review: Review }) => {
  return (
    <div className="flex flex-col bg-[#EAF1FB] rounded-xl w-[290.72px] h-[161px] md:w-[649px] md:h-[362.54px] relative p-2 md:p-4 mx-auto">
      <div className="flex justify-end">
        <Image
          className="mt-0 mr-0 hidden md:block"
          src={googleIcon}
          alt="google icon small"
          height={36.73}
          width={36.73}
          unoptimized
        />
        <Image
          className="mt-[-2px] mr-[-2px] block md:hidden"
          src={googleIcon}
          alt="google icon small"
          height={16.31}
          width={16.31}
          unoptimized
        />
      </div>
      <div className="flex flex-row">
        <div className="absolute bottom-0 left-0">
          <Image
            className="hidden md:block"
            src={review.img}
            alt="user image"
            width={255}
            height={283}
            unoptimized
          />
          <Image
            className="block md:hidden"
            src={review.img}
            alt="user image"
            width={110.21}
            height={125.95}
            unoptimized
          />
        </div>
        <div className="flex flex-col w-[283px] ml-[70px] md:w-[calc(100%-240px)] md:ml-[220px]">
          <p
            className={`text-[9px] leading-[11px] md:text-[21.83px] md:leading-[29.09px] bg-white md:p-3 p-2 rounded-2xl ${rubikReg.className}`}
          >
            {review.reviewText}
          </p>
          <div className="flex flex-row justify-between mt-2 px-2">
            <div className="flex flex-col ml-5">
              <h4 className="font-bold text-[10px] leading-[11.85px] md:text-[25.47px] md:leading-[30.18px]">
                {review.name}
              </h4>
              <Image src={star} alt="star icon small" width={104.75} height={15.62} className="hidden md:block" unoptimized/>
              <Image src={star} alt="star icon small" width={46.05} height={6.87} className="block md:hidden ml-[5px]" unoptimized/>
            </div>
            <div className="text-[7px] leading-[8.3px] md:text-[13.43px] md:leading-[15.91px]">
              {review.postedWhen}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReviewCard2;
