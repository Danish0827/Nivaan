'use client'
import React, { useState, useEffect } from "react";
import CoreTeamCard from "./CoreTeamCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { FeaturedBlogDataType, whyOurCenterDataType } from "@/app/api/homePageData";
import BlogCard from "./BlogCard";

const BlogCarousel = ({ data }: { data: FeaturedBlogDataType[] }) => {
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
            <CarouselItem key={doc.id} className="md:basis-1/2 lg:basis-1/3">
              <BlogCard data={doc} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`block md:hidden`}
        >
          <CarouselPrevious className="font-extrabold text-[#2F438F] md:ml-[-3rem]" />
          <CarouselNext className="font-extrabold text-[#2F438F] md:mr-[-3rem]"/>
        </div>
      </Carousel>

      <div className="my-10">
        {data.length > 3 && (
          <div className="lg:flex items-center justify-center gap-2 hidden ">
            {data.slice(0, data.length - 2).map((_, i) => (
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
        )}

        <div className="flex items-center justify-center gap-2 lg:hidden">
          {data.map((_, i) => (
            <div
              key={i}
              onClick={() => handleBulletClick(i)}
              className={`
                  transition-all w-2 h-2 rounded-full
                  ${current === i ? "px-4 bg-[#645D91]" : "bg-[#D9D9D9]"}
                `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;

