const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND}/wp-json/site/v1`;

//header
export async function getHeader() {
  const res = await fetch(`${BASE_URL}/menus/primary_menu`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
export async function getFooter() {
  const res = await fetch(`${BASE_URL}/menus/footer_menu`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//home
export async function getHome() {
  const res = await fetch(`${BASE_URL}/home`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//doctors
export async function getFourDoctors() {
  const res = await fetch(`${BASE_URL}/doctors?page=1&per_page=4`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getDoctorsPage() {
  const res = await fetch(`${BASE_URL}/doctors-page`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getDoctors() {
  const res = await fetch(`${BASE_URL}/doctors?page=1&per_page=100`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getSingleDoctor(slug : string) {
  const res = await fetch(`${BASE_URL}/doctors/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//contact
export async function getContact() {
  const res = await fetch(`${BASE_URL}/contact-us`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//blog
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

export async function getSingleBlog(slug : string) {
  const res = await fetch(`${BASE_URL}/blogs/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//hub
export async function getHub(slug: string) {
  const res = await fetch(`${BASE_URL}/hub/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//location
export async function getLocation(slug: string) {
  const res = await fetch(`${BASE_URL}/locations/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getLocalTargeting(slug: string) {
  const res = await fetch(`${BASE_URL}/local-targeting/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getLocalOptimization(slug: string) {
  const res = await fetch(`${BASE_URL}/local-optimization/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//condition
export async function getCondition(hub: string) {
  const res = await fetch(`${BASE_URL}/conditions?condition_type=${hub}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getSingleCondition(slug: string) {
  const res = await fetch(`${BASE_URL}/conditions/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//treatment
export async function getTreatment(hub: string) {
  const res = await fetch(`${BASE_URL}/treatments?treatment_types=${hub}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getSingleTreatment(slug: string) {
  const res = await fetch(`${BASE_URL}/treatments/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

//landingpage
export async function getLandingPage(slug: string) {
  const res = await fetch(`${BASE_URL}/nivaan-landing-pages/${slug}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}