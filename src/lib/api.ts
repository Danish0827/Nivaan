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

export async function getTreatment() {
  const res = await fetch(`${BASE_URL}/treatments`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getContition(hub:string) {
  const res = await fetch(`${BASE_URL}/conditions?condition_type=${hub}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getTreatments(hub:string) {
  const res = await fetch(`${BASE_URL}/treatments?treatment_types=${hub}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getHeader() {
  const res = await fetch(`${BASE_URL}/menus/primary_menu`, {
    next: { revalidate: 60 },
  });
  return res.json();
}