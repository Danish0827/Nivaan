import FibromyalgiaTreatment from '@/components/FibromyalgiaTreatment';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <FibromyalgiaTreatment />
      </Suspense>
    </div>
  );
};

export default page;
