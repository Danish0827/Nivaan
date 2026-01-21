import PlantarFasciitisJaipur from '@/components/PlantarFasciitisJaipur';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <PlantarFasciitisJaipur />
      </Suspense>
    </div>
  );
};

export default page;
