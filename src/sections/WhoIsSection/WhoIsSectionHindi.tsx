import { overlaySlideDataType } from '@/app/api/allTypes'
import { montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts'
import ImageOverlaySlideComponent from '@/components/ImageOverlaySlideComponent'
import React from 'react'

const WhoIsSectionHindi = ({data}: {data: overlaySlideDataType[]}) => {
  return (
    <div className='text-left md:text-center mb-10 md:mb-20'>
      <h1 className={`${montserratSemiBold.className} ml-10 md:ml-0 text-xl md:text-4xl mb-3 md:mb-6 mt-10 md:mt-14 text-[#264494]`}>दर्द विशेषज्ञ/पेन स्पेस्लिस्ट कौन है?</h1>
      <p className={`${montserratSemiSemiBold.className} text-sm leading-7 md:text-base text-[#181818B2] w-[80%] md:w-[62%] mx-auto text-left md:text-center`}>
        दर्द विशेषज्ञ एक फिजिशियन होते हैं जो दर्द के मूल्यांकन, निदान और उपचार के विशेषज्ञ होते हैं। मास्टर डिग्री के बाद, ये डॉक्टर पेन मेनेजमेंट में एक साल की अतिरिक्त 
        फैलोशिप करते हैं। उन्हें एडवांस तकनीकों की ट्रेनिंग देकर प्रशिक्षित किया जाता है, ताकि बीमारी, चोट या किसी भी तरह का दर्द होने पर आपको बेहतरीन इलाज मिल 
        सके।
      </p>
      <h1 className={`${montserratSemiBold.className} text-xl md:text-4xl mb-3 md:mb-10 mt-7 md:mt-14 text-[#264494] w-[80%] text-left md:text-center md:w-1/2 mx-auto`}>पैन स्पेशलिस्ट आपके दर्द का इलाज करने के लिए सबसे अच्छे डॉक्टर क्यों होते हैं?</h1>
      <div className='flex flex-col items-center md:flex-row md:justify-center gap-6'>
        {
            data.map(obj => <ImageOverlaySlideComponent key={obj.title} overlaySlideData={obj} />)
        }
      </div>
    </div>
  )
}

export default WhoIsSectionHindi
