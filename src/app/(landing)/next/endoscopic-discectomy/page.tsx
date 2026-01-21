import EndoscopicDiscectomy from '@/components/EndoscopicDiscectomy';
import VertebroplastyNCR from '@/components/VertebroplastyNCR';
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense>
        <EndoscopicDiscectomy />
      </Suspense>
    </div>
  );
};

export default page;
