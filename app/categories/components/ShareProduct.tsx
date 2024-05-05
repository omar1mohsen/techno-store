import { Product } from '@/app/Types/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ShareProduct({product}:{product: Product}) {
    const product_features = [
        {content : "ضمان سنة واحدة",image : "/assets/icons/Medal.svg"},
        {content : "شحن مجاني & سريع",image : "/assets/icons/Truck.svg"},
        {content : "تقدر ترجع منتجك بسهولة",image : "/assets/icons/Handshake.svg"},
        {content : "دعم فني متواصل 24/7",image : "/assets/icons/Headphones.svg"},
        {content : "يدعم الدفع بطرق كثيرة",image : "/assets/icons/CreditCard.svg"},
      ]
  return (
    <div className="tes-left-side max-lg:!w-full">
    <div className='tes-product-img'>
        <Image src={product.image} alt={product.title} layout='fill' />
    </div>
    <div className='tes-scoial-wrap tes-share-social'>
        <span>مشاركة المنتج :</span>
        <Link href="#" className='bg-[#1DA1F2]'><Image src="/assets/icons/Twitter.svg" width={10} height={10} alt="" /></Link>
        <Link href="#" className='bg-[#1877F2]'><Image src="/assets/icons/Facebook.svg" width={10} height={10} alt="" /></Link>
        <Link href="#" className='bg-[#E60023]'><Image src="/assets/icons/Pinterest.svg" width={10} height={10} alt="" /></Link>
        <Link href="#" className='bg-[#ff0000]'><Image src="/assets/icons/Youtube.svg" width={10} height={10} alt="" /></Link>
        <Link href="#" className='bg-[#c13584]'><Image src="/assets/icons/Instagram.svg" width={10} height={10} alt="" /></Link>
        <Link href="#" ><Image src="/assets/icons/Copy.svg" width={20} height={20} alt="" /></Link>
    </div>
    <ul className="tes-saller-features">
        {product_features.map((feature,index)=>(
            <li key={`sell_${index}`}><Image src={feature.image} alt={feature.content} width={24} height={24}/>{feature.content}</li>
        ))}
    </ul>
  </div>
  )
}

export default ShareProduct