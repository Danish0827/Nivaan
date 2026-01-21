import React from 'react';
import Image from "next/image";
import NivaanWhiteLogo from "../../../public/desktop/nivaan-white-logo.webp";
import NivaanWhiteMobLogo from "../../../public/mobile/nivaan-white-logo-mob.webp";
import social2 from "../../../public/social2@2x.webp";
import social3 from "../../../public/social3@2x.webp";
import { Footer2Links } from '@/app/api/footerData';

const Footer3 = () => {
  return (
    <footer
      className="text-white pt-6"
      style={{
        backgroundImage: 'linear-gradient(94.32deg, #54b1e2 -74.7%, #29519b 119.93%)'
      }}
    >
      <div className='flex flex-row'>
        <div className='w-[29%] flex flex-col items-start px-12 py-8'>
          <div>
            <Image
              className="hidden md:block mx-auto mb-4"
              src={NivaanWhiteLogo}
              alt="Nivaan Footer logo"
              unoptimized
            />
            <Image
              className="block md:hidden mx-auto mb-4"
              src={NivaanWhiteMobLogo}
              alt="Nivaan Footer mobile logo"
              unoptimized
            />
          </div>
          <p className='text-sm mt-4'>India’s most advanced pain management clinic in Delhi offering integrated solutions for chronic pain.</p>
          <h4 className='text-sm font-semibold mt-6'>Follow us on</h4>
          <div className="flex flex-row justify-center mt-6">
            <div className="flex flex-row w-20 gap-3">
              <a href="https://www.facebook.com/nivaancare" target="_blank">
                <Image src={social3} alt="facebook icon" width={12} height={16} unoptimized/>
              </a>
              <a href="https://www.instagram.com/nivaancare/" target="_blank">
                <Image src={social2} alt="instagram icon" width={20} height={20} unoptimized/>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:w-4/5 md:mx-auto py-8">
          {Footer2Links.map((obj, i) => (
            <div
              key={i}
              className="flex flex-col items-start md:px-18 mb-4 px-5 gap-2"
            >
              <h6 className="text-sm leading-8 font-medium flex flex-row gap-2">
                {obj.titleIcon && <Image src={obj.titleIcon} alt='location' width={10} height={10} />}
                {obj.title}
              </h6>
              <ul>
                {obj.links.map((x) => (
                  <li
                    key={x.subTitle}
                    className={`text-xs leading-6 font-light ${obj.title !== "Contact Us" ? "list-disc list-inside" : ""
                      }`}
                  >
                    <a
                      href={x.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        x.subTitle === "care@nivaancare.com" || x.subTitle === "Privacy Policy" || x.subTitle === "Terms of Use"
                          ? "underline"
                          : x.subTitle?.startsWith("+91") ?? false
                            ? "font-bold"
                            : ""
                      }
                    >
                      {x.subTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#ffffff99]'></div>
      <div className='text-xs font-light flex flex-row py-6 px-12 gap-6'>
        <span>© 2023 Nivaan. All Rights. Reserved</span>
        <a href="https://www.nivaancare.com/privacy-policy/">Privacy Policy</a>
        <a href="https://www.nivaancare.com/terms-and-conditions/">Terms Of Use</a>
      </div>
    </footer>
  );
};

export default Footer3;