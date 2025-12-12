"use client"
import Image from "next/image";
import parse from "html-react-parser";
import { useState } from "react";

interface UnderstandPainProps {
  imageUrl: string;
  videoUrl: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
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
console.log(videoUrl);

  return (
    <section className="px-4 lg:px-24 mt-28 -mb-20 bg-[#EEF8FD]">
      <div className="w-full -top-28 flex flex-col md:flex-row items-center rounded-[50px] bg-gradient-to-b from-[#0AA2DC] to-[#115CAB] p-3 md:p-10 gap-6 md:gap-10 relative overflow-hidden">
        <div className="relative w-full md:w-1/2 rounded-[35px] overflow-hidden">
          <Image
            src={imageUrl}
            alt="Pain Understanding Visual"
            width={600}
            height={400}
            className="w-full h-full mt-0.5 object-cover"
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
        <div className="md:w-1/2 text-white p-3 lg:p-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-semibold mb-6">{title}</h2>
          <div className="description-wrapper text-white/90 leading-relaxed my-6 space-y-4 text-base lg:text-xl font-light">
            {parse(description)}
          </div>
         <button className="bg-gradient-to-r w-full lg:w-fit from-orange-600 to-orange-600 text-white px-4 py-3 2xl:px-7 2xl:py-4 rounded-full font-semibold shadow-md hover:scale-105 duration-500 cursor-pointer">
            {buttonText}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-2xl p-4 max-w-3xl w-full relative">

            <button
              className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full shadow flex items-center justify-center text-xl"
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
