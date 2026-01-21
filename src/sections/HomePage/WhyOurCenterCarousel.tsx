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
import { usePathname } from "next/navigation";
import { whyOurCenterDataType } from "@/app/api/homePageData";
import WhyOurCenterCard from "./WhyOurCenterCard";

const WhyOurCenterCarousel = ({ data }: { data: whyOurCenterDataType[] }) => {
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
            <CarouselItem key={doc.id} className="md:basis-1/2 lg:basis-1/4">
              <WhyOurCenterCard centerData={doc} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="md:hidden">
          <CarouselPrevious className="font-extrabold text-[#2F438F]" />
          <CarouselNext className="font-extrabold text-[#2F438F]"/>
        </div>
      </Carousel>

      <div className="mt-5">
        {data.length > 4 && (
          <div className="lg:flex items-center justify-center gap-2 hidden ">
            {data.slice(0, 3).map((_, i) => (
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

        <div className="flex items-center justify-center gap-2 lg:hidden">
          {data.map((_, i) => (
            <div
              key={i}
              onClick={() => handleBulletClick(i)}
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

export default WhyOurCenterCarousel;

