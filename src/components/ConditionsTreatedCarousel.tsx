"use client";
import React, { useState, useEffect } from "react";
import ConditionsTreatedCard from "@/components/ConditionsTreatedCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ConditionsTreatedCardDataType } from "@/app/api/allTypes";

const ConditionsTreatedCarousel = ({
  cardData,
}: {
  cardData: ConditionsTreatedCardDataType[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
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

  const maxBullets = 3;
  const bullets = cardData.slice(0, maxBullets).map((_, i) => (
    <div
      key={i}
      onClick={() => handleBulletClick(i)}
      className={`
        transition-all w-3 h-3 rounded-full cursor-pointer
        ${current === i ? "px-4 bg-[#645D91]" : "bg-[#D9D9D9]"}
      `}
    />
  ));

  return (
    <div className="px-2 md:px-16 relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {cardData?.map((card) => (
            <CarouselItem
              key={card.heading}
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <ConditionsTreatedCard conditionsTreatedCardDataObj={card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {cardData.length > 1 && (
          <div className="flex justify-between absolute inset-0 items-center px-4  bg">
            <CarouselPrevious className="font-extrabold text-[#2F438F] translate-x-11 lg:translate-x-0" />
            <CarouselNext className="font-extrabold text-[#2F438F]  -translate-x-11 lg:translate-x-0" />
          </div>
        )}
      </Carousel>
      {cardData.length > 1 && (
        <div className="mt-5">
          <div className="lg:flex items-center justify-center gap-2 hidden">
            {bullets}
          </div>
          <div className="flex items-center justify-center gap-2 lg:hidden">
            {bullets}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConditionsTreatedCarousel;
