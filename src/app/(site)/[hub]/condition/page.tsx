import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { getContition } from '@/lib/api';
import React from 'react'

const page = async ({ params }: any) => {
  const { hub } = params;

  const data = await getContition(hub);
  console.log(data, "data");

  return (
    <>
      <PageBreadcrumb title={"Condition"} />
      <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-16'>
        <LocationGrid posts={data} url="condition" cat={hub} />
      </div>
    </>
  )
}

export default page