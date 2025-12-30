import DoctorProfile from "@/components/DoctorProfile";

export default async function DoctorPage({  params}: any) {
  const slug = params.slug

  if (!slug) return <p>Doctor slug missing</p>;

  const res = await fetch(
    `https://hclient.in/nivaan/wp-json/site/v1/doctors/${slug}`,
    {
      cache: "no-store",
      headers: {
       Accept: "*/*",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    } 
  );
  

  if (!res.ok) {
    console.error("Doctor API failed:", res.status);
    return <p>Doctor not found</p>;
  }

  const contentType = res.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    const text = await res.text();
    console.error("Doctor API returned HTML instead of JSON:", text);
    return <p>Invalid API response</p>;
  }

  const data = await res.json();

  return <DoctorProfile data={data} />;
}
