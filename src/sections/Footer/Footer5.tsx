import Image from "next/image";
import React from "react";
import NivaanWhiteLogo from "../../../public/nivaan-white-logo.webp";
import NivaanWhiteMobLogo from "../../../public/nivaan-white-logo-mob.webp";
import social1 from "../../../public/social1@2x.webp";
import social2 from "../../../public/social2@2x.webp";
import social3 from "../../../public/social3@2x.webp";
import { FooterLinks5 } from "@/app/api/footerDataMob";

interface FooterProps {
  phoneNumber?: string;
}

export default function Footer5({ phoneNumber }: FooterProps) {
  const defaultPhoneNumber = FooterLinks5.find((section) => section.title === "Contact Us")?.links.find((link) =>
    link.subTitle.startsWith("+91")
  )?.subTitle || "+91-73 5808 1732";

  const updatedFooterLinks = FooterLinks5.map((section) => {
    if (section.title === "Contact Us") {
      return {
        ...section,
        links: section.links.map((link) =>
          link.subTitle.startsWith("+91") ? { ...link, subTitle: phoneNumber || defaultPhoneNumber, url: `tel:${phoneNumber || defaultPhoneNumber}` } : link
        ),
      };
    }
    return section;
  });

  const SocialIcon = () => {
    return (
        <div className="flex flex-row justify-center">
        <div className="flex flex-row w-20 gap-3">
          <a href="https://www.facebook.com/nivaancare" target="_blank">
            <Image src={social3} alt="facebook icon" unoptimized/>
          </a>
          <a href="https://www.youtube.com/@nivaancare" target="_blank">
            <Image src={social1} alt="youtube icon" unoptimized/>
          </a>
          <a href="https://www.instagram.com/nivaancare/" target="_blank">
            <Image src={social2} alt="instagram icon" unoptimized/>
          </a>
        </div>
      </div>
    )
  }

  return (
    <footer className="bg-[#2F438F] text-white py-8">
      <div className="container px-4 flex flex-col md:flex-row md:justify-center md:gap-28 border-b-[1px] border-solid border-white">
        <div className="text-center mb-8">
          <Image
            src={NivaanWhiteLogo}
            alt="Nivaan Footer logo"
            className="hidden md:inline-block mx-auto mb-4"
            width={200}
            height={50}
            unoptimized
          />
          <Image
            src={NivaanWhiteMobLogo}
            alt="Nivaan Footer mobile logo"
            className="md:hidden mx-auto mb-4"
            width={150}
            height={40}
            unoptimized
          />
          <p className="text-sm md:text-base">
            {/* Pioneering Interventional Pain Management */}
            Interventional Pain and Regenerative Medicine
          </p>
        </div>
        <div className="w-full h-[1px] mb-4 md:block md:w-[1px] md:h-44 bg-white"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8">
          {updatedFooterLinks.map((section, index) => (
            <div key={index} className="px-[1.35rem]">
              <h6 className="font-semibold text-lg mb-4">{section.title}</h6>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.subTitle}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm hover:underline ${
                        link.subTitle === "care@nivaancare.com" ||
                        link.subTitle === "Privacy Policy" ||
                        link.subTitle === "Terms of Use"
                          ? "underline"
                          : ""
                      }`}
                    >
                      {link.subTitle}
                    </a>
                  </li>
                ))}
              </ul>
              {section.title === "Contact Us" && (
                <div className="flex flex-col items-start md:justify-center mt-4"> {/* Flex column for desktop, row for mobile */}
                  <SocialIcon />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-xs md:text-sm mt-4">
          <p>&copy; 2025 Nivaan. All Rights Reserved. Terms & Conditions Apply*</p>
        </div>
    </footer>
  );
}