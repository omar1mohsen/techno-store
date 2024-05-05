import { Product } from '@/app/Types/interfaces'
import React from 'react'
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ProductBtns from './ProductBtns';
import ProductFeatures from './ProductFeatures';
import ShareProduct from './ShareProduct';
import ProductDetails from './ProductDetails';

function ProductPage({product}:{product : Product}) {

  return (
    <div className='tes-product-page'>
        <div className='container '>
          <div className='flex gap-[100px] flex-wrap max-lg:gap-[50px]'>
            <ShareProduct product={product}/>
            <div className="tes-right-side max-lg:!w-full max-lg:flex-wrap">
              <div className='tes-product-content'>
                  <div className="tes-prod-rate">
                        <Rating name="read-only" value={product.rating.rate} readOnly />
                        <span className='font-semibold text-[--tes-black-color]'>{product.rating.rate} تقييم عام</span>
                        <span>({product.rating.count} تقييم ومراجعة العملاء)</span>
                    </div>
                    <h2 className='tes-product-title'>{product.title}</h2>
                    <div className='tes-prod-info'>
                      <p>التوفر: <span className='font-semibold text-[#2DB224]'>في المخزون</span></p>
                      <p>القسم : <span className='font-semibold text-[--tes-black-color]'>الأجهزة الكهربائية</span></p>
                    </div>
                    <div className='tes-prod-price'>
                        <span>{product.price} <b> ر.س</b></span>
                        <span>يشمل ضريبة القيمة المضافة</span>
                    </div>
                    <hr className='tes-split-line' />
                    <div className='tes-prod-size'>
                      <span>المقاس</span>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          className='tes-size-input'
                          defaultValue={10}
                          inputProps={{ MenuProps: { disableScrollLock: true } }}
                        >
                          <MenuItem value={10}>43 بوصة مع جهاز استقبال مدم</MenuItem>
                          <MenuItem value={20}>55 بوصة مع جهاز استقبال مدم</MenuItem>
                          <MenuItem value={30}>64 بوصة مع جهاز استقبال مدم</MenuItem>
                      </Select>
                    </div>
                    <ProductBtns id={product.id} />
                  </div>
                <ProductFeatures />
            </div>
          </div>
          <ProductDetails desc={product.description} />
        </div>
    </div>
  )
}

export default ProductPage