import Image from "next/image";
import parse from "html-react-parser";
import he from "he";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import RequestCallbackModal from "@/components/RequestCallbackModal";
import { getSingleBlog } from "@/lib/api";

export default async function BlogDetailPage({ params }: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);  
  if (blog.error == "Blog not found") notFound();
  
  const decodedContent = parse(he.decode(blog.content));

  return (
    <section className="bg-[#F5FBFF]">
      <div className="px-4 lg:px-24 py-10 lg:grid lg:grid-cols-[1fr_360px] gap-10">
        <div className="pt-20">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blogs", href: "/blog" },
              { label: blog.title },
            ]}
          />
          <div>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={blog.featured_image?.url}
                alt={blog.featured_image?.alt || blog.title}
                width={1200}
                height={600}
                className="w-full object-cover"
                priority
                unoptimized 
              />
            </div>
            <div className="mt-6 pb-6 lg:pb-4 lg:px-10 text-center lg:flex items-center justify-between gap-10 rounded-full bg-[#0F4C92] p-4">
              <div className="text-white font-semibold mb-4 lg:mb-0">
                Find Relief for Your Pain Area
              </div>
              <div className="flex justify-center">
                <RequestCallbackModal buttonText='BOOK APPOINTMENT' id="BOOK APPOINTMENT" />
              </div>
            </div>
          </div>
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
          <h1 className="mt-4 text-3xl font-bold text-[#0F4C92] lg:text-4xl">
            {blog.title}
          </h1>
          <article id="article-content" className="blog-content-section prose prose-lg mt-6 max-w-none prose-h2:text-[#0F4C92] prose-h3:text-[#0F4C92] text-black">
            {decodedContent}
          </article>
        </div>
        <aside className="space-y-8">
          <div className="sticky top-28">
            <div className="rounded-3xl lg:rounded-[40px] bg-white p-3 shadow-sm">
              <h3 className="mb-2 px-3 pb-3 pt-1 border-b border-gray-200 text-lg font-semibold text-[#0F4C92]">
                Table of Contents
              </h3>
              <TableOfContents content={blog.content} />
            </div>
            <CallbackForm />
          </div>
        </aside>
      </div>
    </section>
  );
}
