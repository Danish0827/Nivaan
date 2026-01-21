import React, { Suspense } from 'react'
import { Metadata } from 'next';
import KneePainTreatmentMumbia from '@/components/KneePainTreatmentMumbai';

export const metadata: Metadata = {
  title: 'Best Knee Pain Doctor In Delhi NCR & Mumbia',
  description: "Find the best knee pain doctor in Delhi NCR & Mumbia. Get expert diagnosis and personalized treatment to relieve knee pain and improve mobility. Schedule your consultation today!",
  keywords: ["Knee pain treatment in Delhi NCR & Mumbia",
    "Best knee pain doctor Delhi NCR & Mumbia",
    "Knee pain relief clinic Delhi & Mumbia",
    "Chronic knee pain treatment",
    "Knee joint pain specialist",
    "Knee osteoarthritis treatment"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
       <KneePainTreatmentMumbia/>
      </Suspense>
    </div>
  );
};

export default page;