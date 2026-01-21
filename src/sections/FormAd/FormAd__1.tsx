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
}
const FormAd__1: React.FC<FormAdProps> = ({ isForm2, formLocation, pageRoute, cardData }) => {
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
    const isACLTreatment = pathName === "/next/"
    const renderForm = () => {
        if (isOsteoarthritisTreatment || isForm2) {
            return (
                <Form2
                    formLocation={
                        isOsteoarthritisTreatment
                            ? "Osteoarthritis Page FormAd Form"
                            : isForm2
                                ? formLocation
                                : "FormAd Form"
                    }
                    formName="FormAd-Form"
                />
            );
        }
        return (
            <Form
                formLocation={
                    isHipPain
                        ? "Hip Pain FormAd Form"
                        : isKyphoplastyNew
                            ? "Kyphoplasty FormAd Form"
                            : formLocation
                }
                formName="FormAd-Form"
            />
        );
    };

    const renderFormAdCard = () => {
        return (
            <div className="hidden md:flex flex-row md:flex-col justify-between">
                <FormAdCard title="4.8/5" desc="Positive Reviews" img={googleImg} />
                <FormAdCard title="20K+" desc="Happy Patients" img={smileImg} />
                <FormAdCard title="90%" desc="Surgeries Avoided" img={likeImg} />
            </div>
        );
    };

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
                {isForm2 ||
                    isOsteoarthritisTreatment ||
                    isSciaticaPain ||
                    isNerveBlockNew ? (
                    <div className="w-full lg:w-auto z-10">
                        <Form2_new
                            formLocation={
                                isForm2
                                    ? formLocation
                                    : isSciaticaPain
                                        ? "Navbar-sciatica-Page"
                                        : isNerveBlockNew
                                            ? "Navbar-nerveBlock-Page"
                                            : isOsteoarthritisTreatment
                                                ? "Navbar-osteoarthritis-Page"
                                                : isEndoscopicDiscectomy
                                                    ? "Navbar-endoscopic-discectomy"
                                                    : isChronicPainVertobroplasty
                                                        ? "Navbar-chronicPainVertobroplasty"
                                                        : isNeckPain
                                                            ? "Navbar-neckPain"
                                                            : ""
                            }
                            formName="FormAd-Form"
                            location="mumbai"
                        />
                    </div>
                ) : (
                    <div className="w-full lg:w-auto z-10">
                        <Form
                            formLocation={
                                isHipPain
                                    ? "Hip Pain Bottom Open form"
                                    : isKyphoplastyNew
                                        ? "Kyphoplasty Bottom Open form"
                                        : formLocation
                            }
                            formName="FormAd-Form"
                            pageRoute={pageRoute}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
export default FormAd__1;
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

const FormAdCard2 = ({ title, desc, img }: CardDataType) => {
    return (
        <div className="flex gap-2 border-[1px] border-[#E0E0DD] bg-[#FBFAFA] drop-shadow-lg w-[30%] rounded-lg text-[#2F438F] px-2 p-4 relative md:gap-3 md:px-3 md:w-[250px] ">
            <Image className="size-5 md:size-11" src={img} alt="logo" unoptimized/>
            <div>
                <p className={`${montserratBold.className} text-xs md:text-2xl`}>
                    {title}
                </p>
                <p className={`${rubikReg.className} text-[10px] md:text-lg`}>{desc}</p>
            </div>
        </div>
    );
};

const FormAdCard2Mob = ({ title, desc, img }: CardDataType) => {
    return (
        <div className="flex flex-col gap-2 border-[1px] border-[#E0E0DD] bg-[#FBFAFA] drop-shadow-lg w-full rounded-lg text-[#2F438F] p-2 relative md:gap-3 md:px-3 md:w-[250px] ">
            <div className="flex flex-row items-center gap-2">
                <Image className="size-5 md:size-11" src={img} alt="logo" unoptimized/>
                <p className={`${montserratBold.className} text-xs md:text-2xl`}>
                    {title}
                </p>
            </div>
            <div>
                <p className={`${rubikReg.className} text-[10px] md:text-lg`}>{desc}</p>
            </div>
        </div>
    );
};
