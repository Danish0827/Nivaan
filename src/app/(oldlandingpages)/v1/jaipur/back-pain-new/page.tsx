import BackPainNewJaipur from '@/components/BackPainNewJaipur';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <BackPainNewJaipur pathName="/v1/jaipur/back-pain-new" imgStyle="w-[150px] lg:w-[300px] h-[126px] lg:h-[276px] absolute -bottom-14 -right-8 lg:absolute -lg:bottom-14 lg:right-0" />
      </Suspense>
    </div>
  );
};

export default page;
