import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm px-3 w-fit py-1">
      <ol className="flex flex-wrap items-center gap-1 text-gray-500 ">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {!isLast ? (
                <>
                  <Link
                    href={item.href || "#"}
                    className="text-[#FF6A39] hover:underline"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-1">/</span>
                </>
              ) : (
                <span className="text-gray-700 font-normal line-clamp-1">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
