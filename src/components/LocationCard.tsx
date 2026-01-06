"use client"
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

export default function LocationCard({ post, url }: any) {
    return (
        // /${post.condition_type[0].slug}
        <Link
            href={`/slug/${url}/${post.slug}`}
            className="group  overflow-hidden"
        >
            <div className="relative h-[230px] lg:h-[180px] xl:h-[230px] w-full rounded-3xl overflow-hidden group">
                {/* Image */}
                <Image
                    src={post.featured_image?.url}
                    alt={post.featured_image?.alt || post.title}
                    fill
                    className="object-cover rounded-3xl shadow-sm transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {post.condition_type?.[0]?.title && (
                    <span className="absolute right-3 top-3 z-10 inline-block text-xs px-3 py-1 rounded-full bg-white/90 text-blue-800 font-medium backdrop-blur">
                        {post.condition_type[0].title}
                    </span>
                )}
            </div>


            <div className="p-5">
                <h3 className="text-lg font-semibold text-[#0852A0] group-hover:underline line-clamp-2">
                    {he.decode(post.title)}
                </h3>
            </div>
        </Link>
    );
}
