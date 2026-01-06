import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { getTreatment } from '@/lib/api';
import React from 'react'

const page = async () => {
  const data = await getTreatment();
  return (
    <>
      <PageBreadcrumb title={"Treatment"} />
      <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 py-10'>
        <LocationGrid posts={data} url="treatment" />
      </div>
    </>
  )
}

export default page