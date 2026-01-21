import React, { useState, useEffect } from "react";
import PatientReviewCard from "./PatientReviewCard";
import PatientReviewCard3 from "./PatientReviewCard3";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { YouTubeEmbed } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { Review } from "@/app/api/allTypes";

const PatientReviewCarouselWithOneVideo = ({ reviews }: { reviews: Review[] }) => {

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const pathName = usePathname()
  const isSciaticaPain = pathName === "/next/sciatica-pain-new";
  const isKyphoplasty = pathName === "/next/Kyphoplasty-new";


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
    <div className="px-12 md:px-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        
        <CarouselContent className='w-full relative left-2 md:left-[335px]'>
          {reviews?.map((review) => (
            <CarouselItem key={review.id}>
              {review.isVideo && review.videoUrl ? (
                <div className={`video-wrapper md:h-[50%] md:w-[50%]`}>
                  <YouTubeEmbed
                    videoid={review.videoUrl}
                    params="controls=0"
                    style={`border-radius:10px;`}
                  />
                </div>
              ) : pathName === '/next/chronic-pain-arthroplasty' || isSciaticaPain || isKyphoplasty ? (
                <PatientReviewCard3 review={review} />
              ) : (
                <PatientReviewCard review={review} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className={`${reviews.length > 3 ? "block" : "hidden"}`}>
          <CarouselPrevious className="font-extrabold text-[#2F438F]" />
          <CarouselNext className="font-extrabold text-[#2F438F]" />
        </div>
      </Carousel>

      <div className="mt-5">
        {reviews.length > 3 && (
          <div className="lg:flex items-center justify-center gap-2 hidden ">
            {reviews.slice(0, 3).map((_, i) => (
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

        {reviews.length > 3 && (
            <div className="flex items-center justify-center gap-2 lg:hidden">
                {reviews.map((_, i) => (
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
      </div>
    </div>
  );
};

export default PatientReviewCarouselWithOneVideo;
