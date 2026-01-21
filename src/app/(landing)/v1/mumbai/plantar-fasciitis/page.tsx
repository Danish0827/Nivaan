import PlantarFasciitisMumbai from '@/components/PlantarFasciitisMumbai';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <PlantarFasciitisMumbai />
      </Suspense>
    </div>
  );
};

export default page;
