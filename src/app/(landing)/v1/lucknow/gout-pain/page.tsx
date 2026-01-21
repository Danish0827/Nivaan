import GoutPainLucknow from '@/components/GoutPainLucknow';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <GoutPainLucknow />
      </Suspense>
    </div>
  );
};

export default page;
