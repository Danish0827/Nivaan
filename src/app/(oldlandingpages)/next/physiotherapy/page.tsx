import KneePhysiotherapy from '@/components/KneePhysiotherapy';
import React, { Suspense } from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Superspecialist-Guided Advanced Physiotherapy',
  description: "Orthopaedic Surgeon-designed & guided advanced physiotherapy plans with regular progress reviews for safe, lasting relief.",
  keywords: ["Knee pain treatment in Delhi NCR",
    "Best knee pain doctor Delhi NCR",
    "Knee pain relief clinic Delhi",
    "Chronic knee pain treatment",
    "Knee joint pain specialist",
    "Superspecialist-Guided Advanced Physiotherapy"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <KneePhysiotherapy />
      </Suspense>
    </div>
  );
};

export default page;