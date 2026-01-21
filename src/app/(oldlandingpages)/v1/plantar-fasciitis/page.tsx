import GoutPain from '@/components/GoutPain';
import PlantarFasciitis from '@/components/PlantarFasciitis';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <PlantarFasciitis />
      </Suspense>
    </div>
  );
};

export default page;
