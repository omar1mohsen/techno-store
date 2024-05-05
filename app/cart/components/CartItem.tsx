"use client"
import { Product } from '@/app/Types/interfaces'
import QuantityInput from '@/app/categories/components/QuantityInput'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
function CartItem({product}:{product : Product} ) {
const[quantity,setQuantity] = useState(product.quantity || 1)
  return (
    <tr>
        <td className='tes-prod-cart-details'>
            <span className='tes-delete-product'><IoMdCloseCircleOutline size={24}  /> </span>
            <Image className='me-6' src={product.image} alt='' width={72} height={72} /> 
            <span>{product.title}</span>
        </td>
        <td>{product.price} ر.س</td>
        <td><QuantityInput quantity={quantity} setQuantity={setQuantity}/></td>
        <td>{product.price * quantity} ر.س</td>
  </tr>
  )
}

export default CartItem