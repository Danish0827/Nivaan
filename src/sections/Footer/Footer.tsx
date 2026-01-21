import Image from "next/image";
import React from "react";
import NivaanWhiteLogo from "../../../public/desktop/nivaan-white-logo.webp";
import NivaanWhiteMobLogo from "../../../public/mobile/nivaan-white-logo-mob.webp";
import social1 from "../../../public/social1@2x.webp";
import social2 from "../../../public/social2@2x.webp";
import social3 from "../../../public/social3@2x.webp";
import { FooterLinkSection } from "@/app/api/allTypes";

const Footer = ({ phoneNumber, FooterLinks, FooterLinksMobile }: { phoneNumber?: string, FooterLinksMobile?: FooterLinkSection[], FooterLinks?: FooterLinkSection[] }) => {
  const defaultPhoneNumberMob = FooterLinksMobile?.find((section) => section.title === "Contact Us")?.links.find((link) =>
    link.subTitle.startsWith("+91")
  )?.subTitle;
  const defaultPhoneNumber = FooterLinks?.find((section) => section.title === "Contact Us")?.links.find((link) =>
    link.subTitle.startsWith("+91")
  )?.subTitle;

  const updatedFooterLinksMobile = FooterLinksMobile?.map((section) => {
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

  const updatedFooterLinks = FooterLinks?.map((section) => {
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
    <section className="bg-[#2F438F] text-white pt-9">
      <div className="flex flex-col">
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
          <p className="text-xs w-3/4 mx-auto">
          {/* Pioneering Interventional Pain Management */}
          Interventional Pain and Regenerative Medicine
          </p>
        </div>
        <div className="border-y-[0.5px] w-full md:w-[90%] md:mx-auto mt-5 flex justify-center">
          <div className="w-[80%] md:w-full py-4">
            {/* <Separator className="my-6" /> */}
            <div className="hidden md:grid md:grid-cols-4">
              {updatedFooterLinks?.map((obj, i) => (
                <div key={i} className="flex justify-center">
                  <div
                    className="flex flex-col items-start w-[50%] md:px-18 mb-4 px-5 gap-2"
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
                      {obj.links.map((x) => (
                        <li
                          key={x.subTitle}
                          className={`text-xs leading-6 font-light ${obj.title !== "Contact Us" ? "list-disc list-inside" : ""
                            }`}
                        >
                          {obj.title === "Clinic locations" ? (
                            <span
                              className={
                                x.subTitle === "care@nivaancare.com" ||
                                  x.subTitle === "Privacy Policy" ||
                                  x.subTitle === "Terms of Use"
                                  ? "underline"
                                  : x.subTitle?.startsWith("+91") ?? false
                                    ? "font-bold"
                                    : ""
                              }
                            >
                              {x.subTitle}
                            </span>
                          ) : (
                            <a
                              href={x.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={
                                x.subTitle === "care@nivaancare.com" ||
                                  x.subTitle === "Privacy Policy" ||
                                  x.subTitle === "Terms of Use"
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
                      ))}
                    </ul>
                  </div>
                </div>

              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-4 md:hidden">
              {updatedFooterLinksMobile?.map((obj, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start md:px-18 mb-4 px-4 gap-2"
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
                    {obj.links.map((x) => (
                      <li
                        key={x.subTitle}
                        className={`text-xs leading-6 font-light ${obj.title !== "Contact Us" ? "list-disc list-inside" : ""
                          }`}
                      >
                        {obj.title === "Clinic locations" ? (
                          <span
                            className={
                              x.subTitle === "care@nivaancare.com" ||
                                x.subTitle === "Privacy Policy" ||
                                x.subTitle === "Terms of Use"
                                ? "underline"
                                : x.subTitle?.startsWith("+91") ?? false
                                  ? "font-bold"
                                  : ""
                            }
                          >
                            {x.subTitle}
                          </span>
                        ) : (
                          <a
                            href={x.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                              x.subTitle === "care@nivaancare.com" ||
                                x.subTitle === "Privacy Policy" ||
                                x.subTitle === "Terms of Use"
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
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-end mt-2 mx-36">
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
            {/* <Separator className="mt-6 mb-3" /> */}

          </div>
        </div>
        <p className="text-[10px] leading-[14px] md:text-xs font-light py-4 text-center">
          © 2025 Nivaan. All Rights Reserved. Terms & Conditions Apply*
        </p>

      </div>
    </section>
  );
};

export default Footer;