'use client'
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import MigraineCarouselCard from './MigraineCarouselCard';
import ShoulderPainCarouselCard from './ShoulderPainCarouselCard'
import { usePathname } from 'next/navigation';
import WhatIsCarouselCard from './WhatIsCarouselCard2';
import { WhatIsCarouselCardType } from '@/app/api/allTypes';

const WhatIsCarousel = ({
  cardData,
}: {
  cardData: WhatIsCarouselCardType[];
}) => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const path = usePathname()
  const isMigraine = path === "/next/migraine"
  const isShoulderPain = path === "/next/shoulder-pain"

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

 const jdsjkddskj = (index: number) => {
  setExpandedCards(prevExpandedCards => {
    if (prevExpandedCards.includes(index)) {
      return prevExpandedCards.filter(cardIndex => cardIndex !== index);
    } else {
      return [...prevExpandedCards, index];
    }
  });
};

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="px-14 md:pl-32 md:pr-28 mt-6 md:w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {cardData?.map((cardObj, index) => (
            <CarouselItem key={cardObj.id} className="md:basis-1/2 lg:basis-1/3">
              { isMigraine ? (
                <MigraineCarouselCard data={cardObj} expanded={expanded} toggleExpanded={toggleExpanded} />
              ) : isShoulderPain ? (
                <ShoulderPainCarouselCard data={cardObj} expanded={expanded} toggleExpanded={toggleExpanded} />
              ) : (
                <WhatIsCarouselCard
                  key={index}
                  data={cardObj}
                  index={index}
                  expanded={expandedCards.includes(index)}
                  toggleExpanded={jdsjkddskj}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`block md:${cardData?.length > 3 ? "block" : "hidden"}`}
        >
          <CarouselPrevious className="font-extrabold text-[#2F438F]" />
          <CarouselNext className="font-extrabold text-[#2F438F]" />
        </div>
      </Carousel>
      {cardData?.length > 3 && (
        <div className="mt-5">
          <div className="lg:flex items-center justify-center gap-2 hidden ">
            {cardData?.map((_, i) => (
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
      <div className="mt-5">
          <div className="flex items-center justify-center gap-2 lg:hidden ">
            {cardData?.map((_, i) => (
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

export default WhatIsCarousel;
