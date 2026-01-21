import React, { useState, useEffect } from "react";
import TreatmentCarousel from "@/components/TreatmentCarousel";
import { montserratBold } from "@/app/fonts";
import { Treatment, TreatmentData } from "@/app/api/allTypes";
import { Shield, RefreshCw, Droplet, Home,Smile } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import treatment2 from "../../../public/desktop/treatment-2.webp";
import backPain2 from "../../../public/backpain2.webp";
import backPain3 from "../../../public/backpain3.webp";
import backPain4 from "../../../public/backpain4.webp";
import backPain5 from "../../../public/backpain5.webp";
import backPain6 from "../../../public/backpain6.webp";

const data = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Natural Feel",
    description: "Your new knee feels close to natural movement after surgery",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
    title: "Quicker Recovery",
    description:
      "Return to daily life in 2–3 weeks (vs 12 weeks in traditional surgery)",
  },
  {
    icon: <Droplet className="w-8 h-8 text-blue-600" />,
    title: "Minimal Blood Loss",
    description: "Less Tissue Damage, Smoother surgical experience",
  },
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: "Short hospital Stay",
    description: "Get back home sooner with reduced hospital time",
  },
  {
    icon: <Smile className="w-10 h-10 text-blue-500" />,
    title: "Less Pain",
    description: "Significantly lower post-op pain than full replacement",
  },
];

const BenefitsCarousel = ({
}: {
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isCentered = data?.length < 3;
    useEffect(() => {
      if (!api) {
        return;
      }
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);
  return (
    <section className="bg-[#ffffff] px-11 py-[25px] md:px-[70px] md:py-[42px] text-black">
      <h2
        className={`mx-auto w-[80%] md:w-full font-extrabold text-[18px] leading-[20.34px] md:text-[42px] md:leading-[51.2px] text-[#2F438F] text-center ${montserratBold.className}`}
      >
        What are the benefits of Knee Resurfacingat <br/> at Nivaan
      </h2>
      <p className="mx-auto w-[90%] text-[12px] leading-[14.22px] md:text-[20.55px] md:leading-[32px] mt-6 md:mt-0 mb-8 text-center">
        {/* para */}
      </p>
        {/* carasoul start */}
        <div className="px-2 md:px-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: isCentered ? "center" : "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {data?.map((benefit,key) => (
                <CarouselItem
                  key={key}
                  className={`${isCentered ? "md:basis-1/2 lg:basis-1/3 mx-auto" : "md:basis-1/2 lg:basis-1/3"}`}
                >
                  <div className="bg-blue-50 rounded-xl shadow-md p-6 h-full flex flex-col items-start text-left hover:shadow-lg transition">
                      <div className="mb-4">{benefit.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div
              className={`block md:${
                data?.length > 3 ? "block" : "hidden"
              }`}
            >
              <CarouselPrevious className="font-extrabold text-[#2F438F] md:-left-28" />
              <CarouselNext className="font-extrabold text-[#2F438F] md:-right-28"/>
            </div>
          </Carousel>
          <div className="mt-5">
            {/* Desktop view */}
            {data?.length > 3 && (
              <div className="lg:flex items-center justify-center gap-2 hidden">
                {data?.map((_, i) => (
                  <div
                    key={i}
                    className={`
                      transition-all w-3 h-3 rounded-full
                      ${current === i ? "px-4 bg-[#645D91]" : "bg-[#D9D9D9]"}
                    `}
                  />
                ))}
              </div>
            )}
            
            {/* Mobile view */}
            <div className="flex items-center justify-center gap-2 lg:hidden">
              {data?.map((_, i) => (
                <div
                  key={i}
                  className={`
                    transition-all w-3 h-3 rounded-full
                    ${current === i ? "px-4 bg-[#645D91]" : "bg-[#D9D9D9]"}
                  `}
                />
              ))}
            </div>
          </div>

        {/* end */}
        {/* <TreatmentCarousel TreatmentCardData={data} /> */}
      </div>
    </section>
  );
};

export default BenefitsCarousel;