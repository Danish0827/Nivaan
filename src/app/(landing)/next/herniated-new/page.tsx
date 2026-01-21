import Herniated from '@/components/Herniated';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <Herniated />
      </Suspense>
    </div>
  );
};

export default page;
