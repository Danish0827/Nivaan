import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import {  getTreatments } from '@/lib/api';
import React from 'react'

const page  = async ({ params }: any) => {
  const { hub } = params;

  const data = await getTreatments(hub);
  console.log(data,"data djkdajdajkdak");
  
  return (
    <>
    <PageBreadcrumb title={"Treatment"} />
    <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-16'>
      <LocationGrid posts={data} url="treatment" cat={hub} />
      </div>
    </>
  )
}

export default page
