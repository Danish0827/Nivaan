import GoutPainMumbai from '@/components/GoutPainMumbai';
import React, { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Gout Pain Doctor In Delhi NCR & Mumbai',
  description: "Looking for the best Gout Pain doctor in Delhi NCR & Mumbai? Get expert diagnosis and treatment for sciatica pain from top specialists. Book your consultation now!",
  keywords: ["Sciatica pain treatment in Delhi NCR & Mumbai",
    "Best doctor for Gout Pain in Delhi & Mumbai",
    "Gout Pain relief Delhi NCR & Mumbai",
    "Gout Pain specialists near me",
    "Causes of Gout Pain"]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <GoutPainMumbai />
      </Suspense>
    </div>
  );
};

export default page;
