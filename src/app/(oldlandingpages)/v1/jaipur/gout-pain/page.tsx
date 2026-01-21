import GoutPainJaipur from '@/components/GoutPainJaipur';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense>
        <GoutPainJaipur />
      </Suspense>
    </div>
  );
};

export default page;
