import fetchData from "@/app/helpers/fetchData";
import Link from 'next/link';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import ProductCard from "@/app/shared-components/ProductCard";

async function Offers() {   

  const offers = await fetchData(`${process.env.NEXT_PUBLIC_ALL_PRODUCTS_URL}`) || []

  return (
    <div className='tes-home-offers tes-section'>
      <div className='container'>
        <div className='tes-offers-header' data-aos="fade-up">
          <h2 className='tes-sec-title'>أفضل العروض</h2>
          <Link href="#" className='flex items-center gap-1 text-[var(--tes-alt-color)] '>تصفح الكل <IoIosArrowBack width={12} height={12} /></Link>
        </div>
        <div className="tes-products-list" data-aos="fade-up">
            {offers.length ?  offers?.slice(0,8)?.map((product:any)=>{
                return <ProductCard product={product} key={`offer_${product.id}`} />
            }
            ): 'Server Error'}
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const data = await axios.get(`${process.env.NEXT_PUBLIC_ALL_PRODUCTS_URL}`).then((res) =>{
//    return res.data
//   });
    
//   return {
//     props: {
//       offers: data,
//     },
//   };
// }

export default Offers;