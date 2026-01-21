import React, { Suspense } from 'react'
import { Metadata } from 'next';
import HipPainMumbai from '@/components/HipPainMumbai';
 
export const metadata: Metadata = {
  title: "Best Hip Pain Doctor In Delhi NCR & Mumbai",
  description: "Searching for the best hip pain doctor in Delhi NCR? Get specialized care and advanced treatment for hip pain from experienced doctors. Book an appointment now!",
  keywords: ["Hip pain treatment in Delhi NCR & Mumbai",
    "Hip pain relief specialist Delhi & Mumbai",
    "Hip joint pain treatment Delhi NCR & Mumbai",
    "Causes of hip pain",
    "Best hip pain doctor near me"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <HipPainMumbai />
      </Suspense>
    </div>
  );
};

export default page;
