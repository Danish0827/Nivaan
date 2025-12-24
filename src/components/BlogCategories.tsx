"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import he from "he";

interface Category {
    id: number;
    name: string;
    slug: string;
}

export default function BlogCategories({
    categories,
}: {
    categories: Category[];
}) {
    const pathname = usePathname();
    const activeSlug = pathname.split("/")[2] || "all";

    return (
        <div className="flex gap-3 overflow-x-auto py-2 no-scrollbar scrollbar-hide">
            <Link
                href="/blog"
                className={clsx(
                    "px-5 py-2 rounded-full border text-sm whitespace-nowrap transition",
                    activeSlug === "all"
                        ? "bg-blue-900 text-white border-blue-900"
                        : "border-blue-200 text-blue-900 hover:bg-blue-50"
                )}
            >
                All
            </Link>
            {categories.map((cat) => (
                <Link
                    key={cat.id}
                    href={`/blog/${cat.slug}`}
                    className={clsx(
                        "px-5 py-2 rounded-full border text-sm whitespace-nowrap transition",
                        activeSlug === cat.slug
                            ? "bg-blue-900 text-white border-blue-900"
                            : "border-blue-200 text-blue-900 hover:bg-blue-50"
                    )}
                >
                    {he.decode(cat.name)}
                </Link>
            ))}
        </div>
    );
}
