import RadioFrequencyAblationNew from '@/components/RadioFrequencyAblationNew';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <RadioFrequencyAblationNew />
      </Suspense>
    </div>
  );
};

export default page;
