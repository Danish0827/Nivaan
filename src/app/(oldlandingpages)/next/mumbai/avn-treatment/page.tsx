import React, { Suspense } from 'react'
import { Metadata } from 'next';
import AvnTreatmentMumbai from '@/components/AvnTreatmentMumbai';
 
export const metadata: Metadata = {
  description: "Find expert treatment for avascular necrosis at Nivaan Pain Care Center. Our specialists offer advanced therapies for joint pain relief, and comprehensive care. Schedule your consultation today.",
};

const page = () => {
  return (
    <div>
      <Suspense>
        <AvnTreatmentMumbai />
      </Suspense>
    </div>
  );
};

export default page;
