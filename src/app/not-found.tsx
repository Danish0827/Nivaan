import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
    <><Link href="/" ><Image src="/images/404.webp" width={2000} height={2000} alt='404' className='max-w-3xl mx-auto py-24 px-4'/></Link></>
  )
}

export default notfound