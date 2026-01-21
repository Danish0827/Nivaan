'use client';

import React from 'react';
import subscribeIcon from '../../public/subscribeIcon.webp';
import Image from 'next/image';
import { montserratSemiBold } from '@/app/fonts';
import { useRouter } from 'next/navigation';

interface SubscribeButtonProps {
  onClick?: () => void;
  route?: string;
  title?: string;
  type?: "button" | "submit" | "reset";
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  onClick,
  route,
  title = "Subscribe Now",
  type = "button", // Default button type
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <button
      onClick={onClick || handleClick}
      type={type}
      className={`bg-[#E47642] w-[166px] md:w-[196px] rounded-3xl shadow-sm mt-2 lg:mt-0 text-[#EFF8FE] p-2 text-xs md:text-sm flex items-center justify-around mx-auto drop-shadow-xl`}
    >
      <span className={`ml-3 ${montserratSemiBold.className}`}>{title}</span>
      <Image
        src={subscribeIcon}
        alt="Subscribe"
        className="w-6 h-6 md:w-8 md:h-8"
        unoptimized
      />
    </button>
  );
};

export default SubscribeButton;

// 'use client'
// import React from 'react';
// import subscribeIcon from '../../public/subscribeIcon.png'
// import Image from 'next/image';
// import { montserratSemiBold } from '@/app/fonts';
// import { useRouter } from 'next/navigation'

// interface SubscribeButtonProps {
//   onClick?: () => void;
//   route?: string;
//   title?: string | "Subscribe Now"
//   type?: "button" | "submit" | "reset"
// }

// const SubscribeButton: React.FC<SubscribeButtonProps> = (props) => {
//   const router = useRouter()

//   const handleClick = () => {
//     if (props.route) {
//       router.push(props.route)
//     }
//   }
//   // mx-auto
//   return (
//     <button
//       onClick={props.onClick || handleClick}
//       type={props.type}
//       className={`bg-[#E47642] w-[166px] md:w-[196px] rounded-3xl shadow-sm mt-2 lg:mt-0 text-[#EFF8FE] p-2 text-xs md:text-sm flex items-center justify-around mx-auto drop-shadow-xl`}
//     >
//       <span className='ml-3'>{props.title}</span>
//       <Image src={subscribeIcon} alt="Subscribe" className={`${montserratSemiBold.className} w-6 h-6 md:w-8 md:h-8`} />
//     </button>
//   );
// };

// export default SubscribeButton;