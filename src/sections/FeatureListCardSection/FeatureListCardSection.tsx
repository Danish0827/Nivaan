import React from 'react';
import FeatureListCard from '@/components/FeatureListCard';
import { FeatureListCardDataType } from '@/app/api/allTypes';

interface FeatureListCardSectionProps {
  data1: FeatureListCardDataType[];
  data2: FeatureListCardDataType[];
}

const FeatureListCardSection: React.FC<FeatureListCardSectionProps> = ({ data1, data2 }) => {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-center gap-8 my-10 md:mb-12 md:mt-28'>
      <FeatureListCard title="Why opt for Nivaan’s Knee Pain treatment?" data={data1} />
      <FeatureListCard title="When does one get Knee Pain treatment?" data={data2} />
    </div>
  );
}

export default FeatureListCardSection;
