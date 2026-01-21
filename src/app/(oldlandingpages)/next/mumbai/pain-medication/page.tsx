import React, { Suspense } from 'react'
import PainmedicationMumbai from '@/components/PainmedicactionMumbai';

const page = () => {
  return (
    <div>
      <Suspense>
        <PainmedicationMumbai />
      </Suspense>
    </div>
  );
};

export default page;
