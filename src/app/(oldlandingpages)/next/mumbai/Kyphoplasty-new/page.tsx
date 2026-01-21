import React, { Suspense } from 'react'
import KyphoplastyNewMumbai from '@/components/KyphoplastyNewMumbai';

const page = () => {
  return (
    <div>
      <Suspense>
        <KyphoplastyNewMumbai />
      </Suspense>
    </div>
  );
};

export default page;
