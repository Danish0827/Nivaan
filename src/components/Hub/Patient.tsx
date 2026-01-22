"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  data: any;
}
const Patient = ({ data }: Props) => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  return (
    <div className='overview-section py-6 space-y-6'>
      {data.patient_stories_videos &&
        <div className="bg-white border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
          {/* Description */}
          <div
            className="text-gray-600 mb-10"
            dangerouslySetInnerHTML={{ __html: data.patient_description_video }}
          />
          {data.patient_stories_videos &&
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1.2 },
                1280: { slidesPerView: 2.5 },
                1400: { slidesPerView: 3 },
              }}
            >
              {data.patient_stories_videos?.map((item: any, index: any) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    {/* CARD */}
                    <div className="relative rounded-[50px] overflow-hidden shadow-[0_3px_20px_rgba(0,0,0,0.15)]">
                      {/* Image or Video Thumbnail */}
                      <div className='bg-gradient-to-tl from-black/50 to-black/30 absolute w-full h-full ' />
                      {item.video_image ? (
                        <Image
                          src={item.video_image.url}
                          alt={item.video_image.alt || item.name}
                          width={600}
                          height={350}
                          className="w-full h-[270px] object-cover"
                          unoptimized
                        />
                      ) : (
                        <video
                          src={item.video?.url}
                          className="w-full h-[270px] object-cover"
                          muted
                          loop
                          playsInline
                        />
                      )}

                      {/* Play Button */}
                      {item.video?.url && (
                        <button
                          onClick={() => setOpenVideo(item.video.url)}
                          className="cursor-pointer absolute right-4 bottom-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg text-blue-700 text-xl hover:scale-105 transition"
                        >
                          ▶
                        </button>
                      )}

                      {/* Overlay Info */}
                      <div className="absolute bottom-6 left-4 text-white">
                        <p className="font-semibold">
                          {item.name}, {item.place}
                        </p>
                        <p className="text-sm opacity-90">{item.type}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>}

          {/* ================= VIDEO MODAL ================= */}
          {openVideo && (
            <div
              className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4"
              onClick={() => setOpenVideo(null)}
            >
              <div
                className="relative w-full max-w-3xl bg-black rounded-2xl"
                onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
              >
                {/* Close Button */}
                <button
                  onClick={() => setOpenVideo(null)}
                  className="absolute top-3 right-3 z-10 cursor-pointer text-white text-2xl"
                >
                  ✕
                </button>

                {/* Video Player */}
                <video
                  src={openVideo}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh] rounded-2xl"
                />
              </div>
            </div>
          )}
        </div>
      }
      {data.patient_stories_google &&
        <div className="bg-white border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
          <div
            className="text-gray-600 mb-10"
            dangerouslySetInnerHTML={{
              __html: data.patient_description_google
            }}
          />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2.5 },
              1400: { slidesPerView: 3 },
            }}
          >
            {data.patient_stories_google.map((item: any, index: number) => {

              return (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-[50px] p-5 xl:p-6 2xl:p-8 shadow-[0_3px_20px_rgba(0,0,0,0.1)] my-6 mx-2 lg:mx-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {item.name?.charAt(0).toUpperCase()}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 xl:text-lg line-clamp-1">{item.name}</h4>
                        <p className="text-gray-500 text-sm xl:text-base">{item.time}</p>
                      </div>
                      <Image
                        src="/images/google.svg"
                        alt="Google Icon"
                        width={35}
                        height={35}
                        className="ml-auto"
                        unoptimized
                      />
                    </div>
                    <Image src="images/starts.svg" alt="Stars" width={100} height={20} className="mb-3" unoptimized />
                    <p className="text-gray-700 text-sm xl:text-base leading-relaxed">{item.review_comments}</p>
                  </div>
                </SwiperSlide>
              );
            })}

          </Swiper>
        </div>
      }
      <div className="bg-white border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
        <div
          className="text-gray-600 mb-10"
          dangerouslySetInnerHTML={{
            __html: data.patient_description_list_icons
          }}
        />
        <div className="space-y-5 pb-10">
          {data.patient_stories_lists && data.patient_stories_lists?.map((item: any, index: any) => (
            <div key={index} className="flex gap-5 items-start">

              {/* Icon */}
              {item.icon &&
                <div className="w-20 h-20 rounded-full bg-[#284599] flex items-center justify-center shrink-0">
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alt || item.title}
                    width={50}
                    height={50}
                    unoptimized
                  />
                </div>}
              {/* Content */}
              <div>
                <h4 className="text-base lg:text-xl font-bold text-black mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Patient