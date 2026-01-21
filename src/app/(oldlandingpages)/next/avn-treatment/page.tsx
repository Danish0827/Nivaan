import AvnTreatment from '@/components/AvnTreatment';
import React, { Suspense } from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  description: "Find expert treatment for avascular necrosis at Nivaan Pain Care Center. Our specialists offer advanced therapies for joint pain relief, and comprehensive care. Schedule your consultation today.",
};

const page = () => {
  return (
    <div>
      <Suspense>
        <AvnTreatment />
      </Suspense>
    </div>
  );
};

export default page;
