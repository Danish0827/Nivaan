"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import ProcedureCard from "./ProcedureCard";
import { TreatmentData } from "@/app/api/allTypes";

const ProcedureCarousel = ({
  TreatmentCardData
}: {
  TreatmentCardData: TreatmentData[]
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
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

  return (
    <div className="px-2 md:w-[969px] md:mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {TreatmentCardData?.map((treatment) => (
            <CarouselItem
              key={treatment.id}
              className="w-full md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <ProcedureCard treatment={treatment} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`block md:${
            TreatmentCardData.length > 3 ? "block" : "hidden"
          }`}
        >
          <CarouselPrevious className="font-extrabold text-[#2F438F] md:ml-[-3rem]" />
          <CarouselNext className="font-extrabold text-[#2F438F] md:mr-[-3rem]"/>
        </div>
      </Carousel>
      {TreatmentCardData.length > 3 && (
        <div className="mt-5">
          <div className="lg:flex items-center justify-center gap-2 hidden ">
            {TreatmentCardData.slice(0, 3).map((_, i) => (
              <div
                key={i}
                className={`
                  transition-all w-3 h-3 rounded-full
                  ${current === i ? "px-4 bg-[#645D91]" : "bg-[#D9D9D9]"}
                `}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 lg:hidden">
            {TreatmentCardData.map((_, i) => (
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
      )}
    </div>
  );
};

export default ProcedureCarousel;
