"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RequestCallbackModal from "../RequestCallbackModal";
import parse from "html-react-parser";
import Link from "next/link";
import { formatDate } from "../BlogCard";
import BlogEmptyState from "../BlogEmptyState";

interface Props {
    data: any;
}

export default function BlogsSection({ data }: Props) {
    if (!data?.treatment_boxs?.length) return null;

    return (
        <section className="bg-white w-full pt-7">
            <div className="container mr-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1.2 },
                        1280: { slidesPerView: 2.5 },
                        1400: { slidesPerView: 3 },
                    }}
                >
                    {data.select_blogs ? data.select_blogs.map((post: any, i: number) => {
                        return (
                            <SwiperSlide key={i}>
                                <Link
                                    href={`/blog/${post.categories[0].slug}/${post.slug}`}
                                    className="group  overflow-hidden"
                                >
                                    <div className="relative h-[230px] lg:h-[180px] xl:h-[230px] w-full rounded-3xl overflow-hidden">
                                        <Image
                                            src={post.featured_image?.url}
                                            alt={post.featured_image?.alt || post.title}
                                            fill
                                            className="object-cover rounded-3xl  shadow-sm hover:shadow-md transition group-hover:scale-110 duration-500"
                                            unoptimized
                                        />
                                    </div>

                                    <div className="p-5">
                                        <div className="pb-3 flex justify-between">
                                            <span className="inline-block mb-2 text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-800">
                                                {parse(post.categories?.[0]?.name)}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {formatDate(post.date)}
                                            </span>

                                        </div>

                                        <h3 className="text-lg font-semibold text-[#0852A0] group-hover:underline line-clamp-2">
                                            {parse(post.title)}
                                        </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    }) : <BlogEmptyState />}

                </Swiper>
            </div>
        </section>
    );
}
