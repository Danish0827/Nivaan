'use client'

import { DoctorsDataProps } from '@/interfaces/DoctorData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Doctorsdata: React.FC<DoctorsDataProps> = ({ experts }) => {

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10 py-16 px-4 lg:px-10 xl:px-16 2xl:px-24">
                {experts.map((item, i) => (
                    <Link
                        key={i}
                        href={`/doctors/${item.slug}`}
                        className="group"
                    >
                        <div className="rounded-3xl text-left text-[#003B73] overflow-hidden">
                            <div className="relative pt-5 mb-6 overflow-hidden rounded-[50px] group-hover:-mt-5 duration-500">
                                <Image
                                    src={item?.featured_image?.url}
                                    alt={item?.featured_image?.alt}
                                    width={1000}
                                    height={1000}
                                    className="rounded-xl object-cover w-full transition-transform duration-500 "
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#003B73] via-[#003B73]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-end mb-10 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-sm xl:text-base font-semibold border border-white px-5 py-2 rounded-full backdrop-blur-sm">
                                        View Profile
                                    </span>
                                </div>
                            </div>
                            <div className="px-6">
                                <h3 className="text-lg md:text-xl xl:text-2xl font-medium text-[#0852A0] line-clamp-1">
                                    {item?.title}
                                </h3>
                                <p className="text-[11px] md:text-xs xl:text-sm text-[#06A1DC] mt-1 line-clamp-1">
                                    {item.qualification}
                                </p>
                                <p className="text-sm md:text-base font-normal text-black mt-2 mb-1">
                                    <span className="font-bold">{item.experience}+ years</span> Experience
                                </p>
                                <p className="text-sm font-light text-black">
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

export default Doctorsdata
