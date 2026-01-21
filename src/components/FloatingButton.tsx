"use client";
import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Form from "@/components/Form";
import Form2 from "./Form2";
import { X, CalendarDays, Phone } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

interface FormAdProps {
  isForm2?: boolean;
  formLocation?: string;
  scrollOffset?: number;
}

const FloatingButton: React.FC<FormAdProps> = ({ isForm2, formLocation, scrollOffset = 1200 }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showButton, setShowButton] = useState(false); // 👈 controls visibility
  const pathName = usePathname();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;

  const isDrVideo =
    pathName === "/v1/dr-video-women-new" ||
    pathName === "/v1/dr-video-men-new" ||
    pathName === "/next/osteoarthritis-treatment" ||
    pathName === "/next/radio-frequency-ablation-new";
  const isNextPath =
    pathName.includes("/next/") && pathName !== "/next/pain-medication";
  const isNerveBlock = pathName === "/next/nerve-block-new";
  const isSciaticaPain = pathName === "/next/sciatica-pain-new";

  const formLocationMapping: { [key: string]: string } = {
    isSciaticaPain: "Sciatica-Floating-Button-Form",
    isNerveBlock: "NerveBlock-Floating-Button-Form",
    isDrVideo: "DrVideo-Floating-Button-Form",
  };

  const getFormLocation = (): string => {
    switch (true) {
      case isSciaticaPain:
        return formLocationMapping["isSciaticaPain"];
      case isNerveBlock:
        return formLocationMapping["isNerveBlock"];
      case isDrVideo:
        return formLocationMapping["isDrVideo"];
      default:
        return "Floating-Button-Form";
    }
  };

  const renderForm = () => {
    if (isDrVideo || isNerveBlock || isSciaticaPain || isForm2) {
      return (
        <Form2
          formLocation={getFormLocation()}
          formName="Floating-Button-Form"
        />
      );
    }
    return (
      <Form
        formLocation={formLocation || "Floating-Button-Form"}
        formName="Floating-Button-Form"
      />
    );
  };

  // 👇 Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY,isDrawerOpen)
      if(isDrawerOpen){
        setShowButton(true);
      }
      else if (window.scrollY > scrollOffset) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollOffset,isDrawerOpen]);

  return (
    <>
      
        <div className="flex md:hidden justify-center relative z-[9999]">
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            {/* Floating bottom bar */}
            {showButton && (
            <div
              className="fixed bottom-0 w-full bg-[#2f438f] flex justify-between items-center px-3 py-3 rounded-t-[20px] gap-3 transition-all duration-300"
              style={{ zIndex: 9999 }}
            >
              {/* Book Now Button (opens Drawer) */}
              <DrawerTrigger asChild>
                <button
                  onClick={() =>
                    sendGTMEvent({
                      event: "Form Open",
                      value: {
                        "Form Name": "Floating-Button-Form",
                        "CTA Button text": "Book Now",
                        "Landing Page URL": landingPageUrl,
                      },
                    })
                  }
                  className="flex items-center justify-center gap-2 bg-white text-[#2f438f] font-bold text-base rounded-xl py-3 w-1/2"
                >
                  <CalendarDays className="w-5 h-5" />
                  Book Now
                </button>
              </DrawerTrigger>

              {/* Call Now Button (just calls, does NOT open Drawer) */}
              <a
                href="tel:+916366525217"
                onClick={() =>
                  sendGTMEvent({
                    event: "Call Now Click",
                    value: {
                      "CTA Button text": "Call Now",
                      "Landing Page URL": landingPageUrl,
                    },
                  })
                }
                className="flex items-center justify-center gap-2 bg-white text-[#2f438f] font-bold text-base rounded-xl py-3 w-1/2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            )}
            {/* Drawer Content (for form) */}
            <DrawerContent className="rounded-3xl z-50">
              <DrawerClose className="flex justify-end items-center px-4 mb-2">
                <X
                  onClick={() =>
                    sendGTMEvent({
                      event: "Form Close",
                      value: {
                        "Form Name": "Floating-Button-Form",
                        "Landing Page URL": landingPageUrl,
                      },
                    })
                  }
                />
              </DrawerClose>
              <div className="z-40 min-h-[310px]">{renderForm()}</div>
            </DrawerContent>
          </Drawer>
        </div>
      
    </>
  );
};

export default FloatingButton;
