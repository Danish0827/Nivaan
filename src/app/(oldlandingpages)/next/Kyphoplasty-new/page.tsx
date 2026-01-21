import React, { Suspense } from 'react'
import KyphoplastyNew from '@/components/KyphoplastyNew';

const page = () => {
  return (
    <div>
      <Suspense>
        <KyphoplastyNew />
      </Suspense>
    </div>
  );
};

export default page;
