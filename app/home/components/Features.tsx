import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { PiShippingContainerDuotone } from 'react-icons/pi';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { TfiCup } from 'react-icons/tfi';

function Features() {
    const  features = [
        {title:"الدفع المؤمَّن", icon: <CiCreditCard1 size={30}/>,desc:"أموالك آمنة."},
        {title:"إرجاع خلال ٢٤ ساعة", icon: <TfiCup  size={30}/>,desc:"ضمان استعادة بنسبة 100%"},
        {title:"الدعم على مدار الساعة 24/7", icon: <RiCustomerServiceLine size={30} />,desc:"التواصل المباشر أو الرسائل الفورية"},
        {title:"توصيل سريع", icon: <PiShippingContainerDuotone size={30} />,desc:"توصيل في ٢٤ ساعة"},
    ]
  return (
    <div className='tes-features-wrap'>
            <div className='container flex items-center gap-16'>
                {features?.length ? features.map((feature,index)=>(
                    <div className='tes-feature-box' key={`feature_${index}`}>
                        {feature.icon}
                        <div className="tes-desc">
                            <h6>{feature.title}</h6>
                            <p>{feature.desc}</p>
                        </div>
                    </div>
                )):"Server Error"}
            </div>
    </div>
  )
}

export default Features