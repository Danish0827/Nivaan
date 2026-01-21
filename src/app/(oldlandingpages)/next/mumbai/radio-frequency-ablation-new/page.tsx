import RadioFrequencyAblationMumbai from '@/components/RadioFrequencyAblationNewMumbai';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <RadioFrequencyAblationMumbai />
      </Suspense>
    </div>
  );
};

export default page;
