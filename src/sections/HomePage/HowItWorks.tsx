import React from 'react'
import { CustomCard } from "../../components/ui/custom-card";
import heroCard2Img from "../../../public/home/Group-2416-768x91.png.webp";
import heroCard2ImgMd from "../../../public/home/Group-2416.png.webp";
import herCard2ImgMob from "../../../public/home/Group-2416-300x35.png.webp"
import heroCard1ImgMob from "../../../public/home/Image-2-290x300.png.webp";
import heroCard1Img from "../../../public/home/Image-2-768x794.png.webp";
import heroCard1ImgMd from "../../../public/home/Image.png.webp";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-12 text-[#29519B]">
        <h2 className="md:text-[40px] text-2xl mb-4">
          How It <span className="font-bold">Works</span>
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg">
          Tired of traveling from one doctor to another to treat your pain? We&apos;ve made the road to recovery simpler by surrounding you with all the care you need under one roof.
        </p>
      </div>

      <div className="flex flex-col space-y-8 max-w-5xl mx-auto">
        <CustomCard
          title="THE TRADITIONAL WAY"
          description="Tired of traveling from one doctor to another to treat your muscle and joint pain?"
          imageUrl={heroCard1Img.src}
          mobImgUrl={heroCard1ImgMob.src}
          //imageUrlMd={heroCard1ImgMd.src}
          imageAlt="Traditional healthcare journey diagram"
          className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow w-[342px] h-[560px] md:h-[946.61px] md:w-[733px] mx-auto"
          titleClassName="text-xl font-bold text-center mb-4"
          descriptionClassName="text-gray-600 text-center mb-6"
          imageClassName="w-[332px] h-[343.12px] md:h-[773px] md:w-[748px] mx-auto"
        />
        
        <CustomCard
          title="THE NIVAAN WAY"
          description="Nivaan is the one-stop solution for all your pain needs"
          imageUrl={heroCard2Img.src}
          mobImgUrl={herCard2ImgMob.src}
          //imageUrlMd={heroCard2ImgMd.src}
          imageAlt="Nivaan healthcare journey"
          className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow w-[342px] h-[260px]  md:h-[346.61px] md:w-[1033px]"
          titleClassName="text-xl font-bold text-center mb-4"
          descriptionClassName="text-gray-600 text-center mb-6"
          imageClassName="h-[34.58px] w-[293px] md:h-[108px] md:w-[915px] mx-auto"
        />
      </div>
    </div>
  )
}

export default HowItWorks
