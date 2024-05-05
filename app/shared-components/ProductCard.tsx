import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import { Product } from '../Types/interfaces';


function ProductCard({product}:{product : Product}) {
  return (
    <div className="tes-product-box" data-aos="fade-up" >
        <div className="tes-prod-img">
            <Image src={product.image} alt={product.title} width={200} height={250} /> 
            <div className="tes-product-btns">
                <Link className="tes-product-btn" href={`/categories/${product.category}/${product.id}`}><IoEyeOutline /></Link>
                <Link className="tes-product-btn" href={`/categories/${product.category}/${product.id}`}><CiShoppingCart /></Link>
                <Link className="tes-product-btn" href={`/categories/${product.category}/${product.id}`}><CiHeart  /></Link>
            </div>
        </div>
        <div className="tes-prod-content">
            <div className="tes-prod-rate">
                <Rating name="read-only" value={product.rating.rate} readOnly />
                <span>({product.rating.count})</span>
            </div>
            <h3>{product.title}</h3>
            <p>{product.price} ر.س</p>
        </div>
    </div>
  )
}

export default ProductCard