import React, { use } from "react";
import googleIcon from "../../public/desktop/google-icon-small.webp";
import Image from "next/image";
import star from "../../public/desktop/star.webp";
import { rubikReg } from "@/app/fonts";
import { usePathname } from "next/navigation";
import { Review } from "@/app/api/allTypes";

const PatientReviewCard3 = ({ review }: { review: Review }) => {
  const path = usePathname()
  const isArthroplasty = path === "/next/chronic-pain-arthroplasty"
  return (
    <div className="flex flex-col rounded-md h-64 md:translate-x-5 min-h-40 md:min-h-56 md:w-[90%] relative bg-white drop-shadow-md">
        <div className="flex flex-col w-full px-6 py-4">
            <div className="flex flex-col pb-0 md:pb-2">
              { isArthroplasty ? (
                <h4 className="font-bold text-[14.31px] leading-[13.4px] md:text-[16.57px] md:leading-[16.08px]">
                    {review.name}
                </h4>
              ) : (
                <div className="flex flex-row justify-between">
                  <h4 className="font-bold text-[14.31px] leading-[13.4px] md:text-[16.57px] md:leading-[16.08px]">
                      {review.name}
                  </h4>
                  <Image src={googleIcon} alt="google" unoptimized/>
                </div> 
              )}
            </div>
            <div className="text-[9px] leading-[7.07px] md:text-[11px] md:leading-[8.48px] pb-2 md:pb-3">
              {review.postedWhen}
            </div>
            <Image className={`mb-3 ${review.isFourStar ? "h-[0.968rem] w-[5.204rem] md:h-[19.53px] md:w-[104.99px]" : "h-[0.968rem] w-[6.656rem] md:h-[1.221rem] md:w-[8.393rem]"}`} src={isArthroplasty ? star : review.img} alt="star icon small" unoptimized/>
            <p
                className={`text-[12.7px] leading-[13px] font-thin md:text-[14.63px] md:leading-[18px] rounded-2xl mt-4 md:mt-0 ${rubikReg.className}`}
            >
                {review.reviewText}
            </p>
            <div className="flex flex-row justify-between mt-2 px-2">
            
            
            </div>
        </div>
    </div>

  );
};

export default PatientReviewCard3;
