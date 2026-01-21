import React, { Suspense } from 'react'
import NeckpainJaipur from '@/components/NeckPainJaipur';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Best Neck Pain Doctor In Delhi NCR",
  description: "Looking for the best neck pain doctor in Delhi NCR? Receive top-notch care and treatment for neck pain from skilled specialists. Book your consultation today!",
  keywords: ["Neck pain treatment in Delhi NCR",
    "Best neck pain doctor Delhi NCR",
    "Neck pain relief clinic Delhi",
    "Cervical neck pain treatment",
    "Chronic neck pain solutions"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <NeckpainJaipur />
      </Suspense>
    </div>
  );
};

export default page;
