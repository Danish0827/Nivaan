import PlantarFasciitisLucknow from '@/components/PlantarFasciitisLucknow';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <PlantarFasciitisLucknow />
      </Suspense>
    </div>
  );
};

export default page;
