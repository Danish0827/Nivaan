import { LOCATION_MENU } from '@/data/footer'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center bg-white jen-404">
            <div className="page-inner ">
                <div className='py-20'>
                    <Link href="/">
                        <img
                            src="/images/thanks.svg"
                            alt="Logo"
                            className="w-32 mx-auto mb-10"
                        />
                    </Link>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#0852A0] mb-10 text-center">
                        Thank You!
                    </h1>

                    <div className="py-5 text-black text-center font-mono space-y-5">
                        <p>
                            Our Specialist will contact you shortly. <b> Telecom Providers sometimes label us as Spam, so please don't let that stop you from answering.</b>
                        </p>
                        <p>In case of any queries, please contact <b> +91-7358712483</b> or visit your nearest Nivaan clinic</p>
                    </div>
                    <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} className='p-1 bg-white rounded-4xl mt-8 w-full max-w-6xl mx-auto'>
                        <div className='bg-white text-center rounded-[30px]   p-6  border-[#06A1DC] border'>
                            <span className='text-[#06A1DC] uppercase text-sm font-medium'>Visit Us</span>
                            <h2 className='text-[#284599] font-bold text-2xl capitalize my-3'>We have clinics across</h2>
                            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 text-left gap-x-10 gap-y-4 my-10 text-base">
                                {LOCATION_MENU.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.url || "#"}
                                        className="hover:text-[#06A1DC] text-lg capitalize text-black bg-white px-6 transition flex font-normal items-center gap-1"
                                    >
                                        <MapPin className="text-[#06A1DC]" size={16} />
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page