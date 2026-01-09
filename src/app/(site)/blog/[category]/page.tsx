import { getBlogsByCategory, getBlogCategories } from "@/lib/api";
import BlogCategories from "@/components/BlogCategories";
import BlogGrid from "@/components/BlogGrid";
import BlogEmptyState from "@/components/BlogEmptyState";

export default async function CategoryBlogPage({ params }: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const blogs = await getBlogsByCategory(category);
  const categories = await getBlogCategories();
  const hasBlogs = blogs?.posts && blogs.posts.length > 0;

  return (
    <section className="px-4 lg:px-8 xl:px-12 2xl:px-20 pt-36 pb-20">
      <h1 className="mb-6 text-3xl font-bold capitalize text-blue-900">
        {category.replace("-", " ")}
      </h1>
      <BlogCategories categories={categories} />
      <div className="mt-10">
        {hasBlogs ? (
          <BlogGrid posts={blogs.posts} />
        ) : (
          <BlogEmptyState
            title="No Blogs in This Category"
            description="We are working on adding blogs for this category. Meanwhile, explore other categories."
          />
        )}
      </div>
    </section>
  );
}
