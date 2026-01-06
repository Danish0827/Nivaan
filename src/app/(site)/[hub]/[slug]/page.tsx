import { notFound } from 'next/navigation';
import React from 'react';

const DynamicLocationPage = async ({ params }: any) => {
  const slug = params.hub;

  let data: any = null;
  let type: 'targeting' | 'optimization' | null = null;

  // First try hub API
  try {
    const tarRes = await fetch(`https://hclient.in/nivaan//wp-json/site/v1/local-targeting/${slug}`, {
      next: { revalidate: 60 },
    });
      console.log(tarRes,"data");

    if (tarRes.ok) {
      data = await tarRes.json();
    //   console.log(data,"data");
      
      type = 'targeting';
    }
  } catch (err) {
    console.error("Hub API failed", err);
  }

  // If hub not found, try location API
  if (!data) {
    try {
      const optRes = await fetch(`https://hclient.in/nivaan//wp-json/site/v1/local-optimization/${slug}`, {
        next: { revalidate: 60 },
      });

      if (optRes.ok) {
        data = await optRes.json();
        type = 'optimization';
      }
    } catch (err) {
      console.error("Location API failed", err);
    }
  }

  if (!data || !type) {
    notFound();
  }

  const acf = data?.acf;

  return (
    <>
      {type === 'targeting' && (
        <>
         fdsf
        </>
      )}

      {type === 'optimization' && (
        <>
        dasfdsadsa
        f
        </>
      )}
    </>
  );
};

export default DynamicLocationPage;
