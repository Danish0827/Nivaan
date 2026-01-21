import MigraineJaipur from '@/components/MigraineJaipur';
import React, { Suspense } from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Best Migraine Doctor In Delhi NCR",
  description: "Find the best migraine doctor in Delhi NCR. Expert diagnosis and effective treatment plans for migraine relief. Schedule your appointment with top migraine specialists now!",
  keywords: [
    "Migraine treatment in Delhi NCR",
    "Best migraine doctor Delhi NCR",
    "Migraine headache relief Delhi",
    "Chronic migraine treatment",
    "Migraine specialists near me"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <MigraineJaipur />
      </Suspense>
    </div>
  );
};

export default page;
