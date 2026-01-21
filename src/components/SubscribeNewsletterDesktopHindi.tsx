import React from 'react';
import { montserratNormal, montserratSemiBold } from '@/app/fonts';
import SubscribeFormDesktop from './SubscribeFormDesktop';

const SubscribeNewsletterDesktopHindi: React.FC = () => {
  return (
    <div className='border border-solid border-black rounded-2xl w-[90%] md:w-[60%] mx-auto py-7 px-4 md:py-14 md:px-40 mb-8 md:mb-16'>
      <h1 className={`${montserratSemiBold.className} text-[#2F438F] mx-4 text-center mb-6 text-xl md:text-4xl`}>हमारे न्यूज़लेटर की सदस्यता लें</h1>
      <p className={`${montserratNormal.className} mb-8 text-center`}>अपने इनबॉक्स में लेटेस्ट जानकारी, टिप्स और ट्रिक्स प्राप्त करें</p>
      <SubscribeFormDesktop />
    </div>
  );
};

export default SubscribeNewsletterDesktopHindi;