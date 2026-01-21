import React, { Suspense } from 'react'
import PainmedicationJaipur from '@/components/PainmediccactionJaipur';

const page = () => {
  return (
    <div>
      <Suspense>
        <PainmedicationJaipur />
      </Suspense>
    </div>
  );
};

export default page;
