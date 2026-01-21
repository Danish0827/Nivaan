"use client"
import parse from "html-react-parser";
import he from "he";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import RequestCallbackModal from "./RequestCallbackModal";
import Link from "next/link";

export function LocationHeroSection({
    breadcrumbTitle,
    breadcrumbSub,
    title,
    description,
    button,
    button1,
    image,
}: any) {
    const decodedTitle = he.decode(title || "");
    const decodedDescription = he.decode(description || "");
    const parsedTitle = parse(decodedTitle, {
        replace: (domNode: any) => {
            if (domNode.name === "spam") {
                return (
                    <span className="text-[#06A1DC] font-bold">
                        {domNode.children[0]?.data}
                    </span>
                );
            }
            if (domNode.name === "space") return " ";
        },
    });

    const parsedDescription = parse(decodedDescription, {
        replace: (domNode: any) => {
            if (domNode.name === "spam") {
                return (
                    <span className="text-blue-600 font-semibold">
                        {domNode.children[0]?.data}
                    </span>
                );
            }
            if (domNode.name === "space") return " ";
        },
    });

    return (
        <section style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 10px 60px 0px' }} className="relative home-main-section location-main-section w-full bg-gradient-to-b from-[#edf8fc] to-[#edf8fc]">
            <img
                src="/images/watermark.webp"
                className="absolute top-20 left-0 w-[700px] pointer-events-none z-20"
            />
            <div className=" py-20 px-4 lg:px-10 xl:px-16 2xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 pt-12 lg:pt-10">
                    <div className="text-left flex flex-col justify-center order-2 lg:order-1">
                        <Breadcrumb
                            items={[
                                { label: "Home", href: "/" },
                                { label: breadcrumbTitle.name, href: `/${breadcrumbTitle.slug}` },
                                { label: breadcrumbSub },
                            ]}
                        />
                        <h1 className="text-[28px] sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-blue-900 leading-tight">
                            {parsedTitle}
                        </h1>
                        <div className="my-4 lg:my-6 text-base sm:text-lg lg:text-xl  text-gray-800 leading-relaxed font-normal">
                            {parsedDescription}
                        </div>
                    </div>
                    <div className="relative flex justify-center order-1 lg:order-2 lg:py-10">
                        {image &&
                            <Image
                                src={image?.url}
                                className=" 2xl:w-4/5 object-contain drop-shadow-xl rounded-[40px]"
                                alt={image?.alt}
                                width={1000}
                                height={1000}
                                unoptimized
                            />
                        }
                    </div>
                </div>
                <div className="block lg:flex justify-center gap-5">
                    {button &&
                        <div className="flex justify-center w-full lg:w-fit mb-4 lg:mb-0">
                            <RequestCallbackModal buttonText={button} id={button} />
                        </div>
                    }
                    {button1?.title &&
                        <Link href={button1.url} className="w-full lg:w-fit">
                            <button id={button1.title} className="border-2 text-sm lg:text-base w-full uppercase lg:w-fit border-orange-500 text-orange-600 bg-white px-4 py-1.5 2xl:px-6 2xl:py-2 rounded-full font-normal flex justify-between items-center gap-3 hover:scale-105 duration-500 cursor-pointer">
                                {button1.title}
                                <Image
                                    className="group-hover:-rotate-45 w-8 h-8 duration-700 bg-orange-600 rounded-full p-2"
                                    src="/images/whitearrow.svg"
                                    width={20}
                                    height={20}
                                    alt="arrow"
                                    unoptimized
                                />
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </section>
    );
}
