import React from "react";
import googleIcon from "../../public/desktop/google-icon-small.webp";
import Image from "next/image";
import star from "../../public/desktop/star.webp";
import { rubikReg } from "@/app/fonts";
import { Review } from "@/app/api/allTypes";

const PatientReviewCard = ({ review, isThereVideo }: { review: Review, isThereVideo?: boolean }) => {
  return (
    <div className={`flex flex-col bg-[#EAF1FB] rounded-xl ${isThereVideo ? "h-48 md:h-60" : "h-48 md:h-52"} relative`}>
      <div className="hidden md:flex md:justify-end">
        <Image
          className="mt-2 mr-2"
          src={googleIcon}
          alt="google icon small"
          height={19.58}
          width={19.58}
          unoptimized
        />
      </div>
      <div className="flex justify-end md:hidden">
        <Image
          className="mt-2 mr-2"
          src={googleIcon}
          alt="google icon small"
          height={16.31}
          width={16.31}
          unoptimized
        />
      </div>
      <div className="flex flex-row">
        <div className="absolute bottom-0">
          <Image
            src={review.img}
            alt="user image"
            width={110.4}
            height={154.8}
            className="rounded-bl-xl"
            unoptimized
          />
        </div>
        <div className="flex flex-col w-[60%] absolute left-20 md:left-28">
          <p
            className={`text-[9px] leading-[11px] md:text-[11.63px] md:leading-[15.5px] bg-white md:p-3 p-3 rounded-2xl ${rubikReg.className}`}
          >
            {review.reviewText}
          </p>
          <div className="flex flex-row justify-between mt-2 px-2">
            <div className="flex flex-col ml-2">
              <h4 className="font-bold text-[10px] leading-[11.85px] md:text-[13.57px] md:leading-[16.08px]">
                {review.name}
              </h4>
              {review.starImg ? <Image src={review.starImg} alt="star icon small" width={42.42} height={6.87} unoptimized/> : <Image src={star} alt="star icon small" width={110} height={154} unoptimized/>}
            </div>
            <div className="text-[7px] leading-[8.3px] md:text-[7.16px] md:leading-[8.48px]">
              {review.postedWhen}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReviewCard;
