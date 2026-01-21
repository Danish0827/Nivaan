import SciaticaPainNew from '@/components/SciaticaPainNew';
import React, { Suspense } from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Best Sciatica Doctor In Delhi NCR',
  description: "Looking for the best sciatica doctor in Delhi NCR? Get expert diagnosis and treatment for sciatica pain from top specialists. Book your consultation now!",
  keywords: ["Sciatica pain treatment in Delhi NCR",
    "Best doctor for sciatica in Delhi",
    "Sciatica pain relief Delhi NCR",
    "Sciatica specialists near me",
    "Causes of sciatica pain"]
};

const page = () => {
  return (
    <div>
      <Suspense>
        <SciaticaPainNew />
      </Suspense>
    </div>
  );
};

export default page;
