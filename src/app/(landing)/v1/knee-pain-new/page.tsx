import React, { Suspense } from 'react'
import KneePain from '@/components/KneePain';

const page = () => {
  return (
    <div>
      <Suspense>
        <KneePain />
      </Suspense>
    </div>
  );
};

export default page;
