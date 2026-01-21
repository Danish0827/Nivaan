import TrigeminalNeuralgiaTreatment from '@/components/TrigeminalNeuralgiaTreatment';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <TrigeminalNeuralgiaTreatment />
      </Suspense>
    </div>
  );
};

export default page;
