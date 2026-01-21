import Image from "next/image";
import Link from "next/link";

export default function BlogEmptyState({
  title = "No Blogs Found",
  description = "We couldn’t find any blogs in this category right now. Please check back later or explore other categories.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="relative w-56 h-56 mb-8">
        <Image
          src="/images/empty.png"
          alt="No blogs"
          fill
          className="object-contain"
          unoptimized 
        />
      </div>

      <h2 className="text-2xl font-semibold text-blue-900 mb-3">
        {title}
      </h2>

      <p className="max-w-md text-gray-600 mb-6">
        {description}
      </p>

      <Link
        href="/blog"
        className="px-6 py-3 rounded-full bg-blue-900 text-white text-sm font-medium hover:bg-blue-800 transition"
      >
        View All Blogs
      </Link>
    </div>
  );
}
