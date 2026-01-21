'use client'
import React, { useState, useEffect } from "react";
import CoreTeamCard from "./CoreTeamCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Doctor } from "@/app/api/homePageData";

const OurCoreteamCarousel = ({ data }: { data: Doctor[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleBulletClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="px-12 md:px-16 mb-6">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {data?.map((doc) => (
            <CarouselItem key={doc.id} className="pl-6 md:basis-1/2 lg:basis-1/4">
              <CoreTeamCard data={doc} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Show arrows on both mobile and desktop */}
        <CarouselPrevious className="font-extrabold text-[#2F438F]" />
        <CarouselNext className="font-extrabold text-[#2F438F]" />
      </Carousel>

      {/* Bullets (pagination indicators) for all screen sizes */}
      {count > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              onClick={() => handleBulletClick(i)}
              className={`
                cursor-pointer transition-all w-3 h-3 rounded-full
                ${current === i ? "px-4 bg-[#645D91]" : "bg-[#D9D9D9]"}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OurCoreteamCarousel;
