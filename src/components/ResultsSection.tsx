"use client";
import parse from "html-react-parser";
import Image from "next/image";

interface ResultItem {
  icon: { url: string };
  title: string;
  info: string;
}

interface ResultsSectionProps {
  image: string;
  title: string;
  subtitle: string;
  info: string;
  lists: ResultItem[];
}

export default function ResultsSection({
  image,
  title,
  subtitle,
  info,
  lists,
}: ResultsSectionProps) {
  return (
    <section className="w-full pb-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] xl:grid-cols-[40%_60%] xl:gap-12 items-center w-full">
        <div className="relative w-full lg:ml-20 xl:ml-40 2xl:ml-52 z-20 p-10 lg:p-0 top-32 lg:top-0">
          <div className="overflow-hidden flex justify-end lg:rounded-[40px] rounded-[60px]">            
            <video
            src={image}
            className="h-[300px] lg:w-[500px] lg:h-[400px] xl:w-full xl:h-[450px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          </div>
        </div>
        <div className="relative text-white lg:rounded-l-[60px] bg-gradient-to-r from-[#0AA2DC] to-[#115CAB] p-5 md:p-14 m-3 rounded-[50px]">
          <div className="lg:pl-20 xl:pl-28 2xl:pl-40 pt-28 lg:pt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="description-wrapper text-white/90 leading-relaxed my-3 xl:my-6 space-y-4 text-base lg:text-base xl:text-xl font-thin">
              {parse(info)}
            </p>
            {subtitle &&
            <button className="bg-white text-[#0E63C5] font-semibold rounded-full px-6 py-2 mb-10 transition hover:bg-gray-100">
              {subtitle}
            </button>
            }
            {lists &&
            <div className="space-y-8 pb-10">
              {lists.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="min-w-[70px] min-h-[70px] rounded-full bg-white flex items-center justify-center p-4">
                    <Image
                      src={item.icon?.url || ""}
                      alt=""
                      width={50}
                      height={50}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/90 max-w-md leading-relaxed">
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
