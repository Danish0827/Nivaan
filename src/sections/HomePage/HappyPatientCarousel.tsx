import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { YouTubeEmbed } from "@next/third-parties/google";
import { HappyPatientCardDataType } from "@/app/api/homePageData";
import HappyPatientCard from "@/components/HappyPatientCard";

const HappyPatientCarousel = ({ reviews }: { reviews: HappyPatientCardDataType[] }) => {
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
    <div className="px-12 md:px-16 w-full md:w-auto md:max-w-[1300px] md:mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {reviews?.map((review) => (
            <CarouselItem key={review.id} className="w-full">
                <HappyPatientCard data={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="">
          <CarouselPrevious className="font-extrabold text-[#2F438F]" />
          <CarouselNext className="font-extrabold text-[#2F438F]"/>
        </div>
      </Carousel>

      <div className="mt-5 md:mt-10">
        <div className="flex items-center justify-center gap-2">
          {reviews.map((_, i) => (
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

export default HappyPatientCarousel;
