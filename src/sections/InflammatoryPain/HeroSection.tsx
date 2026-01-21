import { montserratBold, rubikLight } from '@/app/fonts';
import Form2 from '@/components/Form2';
import Form2_new from '@/components/Form2_new';
import FormHeader from '@/components/FormHeader';
import HeaderWithoutCollapse from '@/components/HeaderWithoutCollapse';
import Image from 'next/image';
import React from 'react';
import check_icon from "../../../public/Isolation_Mode.svg"
import { Rubik } from 'next/font/google';

export const rubik = Rubik({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
    variable: '--font-rubik',
});
const HeroSection = () => {
    return (
        <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0 ">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative md:px-0">
                <div className="flex-1 relative top-0 md:top-6 w-[100%] md:w-[20%]">
                    <h1
                        className={`${montserratBold.className} font-bold text-[#2F438F] lg:text-4xl text-2xl fb-3 lg:w-[80%] w-[50%]`}
                    >
                        Treat Your
                        <br />
                        Inflammatory
                        <br />
                        Pain At Its Roots
                    </h1>

                    <h2 className="hidden">
                        Best Treatment Options for Sciatica in Delhi NCR
                    </h2>
                    <div className="mt-5 flex flex-col gap-4 pl-0 md:pl-0 items-start self-start">
                        <div
                            className={`flex items-start gap-3 text-[#1E1E1E] text-sm md:text-2xl leading-snug ${rubik.className}`}
                        >
                            <Image
                                src={check_icon}
                                alt="check icon"
                                width={30}
                                height={50}
                                className="mt-1 flex-shrink-0"
                                unoptimized
                            />
                            <p className="font-light text-[#1E1E1E]">
                                Get checked by Delhi NCR<br />
                                top pain specialists
                            </p>
                        </div>

                        <div
                            className={`flex items-start gap-3 text-[#1E1E1E] text-sm md:text-2xl leading-snug ${rubik.className}`}
                        >
                            <Image
                                src={check_icon}
                                alt="check icon"
                                width={30}
                                height={20}
                                className="mt-1 flex-shrink-0"
                                unoptimized
                            />

                            <span><p className='text-[#1E1E1E] text-sm md:text-2xl font-light leading-snug'>Experience pain relief that<br />lasts, without complex surgery</p></span>
                        </div>

                    </div>
                    <Image
                        src={require('../../../public/mobile/mob_Inflammatory.png')}
                        alt="img"
                        className="absolute bottom-24 -right-8 translate-y-10 lg:hidden translate-x-5"
                        height={150}
                        width={130}
                        loading="eager"
                        priority={true}
                        quality={30}
                        unoptimized
                    />
                </div>
                <div className="flex-1 flex justify-center flex-col items-center -mt-3 lg:items-end gap-1 md:gap-3 z-10 lg:pb-14">
                    <FormHeader />
                    <Form2_new
                        formLocation={'Hero-Section-Next-Sciatica'}
                        formName="Hero-Section-Form"
                    />
                </div>
                <Image
                    src={require('../../../public/desktop/painkillers_pc.png')}
                    alt="img"
                    className="absolute bottom-16 left-[63%] transform -translate-x-1/2 hidden lg:block"
                    height={400}
                    loading="eager"
                    priority={true}
                    quality={30}
                    unoptimized
                />
            </div>
            <div className="mt-[10px] lg:mt-[-70px] w-[100vw] relative z-10 right-5 md:w-[95vw] md:left-12">
                <HeaderWithoutCollapse />
            </div>


        </div>
    );
};

export default HeroSection;
