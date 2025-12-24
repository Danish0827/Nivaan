const BASE_URL = "https://hclient.in/nivaan/wp-json/site/v1";

export async function getBlogs(page = 1) {
  const res = await fetch(`${BASE_URL}/blogs?page=${page}&per_page=50`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getBlogsByCategory(slug: string, page = 1) {
  const res = await fetch(
    `${BASE_URL}/blogs/categories/${slug}?page=${page}&per_page=50`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

export async function getBlogCategories() {
  const res = await fetch(`${BASE_URL}/blogs/categories`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
