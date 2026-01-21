'use client'
import React from 'react'
import { FeaturedBlogDataType } from '@/app/api/homePageData'
import { montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const BlogCard = ({data}: {data: FeaturedBlogDataType}) => {
    const router = useRouter();
  return (
    <div onClick={() => router.push(`${data.url}`)} className='border border-solid border-[#3D35291F] w-[270.47px] h-[240.72px] md:w-[400px] md:h-[356px] px-8 pt-8 pb-4 rounded-[1.25rem] mx-auto cursor-pointer'>
      <Image src={data.img} alt={'blog'} width={354} height={202} className='hidden md:block' unoptimized/>
      <Image src={data.img} alt={'blog'} width={239.37} height={136.59} className='block md:hidden' unoptimized />
      <h4 className={`${montserratSemiSemiBold.className} text-[9.47px] md:text-sm text-[#181818B2] my-2 md:my-4`}>{data.title}</h4>
      <p className={`${montserratSemiBold.className} text-[10.82px] leading-[16.23px] md:text-base text-[#29519B]`}>{data.description}</p>
    </div>
  )
}

export default BlogCard
