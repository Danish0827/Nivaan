import FibromyalgiaTreatmentJaipur from '@/components/FibromyalgiaTreatmentJaipur';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <FibromyalgiaTreatmentJaipur />
      </Suspense>
    </div>
  );
};

export default page;
