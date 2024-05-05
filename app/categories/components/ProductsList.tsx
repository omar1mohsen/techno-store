import fetchData from '@/app/helpers/fetchData'
import ProductCard from '@/app/shared-components/ProductCard'
import React from 'react'

async function ProductsList({category}:{category:string}) {
  const url = category === "all" ? process.env.NEXT_PUBLIC_ALL_PRODUCTS_URL : process.env.NEXT_PUBLIC_CATEGORY_URL+category;
  const products = await  fetchData(`${url}`)
  return (
    <div className='container pb-10'>
        <div className="tes-products-list">
            {products.map((product:any)=>{
              return <ProductCard product={product} key={`product_${product.id}`} />
            }
          )}
        </div>
      </div>
  )
}

export default ProductsList