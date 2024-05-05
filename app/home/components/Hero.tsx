import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <section  className='tes-hero'>
        <div className='container'>
            <div className="tes-hero-wrap">
                <div className='tes-left-side' >
                 <Link href="#"><Image src="/assets/images/main-hero.jpg" width={500} height={500} alt="" /></Link>
                </div>
                <div className='tes-right-side'>
                    <Link href="#" ><Image src="/assets/images/upper-hero.jpg" width={500} height={500} alt="" /></Link>
                    <Link href="#"><Image src="/assets/images/lower-hero.jpg" width={500} height={500} alt="" /></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero