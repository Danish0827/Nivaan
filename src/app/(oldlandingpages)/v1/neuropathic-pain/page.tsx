import GoutPain from '@/components/GoutPain';
import NeuropathicPain from '@/components/NeuropathicPain';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <NeuropathicPain />
      </Suspense>
    </div>
  );
};

export default page;
