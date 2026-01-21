import React from 'react';
import FeatureListCard from '@/components/FeatureListCard';
import { FeatureListCardDataType } from '@/app/api/allTypes';

interface FeatureListCardSectionProps {
  data1: FeatureListCardDataType[];
  data2: FeatureListCardDataType[];
}

const FeatureListCardSection: React.FC<FeatureListCardSectionProps> = ({ data1, data2 }) => {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-center  md:items-stretch gap-8 my-10 md:mb-12 md:mt-28'>
      <FeatureListCard title="Why Opt for Endoscopic Spine Treatment at Nivaan?" data={data1} />
      <FeatureListCard title="When should one consider Endoscopic Spine Treatment?" data={data2} />
    </div>
  );
}

export default FeatureListCardSection;
