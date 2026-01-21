"use client";
import React, { useState, useEffect } from "react";
import StudiesCard from "./StudiesCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { usePathname } from "next/navigation";
import { ImportantStudiesType } from "@/app/api/allTypes";

const ImportantStudiesCarousel = ({StudiesCardData}: {StudiesCardData: ImportantStudiesType[]}) => {
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

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="w-full gap-2 justify-between">
          {StudiesCardData?.map((treatment) => (
            <CarouselItem
              key={treatment.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <StudiesCard {...treatment}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`block md:${
            StudiesCardData.length > 3 ? "block" : "hidden"
          }`}
        >
          <CarouselPrevious className="font-extrabold text-[#2F438F]" />
          <CarouselNext className="font-extrabold text-[#2F438F]"/>
        </div>
      </Carousel>
      {StudiesCardData.length >= 3 && (
        <div className="mt-5">
          <div className="flex items-center justify-center gap-2 lg:hidden">
            {StudiesCardData.map((_, i) => (
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

export default ImportantStudiesCarousel;
