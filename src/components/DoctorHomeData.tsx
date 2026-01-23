'use client'

import { DoctorsDataProps } from '@/interfaces/DoctorData'
import Image from 'next/image'
import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'

const DoctorHomeData: React.FC<DoctorsDataProps> = ({ experts }) => {
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
                                        src={item.featured_image.url}
                                        alt={item?.featured_image?.alt}
                                        width={600}
                                        height={500}
                                        className="rounded-xl object-cover w-full"
                                        unoptimized
                                    />
                                </div>
                                <div className="px-6 pb-8">
                                    <h3 className="text-xl font-medium text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-[#06A1DC] mt-1">
                                        {item.qualification}
                                    </p>
                                    <p className="text-base font-semibold text-white mt-3">
                                       <span className="font-bold">{item.experience}+ years</span> Experience
                                    </p>
                                    <p className="text-sm font-light text-blue-100">
                                        {item.place}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            {/* ================= DESKTOP GRID ================= */}
            <div className="hidden lg:grid grid-cols-4 gap-5 xl:gap-6 pb-10">
                {experts.map((item, i) => (
                     <Link
                        key={i}
                        href={`/doctors/${item.slug}`}
                        className="group"
                    >
                    <div className="rounded-3xl text-left text-[#003B73]">
                        <div className="mb-6">
                            <Image
                                src={item.featured_image.url}
                                alt={item.title}
                                width={600}
                                height={500}
                                className="rounded-xl object-cover w-full"
                                unoptimized
                            />
                        </div>
                        <div className="px-6">
                            <h3 className="text-xl xl:text-2xl font-medium text-white">
                                 {item?.title}
                            </h3>
                            <p className="text-xs xl:text-sm text-[#06A1DC] mt-1">
                                {item.qualification}
                            </p>
                            <p className="text-base font-semibold text-white mt-3">
                               <span className="font-bold">{item.experience}+ years</span> Experience
                            </p>
                            <p className="text-sm font-light text-blue-100">
                                {item.place}
                            </p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default DoctorHomeData
