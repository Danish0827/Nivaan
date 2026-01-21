import BackPainLucknow from '@/sections/BackPainEDW/BackPainLucknow';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Back Pain Doctor In Delhi NCR',
  description:
    'Get relief from back pain & avoid back surgery with the best doctors in Delhi NCR. Expert diagnosis and effective treatment for all types of back pain. Consult now for lasting solutions!',
  keywords: [
    'Back pain treatment in Delhi NCR',
    'Best back pain doctor Delhi NCR',
    'Lower back pain specialist',
    'Back pain relief Delhi',
    'Spine pain treatment Delhi NCR',
    'spine specialist',
    'back surgery',
    'spinal hospital',
  ],
};

const page = () => {
  return (
    <Suspense>
      <BackPainLucknow  />
    </Suspense>
  );
};

export default page;
