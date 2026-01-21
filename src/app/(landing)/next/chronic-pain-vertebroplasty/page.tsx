import VertebroplastyNCR from '@/components/VertebroplastyNCR';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <VertebroplastyNCR />
      </Suspense>
    </div>
  );
};

export default page;
