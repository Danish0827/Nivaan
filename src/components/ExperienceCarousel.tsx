"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import first from "../../public/physio/f1.jpeg";
import second from "../../public/physio/f2.jpg";
import third from "../../public/physio/f3.jpg";
import forth from "../../public/physio/f4.jpg";

const slides = [
  { img: first, text: "Personalized guidance with expert trainers" },
  { img: second, text: "State-of-the-art reception & care" },
  { img: third, text: "Modern fitness & rehabilitation facilities" },
  { img: forth, text: "Modern fitness & rehabilitation facilities" },
];

const ExperienceCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Experience Center</h2>

      <div className="px-4 md:px-8 relative">
        {/* Carousel wrapper */}
        <Carousel setApi={setApi} opts={{ align: "start" }} className="overflow-hidden">
          {/* Content - make it a flex container with gap */}
          <CarouselContent className="flex gap-6">
            {slides.map((slide, index) => (
              // important: each CarouselItem must have a fixed width so Embla/Carousel can snap
              <CarouselItem
                key={index}
                // className="w-[92%] sm:w-1/2 md:w-1/3 lg:w-1/3 flex-shrink-0"
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="rounded-[12px] md:rounded-[16px] overflow-hidden bg-white shadow-sm">
                  <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px]">
                    {/* use fill so image covers container */}
                    <Image src={slide.img} alt={slide.text} fill className="object-cover" unoptimized/>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        

        {/* Prev/Next buttons (positioned absolutely) */}
        
        </Carousel>
        {/* Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {Array.from({ length: count-1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? "bg-slate-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
