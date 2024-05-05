"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import fetchData from '@/app/helpers/fetchData';
import ProductCard from '@/app/shared-components/ProductCard';
import 'swiper/css/pagination';
import Loader from '@/app/shared-components/Loader';

 function RelatedProducts({category}:{category:String}) {
     const url = category === "all" ? process.env.NEXT_PUBLIC_ALL_PRODUCTS_URL : `${process.env.NEXT_PUBLIC_CATEGORY_URL}${category}`,
     [products,setProducts] = useState([]);
     
     useEffect(()=>{
        fetchData(`${url}`).then((data)=>{
            setProducts(data)
        })
    },[url])
  return (
    <div className='tes-related-products tes-section' data-aos="fade-up">
        <div className='container'>
            <h2 className='tes-sec-title mb-4'>منتجات متشابهة</h2>
            <Swiper
                loop ={true}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    500: {
                    slidesPerView: 2,
                    },
                    776:{
                    slidesPerView: 3,
                    },
                    1024:{
                    slidesPerView:4
                    }
                }}
                speed={1500}
                pagination={true}
                modules={[Pagination]}
                className="tes-related-slider"
              >
                {products.length ? products?.map((prodoct,index)=>{
                    return(
                        <SwiperSlide className="tes-related-slide" key={`related_${index}`}>
                            <ProductCard product={prodoct} />
                        </SwiperSlide>
                    )

                }):"Server Error"}

        </Swiper>
        </div>
    </div>
  )
}

export default RelatedProducts