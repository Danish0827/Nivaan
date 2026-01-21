import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LandingFooter = () => {
    return (
        <footer className="bg-[#D4F1FF] w-full pt-16 pb-6 overflow-hidden">
            <div className="relative">
                <Image
                    width={1000}
                    height={1000}
                    alt="water"
                    src="/images/watermark.webp"
                    className="absolute top-20 left-0 w-[800px] pointer-events-none"
                    unoptimized
                />
            </div>
            <div className="max-w-[1700px] mx-auto px-6 xl:px-10 2xl:px-10">

                <div className="col-span-2 md:col-span-1 flex justify-center mx-auto pb-10 lg:pb-0 lg:m-0">
                    <Link href="/"><Image src="/images/logo.svg" alt="Nivaan Logo" width={250} height={80} unoptimized /></Link>

                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 mt-12 border-t pt-4">
                    <span>© 2026 Nivaan. All Rights Reserved.</span>
                    <span>
                        Crafted by <span className="text-[#06A1DC] hover:text-[#06A1DC]/80 font-medium"><Link target="_blank" href="https://healthus.ai/">Healthus.ai</Link></span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default LandingFooter