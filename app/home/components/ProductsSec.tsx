import fetchData from '@/app/helpers/fetchData';
import ProductCard from '@/app/shared-components/ProductCard';
import Image from 'next/image';
import React from 'react'

interface Section {
    title: string,
    className? :string;
}

async function ProductsSec({title,className}:Section) {
    const offers = await  fetchData(`${process.env.NEXT_PUBLIC_ALL_PRODUCTS_URL}`) || []

  return (
    <div className={`tes-home-features tes-section ${className? className :""}`}>
        <div className='container flex'>
            <div className="tes-left-side" data-aos="fade-left">
                <h2 className='tes-sec-title mb-4' dangerouslySetInnerHTML={{__html:title}}></h2>
                    <div className="tes-products-list">
                    {offers.slice(0,8)?.map((product:any)=>{
                        return <ProductCard product={product} key={`offer_${product.id}`} />
                    }
                    )}
                </div>
            </div>
            <div className="tes-right-side tes-banner-wrap" data-aos="fade-right">
                <Image src="/assets/images/feature-banner.png" alt='featured-image' layout='fill'/>
            </div>
        </div>
    </div>
  )
}

export default ProductsSec