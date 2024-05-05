import Image from 'next/image'
import React from 'react'

function HomeFooter() {
  return (
    <div className='tes-home-footer tes-section' data-aos="fade-up">
        <div className='container h-[460px]'>
            <Image className='rounded-[4px]' src="/assets/images/banner-e-commerce.png" alt='tecone Store' fill/>
        </div>
    </div>
  )
}

export default HomeFooter