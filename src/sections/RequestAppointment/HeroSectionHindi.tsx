import Image from "next/image";
import React from "react";
import heroImg from "../../../public/homepageBannerHindi.webp";
import {
  montserratLightBold,
} from "@/app/fonts";
import Form3Hindi from "@/components/Form3Hindi";
import TextCarousel from "@/components/TextCarousel";

const HeroSectionHindi = ({ formLocation }: { formLocation?: string }) => {
  // const BannerImgOverlayTxt = () => {
  //   return (
  //     <div className="flex flex-col gap-6 relative left-20 top-40">
  //       <div
  //         className="flex flex-row items-center gap-2 px-4 py-2 rounded-3xl w-[40%] ml-44 text-[#363F44]"
  //         style={{
  //           background:
  //             "linear-gradient(92.54deg, rgba(255, 255, 255, 0.52) -23.8%, rgba(255, 255, 255, 0.49) 127.28%)",
  //         }}
  //       >
  //         <span className={`${montserratLightBold.className} text-[1.685rem] `}>
  //           4.9
  //         </span>
  //         <Image src={Star} alt="star icon" width={28.79} height={28.79} />
  //         <span className={`${montserratSemiBold.className} text-lg`}>
  //           यूजर रेटिंग्स
  //         </span>
  //         <Image
  //           src={GoogleIcon}
  //           alt="google icon"
  //           width={33.81}
  //           height={34.15}
  //         />
  //       </div>
  //       {heroList.map((list, i) => (
  //         <div
  //           key={i}
  //           className={`flex flex-row items-center gap-2 px-4 py-4 rounded-3xl ${
  //             i === 0
  //               ? "w-[72%] mr-44"
  //               : i === 2
  //               ? "w-[52%] mr-44"
  //               : "w-[55%] ml-44"
  //           }`}
  //           style={{
  //             background:
  //               "linear-gradient(92.54deg, rgba(255, 255, 255, 0.52) -23.8%, rgba(255, 255, 255, 0.49) 127.28%)",
  //           }}
  //         >
  //           <Image
  //             src={checkMark}
  //             alt="check mark icon"
  //             width={17.99}
  //             height={14.39}
  //           />
  //           <span
  //             className={`${montserratLightBold.className} text-lg text-[#181818]`}
  //           >
  //             {list}
  //           </span>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <div className="bg-[#54B1E2]">
      <div className=" text-white flex flex-row justify-between pt-[4.6rem] max-w-7xl mx-auto ">
        <div className="flex flex-col relative">
          <h1
            className={`${montserratLightBold.className} md:text-3xl mt-4 md:mt-0 mb-6`}
          >
            भारत का सबसे एडवांस नॉन-सर्जिकल पेन ट्रीटमेंट
          </h1>
          <div className="flex flex-row items-center gap-3">
            <div className="w-[3.6px] h-9 bg-white"></div>
            <p className={`font-medium md:text-base w-[75%]`}>
              दर्द से छुटकारा पाने के लिए (बहु-विशेषज्ञ टीम द्वारा किया गया
              इलाज) <span className="text-lg font-black">9X</span> गुना अधिक
              प्रभावी साबित हुआ है।
            </p>
          </div>
          <Image
            className="hidden md:block md:absolute md:bottom-0"
            src={heroImg}
            alt="hero Img"
            width={677}
            height={500}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
          {/* <BannerImgOverlayTxt /> */}
        </div>
        <div>
          <Form3Hindi formLocation={formLocation} />
          <h2
            className={`${montserratLightBold.className} text-base mt-3 mb-0 ml-5 text-[#264494]`}
          >
            हमारे यहाँ इलाज किया जाता हैं
          </h2>
          <TextCarousel lang="hindi" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHindi;

const heroList = [
  "हॉस्पिटल में भर्ती के बिना दर्द के लिए सबसे एडवांस प्रक्रिया",
  "सुपर स्पेशलिस्ट दर्द डॉक्टर की देखरेख में",
  "4 सुपर स्पेशलिस्ट द्वारा आपकी जांच",
];
