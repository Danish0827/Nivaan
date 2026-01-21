import React, { Suspense } from 'react'
import PainMedication from '@/components/PainMedication';

const page = () => {
  return (
    <div>
      <Suspense>
        <PainMedication />
      </Suspense>
    </div>
  );
};

export default page;
