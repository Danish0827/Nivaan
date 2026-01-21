import React, { Suspense } from 'react'
import PainmedicationLucknow from '@/components/PainemedicationLucknow';

const page = () => {
  return (
    <div>
      <Suspense>
        <PainmedicationLucknow />
      </Suspense>
    </div>
  );
};

export default page;
