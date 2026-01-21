"use client"
import Image from "next/image";
import parse from "html-react-parser";
import { useState } from "react";
import Link from "next/link";

interface UnderstandPainProps {
  imageUrl: string;
  videoUrl: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: string;
}

export default function UnderstandPain({
  imageUrl,
  videoUrl,
  title,
  description,
  buttonText,
  onButtonClick,
}: UnderstandPainProps) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={`px-4 lg:px-10 xl:px-14 2xl:px-20 mt-28 -mb-20 ${title == "We Rethink Pain. So You Can Rethink Life." ? "py-16" : "bg-[#EEF8FD]"}`}>
      <div className="w-full -top-28 flex flex-col lg:flex-row items-center rounded-[50px] bg-gradient-to-b from-[#0AA2DC] to-[#115CAB] p-3 md:p-5 gap-5 lg:gap-3 xl:gap-5 2xl:gap-10 relative overflow-hidden 2xl:p-10">
        <div className="relative w-full lg:w-1/2 rounded-[35px] overflow-hidden">
          <Image
            src={imageUrl}
            alt="Pain Understanding Visual"
            width={1000}
            height={1000}
            className={`w-full  mt-0.5 object-cover ${title == "We Rethink Pain. So You Can Rethink Life." ? "lg:h-[600px]" : "h-full"}`}
            unoptimized
          />
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer "
            onClick={() => setIsOpen(true)}
          >
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:scale-110 duration-500">
              <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-[#0E63C5] ml-1" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 text-white p-3 lg:p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-3 xl:mb-6">{title}</h2>
          <div className="description-wrapper text-white/90 leading-relaxed my-3 xl:my-6 space-y-4 text-base lg:text-base xl:text-xl font-thin">
            {parse(description)}
          </div>
          {onButtonClick &&
            <Link href={onButtonClick}>
              <button id={buttonText} className="bg-gradient-to-r uppercase gap-3 flex justify-between items-center w-full lg:w-fit from-orange-600 to-orange-600 text-white px-5 py-2 xl:px-7 2xl:py-2 rounded-full font-normal shadow-md hover:scale-105 duration-500 cursor-pointer">
                {buttonText}
                <Image
                  className="group-hover:-rotate-45 w-8 h-8 duration-700 bg-white rounded-full p-2"
                  src="/images/orangearrow.svg"
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
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-2xl p-4 max-w-3xl w-full relative">
            <button
              className="cursor-pointer absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <iframe
              src={videoUrl}
              className="w-full aspect-video rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
