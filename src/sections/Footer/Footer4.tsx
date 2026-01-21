import React from 'react';
import Image from "next/image";
import NivaanLogoFooter from "../../../public/Footer-Icon.webp";
import NivaanLogoFooterMob from "../../../public/Footer-IconMob.webp";
import NivaanSubLogo from "../../../public/NivaanSubLogoMob.webp";
import social2 from "../../../public/social2@2x.webp";
import social3 from "../../../public/social3@2x.webp";
import { montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts';
import enquiryIcon from "../../../public/enquiries_icon.webp"
import locationIcon from "../../../public/location.webp"
import SubscribeInput from '@/components/SubscribeInput';
import SubscribeInputMob from '@/components/SubscribeInputMob';
import { url } from 'inspector';
import { CheckCircle } from "lucide-react";

const Footer4 = () => {
  const LogoSection = () => {
    return (
      <div className='flex flex-col justify-center items-center'>
          <Image
            className="hidden md:block mx-auto mb-10"
            src={NivaanLogoFooter}
            alt="Nivaan Footer logo"
            width={246}
            height={50}
            unoptimized
          />
          <Image
            className="block md:hidden mx-auto mb-3"
            src={NivaanLogoFooterMob}
            alt="Nivaan Footer mobile logo"
            width={205}
            height={41}
            unoptimized
          />
          {/* <span className='text-[9px] leading-[12px]'>Pioneering Interventional Pain Management</span> */}
          {/* <Image
            className="block md:hidden mx-auto mb-6"
            src={NivaanSubLogo}
            alt="Nivaan Footer mobile logo"
            width={220}
          /> */}
        </div>
    )
  }

  const FollowUs = () => {
    return (
      <div className='flex flex-col mt-6 md:mt-0 mb-4'>
          <h6 className={`${montserratSemiBold.className} text-xs md:text-sm`}>Follow us on</h6>
          <div className="flex flex-row justify-center mt-2 md:mt-3">
            <div className="flex flex-row justify-center md:justify-start w-20 gap-2 md:gap-3">
              <a href="https://www.facebook.com/nivaancare" target="_blank">
                <Image src={social3} alt="facebook icon" className='w-[11.39px] h-[20.33px]' unoptimized/>
              </a>
              <a href="https://www.instagram.com/nivaancare/" target="_blank">
                <Image src={social2} alt="instagram icon" className='w-[17.9px] h-[17.9px]' unoptimized/>
              </a>
            </div>
          </div>
      </div>
    )
  }

  const ForEnquiries = () => {
    return (
      <div className='flex flex-col md:pl-10 md:pr-10'>
        <h6 className="text-sm leading-8 font-medium flex flex-row items-center gap-2">
          <Image src={enquiryIcon} alt='location' width={16.19} height={16.19} className='w-4 h-4' unoptimized/>
          For Enquiries 
        </h6>
        <ul className='list-none text-center md:text-left'>
          <li className={`text-xs leading-6 font-light list-inside`}>
            <a
              href="mailto:care@nivaancare.com"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#FFFFFFB2]'
            >
              care@nivaancare.com
            </a>
          </li>
          <li className={`text-xs leading-6 font-light list-inside}`}>
            <a
              href="tel:+919070057005"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#FFFFFFB2]'
            >
              +91 9070057005
            </a>
          </li>
          <li className={`text-xs leading-6 font-light list-inside}`}>
            <a
              href="tel:+919020295000"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#FFFFFFB2]'
            >
             +91 9020295000
            </a>
          </li>
        </ul>
      </div>
    )
  }

  // const locationLinks = [
  //   { subTitle: "East-Delhi", url: "https://maps.app.goo.gl/fmNjuaiuNwNQxWbS7" },
  //   { subTitle: "North-Delhi", url: "https://maps.app.goo.gl/3Dg5FdmaM87GsS2UA" },
  //   { subTitle: "West-Delhi", url: "https://g.co/kgs/zYFLo96" },
  //   { subTitle: "South-Delhi", url: "https://maps.app.goo.gl/ShnPReST8DKN9gRs5" }
  // ]
 
  const locationLinks = [
    { subTitle: "Delhi", url: "" },
    { subTitle: "Faridabad", url: "" },
    { subTitle: "Gurugram", url: "" },
    { subTitle: "Ghaziabad", url: "" },
    { subTitle: "Noida", url: "" },
    { subTitle: "Lucknow", url: "" },
    { subTitle: "Jaipur", url: "" },
    { subTitle:"Mumbai", url:""}
  ]

const LocationComp = () => {
    return (
        // <div className="flex flex-col md:flex-row justify-center items-center mt-2 w-full">
        //     <div className="grid grid-cols-3 gap-4 md:flex md:space-x-2">
        //         {locationLinks.map((x, i) => (
        //             <React.Fragment key={x.subTitle}>
        //                 <a
        //                   href={x.url}
        //                   target="_blank"
        //                   rel="noopener noreferrer"
        //                   className="text-[#FFFFFFB2] text-xs font-semibold cursor-not-allowed pointer-events-none"
        //                 >
        //                   {x.subTitle}
        //                 </a>
        //                 {i < locationLinks.length - 1 && (
        //                   <div className="bg-[#FFFFFF8F] w-[1.35px] h-[16.19px] mx-2 hidden md:block"></div>
        //                 )}
        //                 {(i===0 || i==2) && (
        //                   <div className="bg-[#FFFFFF8F] w-[1.35px] h-[16.19px] mx-auto block md:hidden"></div>
        //                 )}
        //             </React.Fragment>
        //         ))}
        //     </div>
        // </div>
        <div className="flex justify-center items-center mt-2 w-full md:w-4/5">
      <div className="flex flex-wrap justify-center md:justify-start items-center">
        {locationLinks.map((link, index) => (
          <React.Fragment key={link.subTitle}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFFB2] text-xs font-semibold cursor-not-allowed pointer-events-none"
            >
              {link.subTitle}
            </a>
            {index < locationLinks.length - 1 && (
              <div className="bg-[#FFFFFF8F] w-[1.35px] h-[16.19px] mx-2" aria-hidden="true"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
    )
}

  const OurLocations = () => {
    return (
      <div>
        <h6 className="text-sm leading-8 font-medium flex flex-row items-center justify-center md:justify-start mt-2 md:-mt-6 gap-2">
          <Image src={locationIcon} alt='location' width={16.19} height={16.19} className='w-4 h-4' unoptimized/>
          Our Locations
        </h6>
        <LocationComp />
      </div>
    )
  }

  const items = [
    "8+ Cities",
    "50+ Touchpoints",
    "25000+ Happy Patients",
  ];
  const SubscribeNewslater = () => {
    return (
      <div className='hidden md:block text-center w-[18%]'>
        {items.map((text, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="text-white w-3 h-3" />
            <span className="text-white text-sm font-semibold">{text}</span>
          </div>
        ))}
        {/* <h6 className={`${montserratSemiBold.className} text-[12.59px] mb-2`}>Subscribe To Our Newsletters</h6>
        <SubscribeInput /> */}
      </div>
    )
  }

  const SubscribeNewslaterMob = () => {
    return (
      <div className='flex flex-col items-center md:hidden'>
        {/* <h6 className={`${montserratSemiBold.className} text-[12.59px] mb-2`}>Subscribe To Our Newsletter</h6> */}
        <SubscribeInputMob />
      </div>
    )
  }

  const AllRights = () => {
    return (
      <div className=' text-[10px] md:text-xs font-light flex flex-col justify-center items-center md:flex-row md:justify-center pb-6 px-12 gap-6'>
        <span className='text-[#FFFFFF99]'>© 2025 Nivaan. All Rights. Reserved</span>
        <div className='flex flex-row gap-6'>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms Of Use</a>
        </div>
      </div>
    )
  }

  return (
    <footer
      className="text-white pt-6"
      style={{
        backgroundImage: 'linear-gradient(94.32deg, #54b1e2 -74.7%, #29519b 119.93%)'
      }}
    >
      <div className='flex flex-col'>
        <LogoSection />
        <div className='flex flex-col items-center md:flex-row md:justify-evenly'>
          <SubscribeNewslaterMob />
          <FollowUs />
          <ForEnquiries />
          <OurLocations />
          <SubscribeNewslater />
        </div>
        <div className='h-[1px] w-full bg-[#FFFFFF26] my-6'></div>
        <AllRights />
      </div>
    </footer>
  );
};

export default Footer4;