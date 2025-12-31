import ContactSection from '@/components/ContactSection'
import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import React from 'react'

const aboutpage = async () => {
    const res = await fetch(
    `https://hclient.in/nivaan/wp-json/site/v1/contact-us`,
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

    return (
        <>
            <PageBreadcrumb title={"Contact Nivaan"} description={data.acf} />
            <ContactSection data={data} />
        </>
    )
}

export default aboutpage