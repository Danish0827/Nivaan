import React, { Suspense } from 'react'
import InflammatoryPain from '@/components/InflammatoryPain';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Inflammatory Pain Treatment In Delhi NCR",
  description: "Searching for the inflammatory pain  doctor in Delhi NCR? Get specialized care and advanced treatment for inflammatory pain from experienced doctors. Book an appointment now!",
  keywords: ["Inflammatory Pain treatment in Delhi NCR",
    "Inflammatory Pain relief specialist Delhi",
    "Inflammatory Pain treatment Delhi NCR",
    "Causes of Inflammatory Pain",
    "Best Inflammatory Pain doctor near me"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <InflammatoryPain />
      </Suspense>
    </div>
  );
};

export default page;
