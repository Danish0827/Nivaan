import Image from "next/image";
import parse from "html-react-parser";
import he from "he";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import CallbackForm from "@/components/CallbackForm";

async function getBlog(slug: string) {
  const res = await fetch(
    `https://hclient.in/nivaan/wp-json/site/v1/blogs/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);
  if (!blog) return notFound();

  const decodedContent = parse(he.decode(blog.content));

  return (
    <section className="bg-[#F5FBFF]">
      <div className="px-4 lg:px-24 py-10 lg:grid lg:grid-cols-[1fr_360px] gap-10">

        {/* LEFT CONTENT */}
        <div>
          {/* HERO IMAGE (STICKY) */}
          <div className="pt-20">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={blog.featured_image?.url}
                alt={blog.featured_image?.alt || blog.title}
                width={1200}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* CTA */}
            <div className="mt-6 flex items-center justify-center gap-10 rounded-full bg-[#0F4C92] p-4">
              <span className="text-white font-semibold">
                Find Relief for Your Pain Area
              </span>
              <button className="rounded-full bg-[#FF6A39] px-6 py-2 text-white text-sm font-semibold">
                BOOK APPOINTMENT
              </button>
            </div>
          </div>

          {/* META */}
          <div className="mt-10 flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">
              {blog.categories?.[0]?.name}
            </span>
            <span>
              {new Date(blog.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-3xl font-bold text-[#0F4C92] lg:text-4xl">
            {blog.title}
          </h1>

          {/* CONTENT */}
          <article id="article-content" className="blog-content-section prose prose-lg mt-6 max-w-none prose-h2:text-[#0F4C92] prose-h3:text-[#0F4C92] text-black">
            {decodedContent}
          </article>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">
          {/* TABLE OF CONTENTS */}
          <div className="sticky top-28">
            <div className="rounded-3xl lg:rounded-[40px] bg-white p-3 shadow-sm">
              <h3 className="mb-2 px-3 pb-3 pt-1 border-b border-gray-200 text-lg font-semibold text-[#0F4C92]">
                Table of Contents
              </h3>
              <TableOfContents content={blog.content} />
            </div>

            {/* CALLBACK FORM */}
            <CallbackForm />
          </div>
        </aside>
      </div>
    </section>
  );
}
