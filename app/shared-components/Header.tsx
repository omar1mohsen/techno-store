import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeaderBtns from './HeaderBtns'

function Header() {
  return (
    <header className='tes-header' >
        <div className='container flex justify-between items-center'>
            <Link href="/" className='tes-logo'>
                 <Image src="/assets/icons/logo.svg" alt='logo' width={50} height={50}/>
                <h1>TechnoStore</h1>
            </Link>
            <form className="mx-auto relative flex-1 max-w-[650px] max-xl:max-w-[450px] max-lg:max-w-[350px] max-md:hidden">   
                <div className="absolute inset-y-0 left-1 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-[#191C1F]  cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                </div>
                <input type="search" id="default-search" className=" w-full p-4 rounded-[2px] ps-10 text-sm text-[#77878F] border border-[#eeeeee73]" placeholder="بحث" required />
            </form>
            <HeaderBtns />
        </div>
    </header>
  )
}

export default Header