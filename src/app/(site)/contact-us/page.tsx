import ContactSection from '@/components/ContactSection'
import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import { getContact } from '@/lib/api'
import React from 'react'

const contactpage = async () => {
  const data = await getContact()
  return (
    <>
      <PageBreadcrumb title={"Contact Nivaan"} description={data.acf} />
      <ContactSection data={data} />
    </>
  )
}

export default contactpage