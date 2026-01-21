import React, { Suspense } from 'react'
import HipPainLucknow from '@/components/HipPainLucknow';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Best Hip Pain Doctor In Delhi NCR",
  description: "Searching for the best hip pain doctor in Delhi NCR? Get specialized care and advanced treatment for hip pain from experienced doctors. Book an appointment now!",
  keywords: ["Hip pain treatment in Delhi NCR",
    "Hip pain relief specialist Delhi",
    "Hip joint pain treatment Delhi NCR",
    "Causes of hip pain",
    "Best hip pain doctor near me"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <HipPainLucknow />
      </Suspense>
    </div>
  );
};

export default page;
