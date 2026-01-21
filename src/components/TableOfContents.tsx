"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
};

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useLayoutEffect(() => {
    if (!content) return;

    // 1️⃣ Parse HTML string to extract H2s
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    const h2FromContent = Array.from(tempDiv.querySelectorAll("h2"));

    const items: Heading[] = h2FromContent.map((el) => {
      const text = el.textContent || "";
      const id = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      return { id, text };
    });

    setHeadings(items);

    // 2️⃣ Wait for real article DOM to exist
    requestAnimationFrame(() => {
      const article = document.getElementById("article-content");
      if (!article) return;

      const realH2s = Array.from(article.querySelectorAll("h2"));

      realH2s.forEach((el, index) => {
        if (items[index] && !el.id) {
          el.id = items[index].id;
        }
      });
    });
  }, [content]);

  if (!headings.length) return null;

  return (
    <ul className="space-y-2 pt-2 text-sm">
      {headings.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => {
              const target = document.getElementById(item.id);
              if (!target) return;

              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="flex w-full items-center justify-between rounded-full px-5 cursor-pointer py-3 text-left text-[#0F4C92] hover:bg-[#06A1DC21]"
          >
            <span className="line-clamp-1 pr-6 text-black">{item.text}</span>
            <Image
              className="group-hover:-rotate-45 w-8 h-8 duration-700 rounded-full p-2"
              src="/images/leftarrow.svg"
              width={20}
              height={20}
              alt="arrow"
              unoptimized
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
