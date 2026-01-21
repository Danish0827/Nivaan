import DoctorProfile from "@/components/DoctorProfile";
import { getSingleDoctor } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function DoctorPage({ params }: any) {
  const paramsSlug = await params
  const slug = paramsSlug.slug
  const data = await getSingleDoctor(slug)
  // if (data.status === 404) notFound();
  if (data.error == "Doctor not found") notFound();

  return <DoctorProfile data={data} />
}
