import React, { useState, useEffect } from "react";
import PatientReviewCard from "./PatientReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { YouTubeEmbed } from "@next/third-parties/google";
import PatientReviewCard2 from "./PatientReviewCard2";
import { Review } from "@/app/api/allTypes";

const PatientReviewCardCarousel = ({ reviews }: { reviews: Review[] }) => {
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
    <div className="px-6 md:px-16 md:max-w-[1300px] md:mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {reviews?.map((review) => (
            <CarouselItem key={review.id} className="w-full">
              {review.isVideo && review.videoUrl ? (
                <div className="video-wrapper md:w-[649px] md:mx-auto h-48 md:h-56">
                  <YouTubeEmbed
                    videoid={review.videoUrl}
                    height={500}
                    params="controls=0"
                  />
                </div>
              ) : (
                <PatientReviewCard2 review={review} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="font-extrabold text-[#2F438F]" />
          <CarouselNext className="font-extrabold text-[#2F438F]"/>
        </div>
      </Carousel>

      <div className="mt-5 md:mt-20">
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

export default PatientReviewCardCarousel;
