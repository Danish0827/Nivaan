'use client'
import Image from "next/image";
import React from "react";
import NivaanWhiteLogo from "../../../public/desktop/nivaan-white-logo.webp";
import NivaanWhiteMobLogo from "../../../public/mobile/nivaan-white-logo-mob.webp";
import { Separator } from "@/components/ui/separator";
import { rubikLight } from "@/app/fonts";
import { usePathname } from "next/navigation";
import SocialIcon from "@/components/SocialIcon";
import SubscribeSection from "@/components/SubscribeSection";
import SubscribeSectionMob from "@/components/SubscribeSectionMob";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";

const Footer2 = ({ phoneNumber }: { phoneNumber?: string }) => {
  const pathName = usePathname();
  const isNextPath = pathName.includes("/next/");
  const defaultPhoneNumberMob = FooterLinksMobile.find((section) => section.title === "Contact Us")?.links.find((link) =>
    link.subTitle.startsWith("+91")
  )?.subTitle;
  const defaultPhoneNumber = FooterLinks.find((section) => section.title === "Contact Us")?.links.find((link) =>
    link.subTitle.startsWith("+91")
  )?.subTitle;

  const updatedFooterLinksMobile = FooterLinksMobile.map((section) => {
    if (section.title === "Contact Us") {
      return {
        ...section,
        links: section.links.map((link) =>
          link.subTitle.startsWith("+91") ? { ...link, subTitle: phoneNumber || defaultPhoneNumberMob, url: `tel:${phoneNumber || defaultPhoneNumberMob}` } : link
        ),
      };
    }
    return section;
  });

  const updatedFooterLinks = FooterLinks.map((section) => {
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

  return (
    <section className="bg-[#2F438F] text-white pt-8 flex-4 flex-row">
      <div>
        <div className="text-center">
          <Image
            className="hidden md:block mx-auto mb-4"
            src={NivaanWhiteLogo}
            alt="Nivaan Footer logo"
            width={151}
            height={31.79}
            unoptimized
          />
          <Image
            className="block md:hidden mx-auto mb-4"
            src={NivaanWhiteMobLogo}
            alt="Nivaan Footer mobile logo"
            width={78}
            height={19}
            unoptimized
          />
          <p className={`${rubikLight.className} text-xs w-3/4 mx-auto`}>
            {/* Pioneering Interventional Pain Management */}
            Interventional Pain and Regenerative Medicine
          </p>
        </div>

        <Separator className="my-6 block md:hidden" />

        <div className="mx-8 md:mx-14">
          <Separator className="my-6 hidden md:block" />
          {/* Desktop View */}
          <div className="hidden md:flex md:flex-row">
            <div className="flex-1 w-[80%]">
              <div className="hidden md:grid md:grid-cols-4 md:w-4/5 md:mx-auto">
                {updatedFooterLinks.map((obj, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start md:px-18 mb-4 px-5 gap-0"
                  >
                    <h6 className="text-sm leading-8 font-medium">{obj.title}</h6>
                    {/* <ul>
                      {obj.links.map((x) => (
                        <li
                          key={x.subTitle}
                          className={`text-xs leading-6 font-light ${
                            obj.title !== "Contact Us" ? "list-disc list-inside" : ""
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
                    </ul> */}
                    <ul>
                      {obj.links.map((x) => {
                        const isClinicLocations = obj.title === "Clinic locations";
                        return (
                          <li
                            key={x.subTitle}
                            className={`text-xs leading-6 font-light ${obj.title !== "Contact Us" ? "list-disc list-inside" : ""
                              }`}
                          >
                            {isClinicLocations ? (
                              <span
                                className="font-light cursor-default"
                              >
                                {x.subTitle}
                              </span>
                            ) : (
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
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-none w-[20%]">
              <SubscribeSection />
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col items-center md:hidden">
            <div className="grid grid-cols-2 gap-x-2 md:hidden">
              {updatedFooterLinksMobile.map((obj, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start md:px-18 mb-4 px-4"
                >
                  <h6 className="text-sm leading-8 font-medium">{obj.title}</h6>
                  {/* <ul>
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
                  </ul> */}
                  <ul>
                    {obj.links.map((x) => {
                      const isClinicLocations = obj.title === "Clinic locations";
                      return (
                        <li
                          key={x.subTitle}
                          className={`text-xs leading-6 font-light ${obj.title !== "Contact Us" ? "list-disc list-inside" : ""
                            }`}
                        >
                          {isClinicLocations ? (
                            <span
                              className="font-light cursor-default"
                            >
                              {x.subTitle}
                            </span>
                          ) : (
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
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <SubscribeSectionMob />
          </div>

          {!isNextPath && <SocialIcon />}
          <Separator className="mt-6 mb-3 hidden md:block" />
          <p className={`${rubikLight.className} hidden md:block text-[8px] leading-[14px] md:text-xs font-light pb-16 md:pb-10 text-center`}>
            © 2025 Nivaan. All Rights Reserved. Terms & Conditions Apply*
          </p>
        </div>

        <Separator className="mt-6 mb-3 block md:hidden" />
        <p className={`${rubikLight.className} block md:hidden text-[8px] leading-[14px] md:text-xs font-light pb-16 md:pb-10 text-center`}>
          © 2025 Nivaan. All Rights Reserved. Terms & Conditions Apply*
        </p>
      </div>
    </section>
  );
};

export default Footer2;
