import React, { Suspense } from 'react'
import { Metadata } from 'next';
import SciaticaPainMumbai from '@/components/SciaticaPainMumbai';
 
export const metadata: Metadata = {
  title: 'Best Sciatica Doctor In Delhi NCR & Mumbai',
  description: "Looking for the best sciatica doctor in Delhi NCR & Mumbai? Get expert diagnosis and treatment for sciatica pain from top specialists. Book your consultation now!",
  keywords: ["Sciatica pain treatment in Delhi NCR & Mumbai",
    "Best doctor for sciatica in Delhi",
    "Sciatica pain relief Delhi NCR & Mumbai",
    "Sciatica specialists near me",
    "Causes of sciatica pain"]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <SciaticaPainMumbai />
      </Suspense>
    </div>
  );
};

export default page;
