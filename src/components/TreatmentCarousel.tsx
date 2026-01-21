"use client";
import React, { useState, useEffect } from "react";
import TreatmentCard from "@/components/TreatmentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { usePathname } from "next/navigation";
import { TreatmentData } from "@/app/api/allTypes";

const TreatmentCarousel = ({
  TreatmentCardData,
}: {
  TreatmentCardData: TreatmentData[];
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
      ? TreatmentCardData?.slice(0, 4)
      : TreatmentCardData?.slice(0, 3);

  const isCentered = TreatmentCardData?.length < 3;

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
          {TreatmentCardData?.map((treatment) => (
            <CarouselItem
              key={treatment.id}
              className={`${isCentered ? "md:basis-1/2 lg:basis-1/3 mx-auto" : "md:basis-1/2 lg:basis-1/3"}`}
            >
              <TreatmentCard treatment={treatment} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`block md:${
            TreatmentCardData?.length > 3 ? "block" : "hidden"
          }`}
        >
          <CarouselPrevious className="font-extrabold text-[#2F438F] md:-left-28" />
          <CarouselNext className="font-extrabold text-[#2F438F] md:-right-28"/>
        </div>
      </Carousel>
      <div className="mt-5">
        {/* Desktop view */}
        {TreatmentCardData?.length > 3 && (
          <div className="lg:flex items-center justify-center gap-2 hidden">
            {mapTreatmentData?.map((_, i) => (
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
          {TreatmentCardData?.map((_, i) => (
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

export default TreatmentCarousel;