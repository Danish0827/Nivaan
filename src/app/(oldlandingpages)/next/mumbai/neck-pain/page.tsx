import React, { Suspense } from 'react'
import NeckpainLucknow from '@/components/NeckPainLucknow';
import { Metadata } from 'next';
import NeckpainMumbai from '@/components/NeckPainMumbai';
 
export const metadata: Metadata = {
  title: "Best Neck Pain Doctor In Delhi NCR & Mumbai",
  description: "Looking for the best neck pain doctor in Delhi NCR & Mumbai? Receive top-notch care and treatment for neck pain from skilled specialists. Book your consultation today!",
  keywords: ["Neck pain treatment in Delhi NCR & Mumbai",
    "Best neck pain doctor Delhi NCR",
    "Neck pain relief clinic Delhi & Mumbai",
    "Cervical neck pain treatment",
    "Chronic neck pain solutions"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        < NeckpainMumbai/>
      </Suspense>
    </div>
  );
};

export default page;
