import React, { Suspense } from 'react'
import KneePainElderlyMenNew from '@/components/KneePainElderlyMenNew';

const page = () => {
  return (
    <div>
      <Suspense>
        <KneePainElderlyMenNew />
      </Suspense>
    </div>
  );
};

export default page;
