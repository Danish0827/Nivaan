import Image from "next/image";
import Link from "next/link";
import he from "he";

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ post }: any) {
  return (
    <Link
      href={`/blog/${post.categories[0].slug}/${post.slug}`}
      className="group  overflow-hidden"
    >
      <div className="relative h-[230px] lg:h-[180px] xl:h-[230px] w-full rounded-3xl overflow-hidden">
        <Image
          src={post.featured_image?.url}
          alt={post.featured_image?.alt || post.title}
          fill
          unoptimized 
          className="object-cover rounded-3xl  shadow-sm hover:shadow-md transition group-hover:scale-110 duration-500"
        />
      </div>

      <div className="p-5">
        <div className="pb-3 flex justify-between">
        <span className="inline-block mb-2 text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-800">
          {he.decode(post.categories?.[0]?.name)}
        </span>
        <span className="text-sm text-gray-500">
          {formatDate(post.date)}
        </span>

        </div>

        <h3 className="text-lg font-semibold text-[#0852A0] group-hover:underline line-clamp-2">
          {he.decode(post.title)}
        </h3>
      </div>
    </Link>
  );
}
