import BackPainLucknow from '@/sections/BackPainEDW/BackPainLucknow';
import { Suspense } from 'react';
import { Metadata } from 'next';
import BackPainMumbai from '@/sections/BackPainEDW/BackPainMumbai';

export const metadata: Metadata = {
  title: 'Best Back Pain Doctor In Delhi NCR & Mumbai',
  description:
    'Get relief from back pain & avoid back surgery with the best doctors in Delhi NCR & Mumbai. Expert diagnosis and effective treatment for all types of back pain. Consult now for lasting solutions!',
  keywords: [
    'Back pain treatment in Delhi NCR & Mumbai',
    'Best back pain doctor Delhi NCR & Mumbai',
    'Lower back pain specialist',
    'Back pain relief Delhi',
    'Spine pain treatment Delhi NCR & Mumbai',
    'spine specialist',
    'back surgery',
    'spinal hospital',
  ],
};

const page = () => {
  return (
    <Suspense>
      <BackPainMumbai />
    </Suspense>
  );
};

export default page;
