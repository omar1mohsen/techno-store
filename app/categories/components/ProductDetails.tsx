import Link from 'next/link'
import React from 'react'

function ProductDetails({desc}:{desc:string}) {
  return (
    <div className='tes-prod-details' data-aos="fade-up">
      <div className="tes-left-side">
        <ul className='tes-prod-links'>
          <li className='active'>
            <Link href="#">النظرة العامة</Link>
          </li>
          <li>
            <Link  href="#">معلومات اضافية</Link>
          </li>
          <li>
            <Link href="#">المواصفات</Link>
          </li>
          <li>
            <Link href="#">التقييم</Link>
          </li>
        </ul>
      </div>
      <div className="tes-middle-side">
        <h4 className='tes-desc-title'>الوصف</h4>
        <p>{desc}</p>
      </div>
      <div className="tes-right-side">
        <h4 className='tes-desc-title'>تفاصيل شحن المنتج</h4>
        <div className="tes-prod-hint">
          <span>مندوب توصيل : </span>
          <span>2 - 4 أيام، شحن مجاني</span>
        </div>
        <div className="tes-prod-hint">
          <span>الشحن المحلي : </span>
          <span>حتى أسبوع واحد، 20 ر.س</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails