import KneePainResurface from '@/components/KneePainResurface';
import React, { Suspense } from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Resurface! Don’t Replace',
  description: "Find the best knee pain doctor in Delhi NCR. Get expert diagnosis and personalized treatment to relieve knee pain and improve mobility. Schedule your consultation today!",
  keywords: ["Knee pain treatment in Delhi NCR",
    "Best knee pain doctor Delhi NCR",
    "Knee pain relief clinic Delhi",
    "Chronic knee pain treatment",
    "Knee joint pain specialist",
    "Knee osteoarthritis treatment"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <KneePainResurface />
      </Suspense>
    </div>
  );
};

export default page;