import NerveBlockNew from '@/components/NerveBlockNew';
import React, { Suspense } from 'react'

const page = () => (
  <div>
    <Suspense>
      <NerveBlockNew />
    </Suspense>
  </div>
);

export default page;
