'use client'

import { DoctorsDataProps } from '@/interfaces/DoctorData'
import Image from 'next/image'
import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

const Doctorsdata: React.FC<DoctorsDataProps> = ({ experts }) => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    
    <>
      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="block lg:hidden relative">
        <Swiper
  modules={[Pagination, Autoplay, Navigation]}
  spaceBetween={16}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onBeforeInit={(swiper) => {
    // 👇 Type-safe navigation fix
    const navigation = swiper.params.navigation
    if (typeof navigation !== 'boolean' && navigation) {
      navigation.prevEl = prevRef.current
      navigation.nextEl = nextRef.current
    }
  }}
>

          {experts.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-3xl text-left text-[#003B73]">
                <div className="mb-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={500}
                    className="rounded-xl object-cover w-full"
                  />
                </div>
                <div className="px-6 pb-8">
                  <h3 className="text-xl font-medium text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#06A1DC] mt-1">
                    {item.degree}
                  </p>
                  <p className="text-base font-semibold text-white mt-3">
                    {item.experience}
                  </p>
                  <p className="text-sm font-light text-blue-100">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== Bottom Navigation Arrows ===== */}
        {/* <div className="flex justify-center items-center gap-4 mt-6">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center"
          >
            →
          </button>
        </div> */}
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden lg:grid grid-cols-4 gap-5 xl:gap-6 pb-10">
        {experts.map((item, i) => (
          <div key={i} className="rounded-3xl text-left text-[#003B73]">
            <div className="mb-6">
              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={500}
                className="rounded-xl object-cover w-full"
              />
            </div>
            <div className="px-6">
              <h3 className="text-xl xl:text-2xl font-medium text-white">
                {item.name}
              </h3>
              <p className="text-xs xl:text-sm text-[#06A1DC] mt-1">
                {item.degree}
              </p>
              <p className="text-base font-semibold text-white mt-3">
                {item.experience}
              </p>
              <p className="text-sm font-light text-blue-100">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Doctorsdata
