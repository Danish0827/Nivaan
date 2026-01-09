import { DoctorHeroSection } from '@/components/DoctorHeroSection'
import Doctorsdata from '@/components/Doctorsdata';
import { getDoctors, getDoctorsPage } from '@/lib/api';
import React from 'react'

const doctor = async () => {
   const data = await getDoctorsPage()
   const data1 = await getDoctors()
  return (
    <>
    <DoctorHeroSection
     title={data?.acf?.doctors_page_title}
        description={data?.acf?.doctors_details}
        seo={data?.seo}
        image={data?.acf?.video_file?.url}
    />
    <Doctorsdata experts={data1?.data}/>
    </>
  )
}

export default doctor