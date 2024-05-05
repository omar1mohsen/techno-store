import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Banners() {
  return (
    <div className='tes-banners-sec tes-section'>
        <div className='container flex gap-[--tes-gap] flex-wrap'>
            <Link href="/category/electronics" className="tes-left-side tes-banner" data-aos="fade-left">
                <Image src="/assets/images/home-banner-1.png" alt='home Banner' fill/>
            </Link>
            <Link href="/category/electronics" className="tes-right-side tes-banner" data-aos="fade-right">
                <Image src="/assets/images/home-banner-2.png" alt='home Banner' fill/>
            </Link>
        </div>
    </div>
  )
}

export default Banners