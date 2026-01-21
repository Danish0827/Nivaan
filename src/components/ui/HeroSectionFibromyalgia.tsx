import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import FormHeader from "@/components/FormHeader";
import Image from "next/image";
import React from "react";
import Form from "../Form";
import HeaderWithoutCollapse from "../HeaderWithoutCollapse";
import HeaderMetric from "../HeaderMetric";
import HeadMetricMob from "../HeadMetricMob";

type PropTypes = {
    imageSrc: string;
    mobileImageSrc?: string;
    heading: string;
    sub_heading:string;
    sub_heading2:string;
    subHeading?: string;
    subHeading1?: string;
    achievementPoints?: {
        id: string;
        point: React.ReactNode;
    }[] | undefined;
    showFormHeader?: boolean;
    formLocation?: string;
    isTwoByTwoHeaderMetric?: boolean;
    pageRoute?: string;
    h2Tag?: string;
    heroImgClassName?: string; // New prop for Tailwind classes
};

const HeroSectionFibromyalgia = ({
    h2Tag,
    imageSrc,
    mobileImageSrc,
    heading,
    sub_heading,
    sub_heading2,
    subHeading,
    subHeading1,
    achievementPoints,
    showFormHeader,
    formLocation,
    isTwoByTwoHeaderMetric,
    pageRoute,
    heroImgClassName = "col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-14 lg:right-2/3 top-32 right-px lg:mt-7", // Default value
}: PropTypes) => {
    const defaultClassName = "col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-4 lg:right-2/3 top-20 right-px lg:mt-7"
    const newPage = pageRoute==="plantar-fasciitis" || pageRoute=== "fibromyalgia-treatment"|| pageRoute==="gout-pain" || pageRoute==="neuropathic-pain"
    return (
        <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_minmax(150px,300px)_2fr] lg:gap-5 relative">
                <div className="col-start-1 row-start-1 lg:col-start-1 lg:row-start-auto self-center pr-4 min-h-[100px] lg:min-h-0">
                    <h1
                        className={`${montserratBold.className} text-[#2F438F] text-xl lg:text-4xl w-full lg:w-[110%] `}
                    >
                        {heading}<br></br>{sub_heading}<br></br>{sub_heading2}
                    </h1>
                    <h2 className="hidden">{h2Tag}</h2>
                    <p className={`${rubikReg.className} text-sm lg:text-2xl text-[#2F438F] mt-0 lg:mt-3`}>{subHeading1}</p>
                    {
                        subHeading && (
                            <p
                                className={`text-[#DB5115] mt-2 md:mt-4 text-sm lg:text-xl ${rubikReg.className} w-full`}
                            >
                                {subHeading}
                            </p>
                        )
                    }
                    {
                        achievementPoints && (
                            <ul
                                className={`list-disc mt-2 mb-6 text-xs md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8 lg:mt-8 lg:text-xl lg:mb-0`}
                            >
                                {achievementPoints.map((point) => (
                                    <li key={point.id}>{point.point}</li>
                                ))}
                            </ul>
                        )
                    }
                </div>
                <div className={heroImgClassName ? heroImgClassName : defaultClassName}> {/* Apply the prop here */}
                    {/* Mobile Image */}
                    {
                        mobileImageSrc && 
                        <Image
                            src={mobileImageSrc}
                            alt="Mobile Image"
                            className="w-auto h-[136.55px] max-w-[148.87px] block lg:hidden pl-2" // Visible only on mobile
                            height={380}
                            width={300}
                            loading="eager"
                            priority={true}
                            quality={30}
                            style={{
                                objectFit: 'contain' // This style applies regardless of screen size
                            }}
                            unoptimized
                        />
                    }
                    {/* Desktop Image */}
                    <Image
                        src={imageSrc}
                        alt="Desktop Image"
                        className="w-auto h-auto max-w-[150px] lg:max-w-[300px] hidden lg:block" // Visible only on desktop
                        height={380}
                        width={300}
                        loading="eager"
                        priority={true}
                        quality={30}
                        style={{
                            objectFit: 'contain'
                        }}
                        unoptimized
                    />
                </div>
                <div className={`col-span-2 lg:col-span-1 lg:col-start-3 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 ${pageRoute==="avn-treatment" ? 'mt-4' : 'mt-8'} lg:mt-4`} style={{ height: '80%' }}>
                    <FormHeader/>
                    <Form
                        formLocation={formLocation}
                        formName="Hero-Section-Form"
                        pageRoute={pageRoute}
                    />
                </div>
            </div>
            {
                formLocation === "Hero-Section-Next-AvnTreatment" || newPage ? (
                    <div className="mt-10 lg:mt-0">
                        <HeaderMetric pathName={pageRoute ? pageRoute : "avn-treatment"} />
                        <HeadMetricMob pathName={pageRoute ? pageRoute : "avn-treatment"} />
                    </div>
                ) : (
                    <div className="mt-8 w-[100vw] relative right-8 md:w-[90vw] md:left-12 lg:mt-0">
                        <HeaderWithoutCollapse />
                    </div>
                )
            }
        </div>
    );
};

export default HeroSectionFibromyalgia;