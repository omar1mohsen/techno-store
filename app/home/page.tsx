import Categories from './components/Categories';
import ProductsSec from './components/ProductsSec';
import Features from './components/Features';
import Hero from './components/Hero';
import Offers from './components/Offers';
import HomeFooter from './components/HomeFooter';
import Footer from '../shared-components/Footer';
import Banners from './components/Banners';
import { Suspense } from 'react';
import Loader from '../shared-components/Loader';
import './home.css';

function Home() {
  
  return (
    <>
      <Hero/>
      <Features />
      <Offers />
      <Categories />
      <Suspense fallback={<Loader/>}>
        <ProductsSec title='منتجاتنا المقترحة' />
        <Banners/>
        <ProductsSec title='تسوق الآن <br/>منتجاتنا المقترحة' className='tes-shop-sec' />
      </Suspense>
      <HomeFooter />
    </>
  )
}

export default Home