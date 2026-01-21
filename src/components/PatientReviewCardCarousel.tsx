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

const PatientReviewCardCarousel = ({ reviews }: { reviews: Review[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const pathName = usePathname()
  const isSciaticaPain = pathName === "/next/sciatica-pain-new";
  const isKyphoplasty = pathName === "/next/Kyphoplasty-new";
  const isEndoscopicDiscetomy = pathName === "/next/endoscopic-discectomy";
  const isHipPain = pathName === "/next/hip-pain" ||pathName==="/next/jaipur/hip-pain" || pathName==="/next/lucknow/hip-pain"
  
  const isThereVideo = reviews?.some(review => review.isVideo)

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
    <div className="px-9 md:px-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {reviews?.map((review) => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
              {review.isVideo && review.videoUrl ? (
                <>
                  <div className="video-wrapper rounded-[10px] md:rounded-[16.2px] overflow-hidden">
                    <YouTubeEmbed
                      videoid={review.videoUrl}
                      params="controls=0"
                      style="height: 100%; width: 100%"
                    />
                  </div>
                </>
              ) : pathName === '/next/chronic-pain-arthroplasty' || isSciaticaPain || isHipPain || isKyphoplasty || isEndoscopicDiscetomy ||pathName === '/next/chronic-pain-vertebroplasty' ? (
                <PatientReviewCard3 review={review} />
              ) : (
                // <PatientReviewCard3 review={review}  />
                <PatientReviewCard review={review} isThereVideo={isThereVideo} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className={`block md:${reviews?.length > 3 ? "block" : "hidden"}`}>
          <CarouselPrevious className="font-extrabold text-[#2F438F]" />
          <CarouselNext className="font-extrabold text-[#2F438F]" />
        </div>
      </Carousel>

      <div className="mt-5">
        {reviews?.length > 3 && (
          <div className="lg:flex items-center justify-center gap-2 hidden ">
            {reviews?.slice(0, 3).map((_, i) => (
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
          {reviews?.map((_, i) => (
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

export default PatientReviewCardCarousel;
