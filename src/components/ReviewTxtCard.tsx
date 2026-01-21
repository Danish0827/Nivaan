import Image from "next/image"
import googleIcon from "../../public/desktop/google-logo.webp"
import { montserratSemiBold, montserratSemiSemiBold } from "@/app/fonts"
import fourStar from "../../public/four_star.webp"
import { Review } from "@/app/api/allTypes"

const ReviewTxtCard = ({reviewData} : { reviewData: Review }) => {
  return (
    <div className="bg-[#ECF8FF] py-3 px-6 md:p-6 w-[18rem] md:w-[22.885rem] md:h-[20.242rem] rounded-2xl">
        <div className="flex flex-row justify-between items-baseline">
            <div className="flex flex-col mt-2">
                <h3 className={`${montserratSemiBold.className} text-[15.28px] md:text-[16.19px]`}>{reviewData.name}</h3>
                <span className={`${montserratSemiSemiBold.className} text-[#18181866] text-[10.19px] md:text-[12.59px] mb-2 md:mb-4`}>{reviewData.postedWhen}</span>
            </div>
            <Image src={googleIcon} alt="googleIcon" width={36.78} height={37.15} className="hidden md:block" unoptimized/>
            <Image src={googleIcon} alt="googleIcon" width={20.8} height={23.43} className="block md:hidden" unoptimized/>
        </div>
        <Image src={fourStar} alt="stars icon" className="mb-2 hidden md:block" unoptimized />
        <Image src={fourStar} alt="stars icon" className="mb-2 block md:hidden w-[4.9rem] h-[0.85rem]" unoptimized />
        <p className={`${montserratSemiSemiBold.className} text-[#181818B2] text-[11.88px] leading-[20.37px] md:text-[14.39px] md:leading-[21.59px] mb-2 md:mb-4`}>
            {reviewData.reviewText}
        </p>
    </div>
  )
}

export default ReviewTxtCard
