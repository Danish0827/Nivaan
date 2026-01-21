'use client'
import { rubikBold, montserratBold, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";
import googleImg from "../../../public/googleImage.webp";
import smileImg from "../../../public/smile.webp";
import likeImg from "../../../public/like.webp";
import reviewIcon from "../../../public/review_icon.webp";
import { usePathname } from "next/navigation";
import Form2 from "@/components/Form2";
import Form2_new from "@/components/Form2_new";
import Form_new from "@/components/Form_new";
type CardDataType = {
    title: string;
    desc: string;
    img: any;
};
interface FormAdProps {
    isForm2?: boolean;
    formLocation?: string;
    pageRoute?: string
    cardData?: CardDataType[];
    location?: string;
}
const FormAd_new: React.FC<FormAdProps> = ({ isForm2, formLocation, pageRoute, cardData, location="" }) => {
    const pathName = usePathname();
    const isOsteoarthritisTreatment =
        pathName === "/next/osteoarthritis-treatment";
    const isSciaticaPain = pathName == "/next/sciatica-pain-new";
    const isEndoscopicDiscectomy = pathName === "/next/endoscopic-discectomy";
    const isChronicPainVertobroplasty =
        pathName === "/next/chronic-pain-vertobroplasty";
    const isNeckPain = pathName === "/next/neck-pain";
    const isNerveBlockNew = pathName == "/next/nerve-block-new";
    const isHipPain = pathName === "/next/hip-pain";
    const isKyphoplastyNew = pathName === "/next/Kyphoplasty-new";
    

    return (
        <div className="py-8 px-2">
            <div className="max-w-7xl mx-auto p-4 flex flex-col-reverse justify-center gap-2 md:gap-16 md:flex-row">
                {cardData ? (
                    <div className="hidden md:flex flex-row md:flex-col justify-between">
                        {cardData.map((card, i) => (
                            <FormAdCard key={i} title={card.title} desc={card.desc} img={card.img} />
                        ))}
                    </div>
                ) : (
                    
                    <div className="hidden md:flex flex-col gap-y-2 x-2">
                        <br/>
                        <FormAdCard title="4.8/5" desc="Positive Reviews" img={googleImg} />
                        <FormAdCard title="20K+" desc="Happy Patients" img={smileImg} />
                        <FormAdCard title="90%" desc="Surgeries Avoided" img={likeImg} />
                    </div>

                )}
                    <div className="w-full lg:w-auto z-10">
                        <Form_new
                            formLocation={
                                isHipPain
                                    ? "Hip Pain Bottom Open form"
                                    : isKyphoplastyNew
                                        ? "Kyphoplasty Bottom Open form"
                                        : formLocation
                            }
                            formName="FormAd-Form"
                            location={location}
                            // pageRoute={pageRoute}
                        />
                    </div>
            </div>
        </div>
    );
};
export default FormAd_new;
const FormAdCard = ({ title, desc, img }: CardDataType) => {
    return (
        <div className="border-[1px] border-[#2F438F] w-[25%] md:w-[260px] rounded-lg text-[#2F438F] px-4 md:px-8 p-4 relative">
            <p className={`${montserratBold.className} text-sm md:text-2xl`}>
                {title}
            </p>
            <p className={`${rubikReg.className} text-xs md:text-xl`}>{desc}</p>
            <div className="border-[1px] border-[#2F438F] rounded-full absolute bg-white top-5 -left-5 p-1 md:p-[6px]">
                <Image src={img} alt="logo" height={30} unoptimized/>
            </div>
        </div>
    );
};