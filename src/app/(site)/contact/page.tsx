import ContactSection from '@/components/ContactSection'
import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import { getContact } from '@/lib/api'

export async function generateMetadata() {
  const data = await getContact()
  return {
    title: data?.seo?.title || "",
    description:
      data?.seo?.meta_desc ||
      "",
    alternates: {
      canonical: `https://www.nivaancare.com/${data.slug}`, 
    },
  }
}

const ContactPage = async () => {
  const data = await getContact()
  return (
    <>
      <PageBreadcrumb title="Contact Nivaan" description={data.acf} />
      <ContactSection data={data} />
    </>
  )
}

export default ContactPage
