import React from 'react'
import SearchInput from './SearchInput'
import Image from 'next/image'

function LandingSec() {
  return (
    <div className='tes-category pt-8'>
        <div className='container'>
            <SearchInput />
            <div className='tes-category-banner'>
                <Image src="/assets/images/main-hero.jpg" alt='category' layout='fill' />
            </div>
        </div>
    </div>
  )
}

export default LandingSec