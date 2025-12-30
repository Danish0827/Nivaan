import { DoctorHeroSection } from '@/components/DoctorHeroSection'
import Doctorsdata from '@/components/Doctorsdata';
import React from 'react'

const doctor = async () => {
    const res = await fetch(
    `https://hclient.in/nivaan/wp-json/site/v1/doctors-page`,
    {
      next: { revalidate: 60 }, // IMPORTANT
    }
  );

  if (!res.ok) {
    console.error("API failed", res.status);
    return null;
  }

  let data;
  try {
    data = await res.json();
  } catch (err) {
    console.error("JSON parse failed");
    return null;
  }


  const res1 = await fetch(
    `https://hclient.in/nivaan/wp-json/site/v1/doctors?page=1&per_page=20`,
    {
      next: { revalidate: 60 }, // IMPORTANT
    }
  );

  if (!res1.ok) {
    console.error("API failed", res.status);
    return null;
  }

  let data1;
  try {
    data1 = await res1.json();
  } catch (err) {
    console.error("JSON parse failed");
    return null;
  }
  return (
    <>
    <DoctorHeroSection
     title={data?.acf?.doctors_page_title}
        description={data?.acf?.doctors_details}
        seo={data?.seo}
        // secondaryBtn={data?.button_two}
        image={data?.acf?.video_file?.url}
    />
    <Doctorsdata experts={data1?.data}/>
    </>
  )
}

export default doctor