import DoctorProfile from "@/components/DoctorProfile";

async function getDoctor(slug: string) {
  const res = await fetch(
    `https://hclient.in/nivaan/wp-json/site/v1/doctors/${slug}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getDoctor(slug);

  return <DoctorProfile data={data} />;
}
