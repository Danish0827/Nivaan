import React from "react";
import googleIcon from "../../public/desktop/google-icon-small.webp";
import Image from "next/image";
import star from "../../public/desktop/star.webp";
import { rubikReg } from "@/app/fonts";
import { Review } from "@/app/api/allTypes";

const PatientReviewCard_new = ({ review }: { review: Review }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl p-4 shadow-sm w-full h-full min-h-[200px]">
      {/* Top Row - Name & Google Icon */}
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-[14px] md:text-[16px]">{review.name}</h4>
          {review.designation ? 
           <p className="text-[10px] font-semibold text-black-500 mt-[2px]">{review.designation}</p>
          : 
          null}
          <p className="text-[10px] text-gray-500 mt-[2px]">{review.postedWhen}</p>
        </div>
        <Image
          src={googleIcon}
          alt="Google icon"
          width={18}
          height={18}
          className="ml-2"
          unoptimized
        />
      </div>

      {/* Stars */}
      <div className="mt-2">
        {review.starImg ? (
          <Image src={review.starImg} alt="stars" width={60} height={10} unoptimized/>
        ) : (
          <Image src={star} alt="stars" width={60} height={10} unoptimized/>
        )}
      </div>

      {/* Review Text */}
      <p
        className={`text-[12px] md:text-[14px] mt-2 text-gray-800 ${rubikReg.className}`}
      >
        {review.reviewText}
      </p>
    </div>
  );
};

export default PatientReviewCard_new;
