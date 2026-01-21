"use client";
import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  useEffect(() => {
    sendGTMEvent({ event: "page_view" });
  }, [pathName]);

  return <div>{children}</div>;
}
