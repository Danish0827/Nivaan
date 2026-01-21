"use client";
import React, { useState, useEffect } from "react";
import DoctorCardNcr from "./DoctorCardNcr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { usePathname } from "next/navigation";
import { TreatmentData, Doctor } from "@/app/api/allTypes";
const DoctorCarousel = ({
  doctorData,
}: {
  doctorData: Doctor[];
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const pathName = usePathname();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
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
  const mapTreatmentData =
    pathName === "/v1/back-pain-elderly-women-new"
      ? doctorData.slice(0, 4)
      : doctorData.slice(0, 3);
  const isCentered = doctorData.length > 3;
  return (
    <div className="px-2 md:px-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: isCentered ? "center" : "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {doctorData?.map((treatment) => (
            <CarouselItem
              key={treatment.id}
              className={`flex justify-center ${isCentered ? "md:basis-1/2 lg:basis-1/3" : "md:basis-1/2 lg:basis-1/3"}`}
            >
              <DoctorCardNcr doctorData={[treatment]} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`block md:${doctorData.length > 3 ? "block" : "hidden"
            }`}
        >
          <CarouselPrevious className="font-extrabold text-[#2F438F] md:-left-28" />
          <CarouselNext className="font-extrabold text-[#2F438F] md:-right-28" />
        </div>
      </Carousel>
      <div className="mt-5">
        {/* Desktop view */}
        {isCentered && (
          <div className="lg:flex items-center justify-center gap-2 hidden">
            {Array(count)
              .fill(0)
              .map((_, i) => (
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
          {doctorData.map((_, i) => (
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
    </div>
  );
};
export default DoctorCarousel;