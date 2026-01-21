import { FeaturedBlogDataType } from '@/app/api/homePageData'
import { montserratSemiBold } from '@/app/fonts'
import React from 'react'
import BlogCarousel from './BlogCarousel'

const FeaturedBlogs = ({ data }: { data: FeaturedBlogDataType[] }) => {
  return (
    <div>
      <h2 className={`${montserratSemiBold.className} text-xl md:text-[2.5rem] md:leading-[3.0625rem] text-[#29519B] my-8 text-center`}>Featured Blogs</h2>
      <BlogCarousel data={data} />
    </div>
  )
}

export default FeaturedBlogs
