import Image from "next/image";
import Link from "next/link";
import he from "he";

export const slugToTitle = (slug?: string) => {
    if (!slug) return "";

    return slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

export default function LocationCard({ post, url, cat }: any) {
    const title = slugToTitle(cat);
    return (
        <Link
            href={`/${cat}${url ? `/${url}` : ""}/${post.slug}`}
            className="group  overflow-hidden"
        >
            <div className="relative h-[230px] lg:h-[180px] xl:h-[230px] w-full rounded-3xl overflow-hidden group">
                {post.featured_image?.url &&
                    <Image
                        src={post.featured_image?.url}
                        alt={post.featured_image?.alt || post.title}
                        fill
                        className="object-cover rounded-3xl shadow-sm transition duration-500 group-hover:scale-110"
                        unoptimized
                    />}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                {title && (
                    <span className="absolute right-3 top-3 z-10 inline-block text-xs px-3 py-1 rounded-full bg-white/90 text-blue-800 font-medium backdrop-blur">
                        {title}
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
