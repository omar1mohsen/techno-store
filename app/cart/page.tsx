import React from 'react'
import Breadcrumb from '../shared-components/BreadCrumb';
import CartBody from './components/CartBody';
import './cart.css'
function Cart() {
  const  crumbs = [
        { title: 'الصفحة الرئيسية', path: '/' },
        { title: 'عربة التسوق' },

    ];
  return (
    <>
    <Breadcrumb crumbs={crumbs} />
    <CartBody/>
    </>
  )
}

export default Cart