import BackPainMenNew from '@/components/BackPainMenNew';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <BackPainMenNew pathName='/v1/back-pain-men-new' />
      </Suspense>
    </div>
  );
};

export default page;
