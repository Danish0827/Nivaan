import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import FormHeader from "@/components/FormHeader";
import Image from "next/image";
import React from "react";
import Form2 from "../Form2";
import HeaderWithoutCollapse from "../HeaderWithoutCollapse";

type PropTypes = {
    imageSrc: string;
    form: React.ReactNode;
    heading: string;
    subHeading?: string;
    achievementPoints?: {
        id: string;
        point: React.ReactNode;
    }[] | undefined;
    showFormHeader?: boolean;
    formLocation?: string;
    isTwoByTwoHeaderMetric?: boolean
}

const ThreeColumnHeroBannerForm2 = ({ imageSrc, form, heading, subHeading, achievementPoints, showFormHeader, formLocation, isTwoByTwoHeaderMetric }: PropTypes) => {
    return (
        <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_minmax(150px,300px)_2fr] lg:gap-5 relative">
                <div className="col-start-1 row-start-1 lg:col-start-1 lg:row-start-auto self-center pr-4 min-h-[100px] lg:min-h-0">
                    <h1
                        className={`${montserratBold.className} text-[#2F438F] text-sm lg:text-4xl w-2/3 lg:w-[120%] `}
                    >
                        {heading}
                    </h1>
                    {/* <p className="text-[#DB5115] text-xs md:text-lg">
                        100% Insurance Coverage<span>*</span>
                    </p> */}
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
                                className={`list-disc mt-2 mb-6 text-xs md:text-2xl text-[#1E1E1E] flex flex-col gap-1 ${rubikLight.className} px-4 md:px-8 lg:mt-8 lg:mb-0`}
                            >
                                {achievementPoints.map((point) => (
                                    <li key={point.id}>{point.point}</li>
                                ))}
                            </ul>
                        )
                    }
                </div>
                <div className="col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute top-4 lg:bottom-0 lg:right-2/3 right-0 lg:mt-0">
                    <Image
                        src={imageSrc}
                        alt="img"
                        className="w-auto h-auto max-w-[150px] lg:max-w-[300px]"
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
                <div className="col-span-2 lg:col-span-1 lg:col-start-3 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 mt-4 lg:mt-0">
                    <FormHeader/>
                    <Form2
                        formLocation={formLocation}
                        formName="Hero-Section-Form"
                    />
                </div>
            </div>
            <div className="mt-8 w-[100vw] relative right-8 md:w-[90vw] md:left-12 lg:mt-0">
                <HeaderWithoutCollapse />
            </div>
        </div>
    );
};

export default ThreeColumnHeroBannerForm2;