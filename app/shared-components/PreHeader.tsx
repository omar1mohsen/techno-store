import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function PreHeader() {
  return (
    <div className='tes-pre-header' >
        <div className='container flex justify-between items-center'>
            <div className="tes-number">
                <Image src="/assets/icons/PhoneCall.svg" alt='phone logo' width={20} height={20}/>
                <span>+1-23456789012</span>
            </div>
            <div className='tes-lang-wrap'>
                <span className="tes-lang"><IoIosArrowDown width={16} height={12} color='#eeeeee73'/>اللغة العربية </span>
                <div className='tes-scoial-wrap'>
                    <Link href="#"><Image src="/assets/icons/Twitter.svg" width={16} height={16} alt="" /></Link>
                    <Link href="#"><Image src="/assets/icons/Facebook.svg" width={16} height={16} alt="" /></Link>
                    <Link href="#"><Image src="/assets/icons/Pinterest.svg" width={16} height={16} alt="" /></Link>
                    <Link href="#"><Image src="/assets/icons/Youtube.svg" width={16} height={16} alt="" /></Link>
                    <Link href="#"><Image src="/assets/icons/Instagram.svg" width={16} height={16} alt="" /></Link>
                    <span>:Follow Us </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PreHeader