"use client";

import { useEffect, useState } from "react";
import { LuArrowUpFromDot } from "react-icons/lu";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-16 right-3 lg:right-auto lg:bottom-6 lg:left-6 z-50 rounded-full bg-[#284599] cursor-pointer p-3 xl:p-4 text-white shadow-lg hover:bg-[#284599]/80 transition"
      aria-label="Scroll to top"
    >
      <LuArrowUpFromDot className="font-bold text-2xl relative top-1 animate-bounce"/>
    </button>
  );
}
