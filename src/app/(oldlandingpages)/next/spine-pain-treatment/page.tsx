import Spine from '@/components/Spine';
import React, { Suspense } from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Back Pain? It’s Time to Restore Motion',
  description: "Back Pain? It’s Time to Restore Motion —Without Open Surgery",
  keywords: ["Preserves Your Natural Spine Structure",
    "Best knee pain doctor Delhi NCR",
    "Knee pain relief clinic Delhi",
    "Chronic knee pain treatment",
    "Knee joint pain specialist",
    "Knee osteoarthritis treatment",
    "Minimally Invasive"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <Spine />
      </Suspense>
    </div>
  );
};

export default page;