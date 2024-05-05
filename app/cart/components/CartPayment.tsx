import Link from 'next/link'
import React from 'react'
import { GoArrowLeft } from 'react-icons/go'

function CartPayment() {
  return (
    <div className="tes-cart-payment">
        <div className="tes-checkout mb-6">
            <h2 className='tes-sec-title mb-6'>اجمالي السلة</h2>
            <ul className='tes-checkout-list'>
                <li><span>الاجمالي الفرعي</span> <span>2250 ر.س</span></li>
                <li><span>التوصيل</span> <span>فري</span></li>
                <li><span>الخصم</span> <span>5 ر.س</span></li>
                <hr className='!my-0' />
                <li className='font-bold text-[--tes-black-color]'><span>الاجمالي الكلي</span> <span>2150 ر.س</span></li>
            </ul>
            <Link href="/" className='tes-btn my-5 !gap-4 !py-4'>تابع الشراء <GoArrowLeft size={24} /></Link>
        </div>
        <div className="tes-checkout">
            <h2 className='tes-sec-title mb-6'>قسيمة الخصم</h2>
            <hr />
            <div className='tes-coupon-wrap'>
                <div className='tes-form-group my-4'>
                    <input type="text" className='!py-3 !text-[18px]' placeholder='ادخل قسيمة الخصم'/>
                </div>
            </div>
            <button className='tes-btn !w-auto !border-[--tes-alt-color] !bg-[--tes-alt-color] !mt-4 !mb-0 !px-8'>تطبيق القسمية</button>
        </div>
    </div>
  )
}

export default CartPayment