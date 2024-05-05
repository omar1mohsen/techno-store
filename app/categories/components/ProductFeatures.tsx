import Image from 'next/image'
import React from 'react'

function ProductFeatures() {
    const product_features = [
        {content : "عملية تحويل آمنة",image : "/assets/icons/privacy.svg"},
        {content : "الدفع عند الاستلام",image : "/assets/icons/delivery.svg"},
        {content : "المنتج كما في الوصف",image : "/assets/icons/product.svg"},
      ]
  return (
    <div className="tes-prod-features">
    {product_features.map((feature,index)=>{
      return(
        <div className='tes-prod-feature' key={`feature_${index}`}>
          <div className='tes-feature-img'>
              <Image src={feature.image} alt={feature.content} width={32} height={32} /> 
          </div>
          <span>{feature.content}</span>
        </div>
    )})}
  </div>
  )
}

export default ProductFeatures