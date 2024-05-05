"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import Image from 'next/image';
import 'swiper/css/navigation';
import Link from 'next/link';

function Categories() {

    const categories_objs = [
        {name: "اكسسوارات",link: "jewelery",image: "/assets/images/categories/jewelery.png" },
        {name: "الكترونيات",link: "electronics",image: "/assets/images/categories/electronics.png" },
        {name: "ملابس رجالي",link: "men's clothing",image: "/assets/images/categories/men.png" },
        {name: "ملابس حريمي",link: "women's clothing",image: "/assets/images/categories/women.png" },
        {name: "احدث المنتجات", link: "all", image: "/assets/images/categories/all.png" },
        {name: "اكسسوارات",link: "jewelery",image: "/assets/images/categories/jewelery.png" },
        {name: "الكترونيات",link: "electronics",image: "/assets/images/categories/electronics.png" },
        {name: "ملابس رجالي",link: "men's clothing",image: "/assets/images/categories/men.png" },
        {name: "ملابس حريمي",link: "women's clothing",image: "/assets/images/categories/women.png" },
        { name: "احدث المنتجات", link: "all", image: "/assets/images/categories/all.png" },
    ];  
  return (
    <div className='tes-home-categories tes-section' data-aos="fade-up">
        <div className='container'>
            <h2 className='tes-cat-title' data-aos="fade-up">تسوق من أقسامنا</h2>
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
                    slidesPerView:6
                    }
                }}
                speed={1500}
                autoplay={{
                    delay: 3000,
                }}
                navigation={true}
                modules={[Autoplay,Navigation]}
                className="tes-categories-slider"
              >
                {categories_objs.length ? categories_objs?.map((category,index)=>{
                    return(
                        <SwiperSlide className="tes-category-slide" key={`cat_${category.name+index}`}>
                            <Link href={`/categories/${category.link}`}  >
                                <div className='tes-category-image h-[150px] relative' >
                                <Image src={category.image} alt={category.name} fill/>
                                </div>
                                <span>{category.name}</span>
                            </Link>
                        </SwiperSlide>
                    )

                }):"Server Error"}

        </Swiper>
        </div>
    </div>
  )
}

export default Categories