import ShoulderPain from '@/components/ShoulderPain';
import React, { Suspense } from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Best Shoulder Pain Doctor In Delhi NCR",
  description: "Searching for the best shoulder pain doctor in Delhi NCR? Get personalized care and treatment from leading specialists. Book your appointment for shoulder pain relief today!",
  keywords: [
    "Shoulder pain treatment in Delhi NCR",
    "Best shoulder pain doctor Delhi NCR",
    "Frozen shoulder treatment Delhi",
    "Shoulder joint pain relief",
    "Shoulder pain specialists near me"
  ]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <ShoulderPain />
      </Suspense>
    </div>
  );
};

export default page;
