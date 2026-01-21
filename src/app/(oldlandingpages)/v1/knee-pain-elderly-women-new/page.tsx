import React, { Suspense } from 'react'
import KneePainElderlyWomenNew from '@/components/KneePainElderlyWomenNew';

const page = () => {
  return (
    <div>
      <Suspense>
        <KneePainElderlyWomenNew />
      </Suspense>
    </div>
  );
};

export default page;
