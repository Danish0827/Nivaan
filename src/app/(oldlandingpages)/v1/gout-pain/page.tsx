import GoutPain from '@/components/GoutPain';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <GoutPain />
      </Suspense>
    </div>
  );
};

export default page;
