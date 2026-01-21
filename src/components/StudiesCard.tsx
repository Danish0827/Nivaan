import Image from "next/image"
import { rubikSemiBold, rubikLight } from "@/app/fonts"
import { ImportantStudiesType } from "@/app/api/allTypes"

const StudiesCard = ({heading, subHeading, img, url}: ImportantStudiesType) => {
    return (
        <a href={url} className='text-sm md:text-base text-[#29519B]' target="_blank">
            <div className="bg-[#EAF1FB] rounded-3xl p-6 min-h-[325px] md:min-h-[407px] flex flex-col gap-4 drop-shadow-lg">
                <Image
                    src={img}
                    width={370}
                    height={370}
                    alt='study'
                    className="mx-auto"
                    unoptimized
                />
                <p className={`${rubikLight.className} text-xs md:text-sm text-gray-500`}>
                    {subHeading}
                </p>
                <p className={`${rubikSemiBold.className} text-sm md:text-base text-[#29519B]`}>
                    {heading}
                </p>
            </div>
        </a>
        
    )
}

export default StudiesCard