import Breadcrumb from '@/app/shared-components/BreadCrumb';
import Footer from '@/app/shared-components/Footer';
import LandingSec from '../components/LandingSec';
import ProductsList from '../components/ProductsList';
import { Suspense } from 'react';
import Loader from '@/app/shared-components/Loader';
import { categories } from '../categories';
import '../style.css';



function ProductsByCategory({params}:{params:{slug:string}}) {

 const slug = params.slug,
      crumbs = [
        { title: 'الصفحة الرئيسية', path: '/' },
        { title: 'تسوق الآن', path: '/' },
        { title: categories[slug]?.name },
      ];
      
  return (
   <>
      <Breadcrumb crumbs={crumbs} />
      <LandingSec />
      <ProductsList category={slug} />
   </>
  )
}

export default ProductsByCategory