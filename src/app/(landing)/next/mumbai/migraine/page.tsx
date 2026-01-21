import React, { Suspense } from 'react'
import { Metadata } from 'next';
import MigraineMumbai from '@/components/MigraineMumbai';
 
export const metadata: Metadata = {
  title: "Best Migraine Doctor In Delhi NCR & Mumbai",
  description: "Find the best migraine doctor in Delhi NCR & Mumbai. Expert diagnosis and effective treatment plans for migraine relief. Schedule your appointment with top migraine specialists now!",
  keywords: [
    "Migraine treatment in Delhi NCR & Mumbai",
    "Best migraine doctor Delhi NCR & Mumbai",
    "Migraine headache relief Delhi",
    "Chronic migraine treatment",
    "Migraine specialists near me"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <MigraineMumbai />
      </Suspense>
    </div>
  );
};

export default page;
