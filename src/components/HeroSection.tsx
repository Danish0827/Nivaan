import parse from "html-react-parser";
import he from "he";
import Image from "next/image";
import { HeroSectionProps } from "@/interfaces/hero";
import Link from "next/link";

export function HeroSection({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  image,
  mobile,
}: HeroSectionProps) {
  const decodedTitle = he.decode(title);
  const decodedDescription = he.decode(description);
  const parsedTitle = parse(decodedTitle, {
    replace: (domNode: any) => {
      if (domNode.name === "spam") {
        return (
          <span className="text-[#06A1DC] font-bold">
            {domNode.children[0]?.data}
          </span>
        );
      }
      if (domNode.name === "space") {
        return " ";
      }
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
      if (domNode.name === "space") {
        return " ";
      }
    },
  });

  return (
    <section className="home-main-section bg-gradient-to-t from-[#edf8fc] to-[#edf8fc] relative overflow-hidden w-full ">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-center overflow-hidden pb-8">
        <img
          src="/images/watermark.webp"
          className="absolute top-60 left-0 w-[800px] pointer-events-none z-30"
        />
        <div className="relative mt-2 lg:mt-0 pt-6 pb-10 bg-gradient-to-b lg:bg-none from-white to-transparent  px-4 lg:pl-8 lg:pr-3 2xl:pl-16 2xl:pr-5 lg:pt-40 lg:pb-10 xl:pt-28 xl:pb-20 2xl:pt-0 2xl:pb-10 order-2 lg:order-1">
          <h1 className="text-[32px] lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-blue-900 leading-tight">
            {parsedTitle}
          </h1>
          <p className="text-black lg:mt-3 2xl:mt-6 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed font-light">
            {parsedDescription}
          </p>
          <div className="flex items-center gap-4 mt-6 2xl:mt-12 flex-wrap">
            {primaryBtn?.url &&
              <Link href={primaryBtn.url} className="w-full lg:w-fit">
                <button id={primaryBtn.title} className="block w-full lg:w-fit relative z-30 hover:scale-105 duration-500 cursor-pointer bg-gradient-to-r from-[#EC6724] to-[#F05432] uppercase hover:from-[#EC6724]/80 hover:to-[#F05432]/80 text-white font-normal px-6 py-3 rounded-full shadow">
                  {primaryBtn.title}
                </button>
              </Link>
            }
            {secondaryBtn?.url &&
              <Link href={secondaryBtn.url} className="w-full lg:w-fit">
                <button id={secondaryBtn.title} className="border-2 w-full uppercase lg:w-fit border-orange-500 text-orange-600 bg-white px-4 py-1.5 2xl:px-6 2xl:py-2 rounded-full font-normal flex justify-between items-center gap-3 hover:scale-105 duration-500 cursor-pointer">
                  {secondaryBtn.title}
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
        <div className="relative z-20 order-1 lg:order-2">
          <video
            src={mobile}
            className="w-full h-full block lg:hidden"
            autoPlay
            muted
            loop
            playsInline
          />
          <video
            src={image}
            className="w-full h-full hidden lg:block"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
