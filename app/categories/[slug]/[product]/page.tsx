import Breadcrumb from '@/app/shared-components/BreadCrumb'
import React, { Suspense, useEffect } from 'react'
import { categories } from '../../categories'; 
import fetchData from '@/app/helpers/fetchData';
import ProductPage from '../../components/ProductPage';
import RelatedProducts from '../../components/RelatedProducts';
import '../../style.css';

async function page({params}:{params:{slug:any ,product:String}}) {
  const product = await fetchData(`${process.env.NEXT_PUBLIC_ALL_PRODUCTS_URL}/${params.product}`),
  crumbs = [
      { title: 'الصفحة الرئيسية', path: '/' },
      { title: 'تسوق الآن', path: '/' },
      { title: categories[params.slug]?.name,path: `/categories/${params.slug}`},
      {title : product?.title}
  ];  
  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <ProductPage product={product} />
      <RelatedProducts category={product.category} />
    </>
  )
}

export default page