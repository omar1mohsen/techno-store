"use client"
import React, { useState } from 'react'
import QuantityInput from './QuantityInput'
import { CiHeart } from 'react-icons/ci'
import { CiShoppingCart } from "react-icons/ci";
import { useModalStore } from '@/app/store/states';
import { addToCart } from '@/app/helpers/addToCart';
import { ImSpinner10 } from "react-icons/im";

function ProductBtns({id}:any) {
    const [quantity,setQuantity] = useState(1),
          [loading,setLoading] = useState(false),
          openModal = useModalStore((state) => state.openModal),
          handleCart = ()=>{
            if(localStorage.getItem("user_token")){
              setLoading(true)
              let formData = {
                userId:1,
                date: new Date(),
                products: [{productId:id,quantity:quantity}]
            }
              
              addToCart(formData,setLoading)
              
            }else{
                openModal()
            }
          }
  return (
    <>
      <div className="tes-top-btns">
        <QuantityInput setQuantity={setQuantity} />
        <span className='tes-wishlist-btn'>
            <CiHeart />
            اضافة الى المفضلة
        </span>
    </div>
    <div className="tes-actions-btns">
        <button onClick={handleCart} className='tes-btn'>
          {!loading ? <><CiShoppingCart size={24}/>اضافة الى سلة التسوق</>: <ImSpinner10 size={24} className='tes-spinning'/>}
          </button>
        <button className='tes-btn tes-white-btn'>شراء الآن</button>
    </div>
    </>
  )
}

export default ProductBtns