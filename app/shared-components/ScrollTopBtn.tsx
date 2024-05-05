"use client"
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ScrollTopBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(()=>{
    const scrollFunction = () => {
      const document = window.document;
  
        const mybutton = document.getElementById("tes-back-to-top") as HTMLElement;
  
        if (document.body.scrollTop > 200 ||document.documentElement.scrollTop > 200) {          
          mybutton?.classList.add("active");
        } else {
          mybutton?.classList.remove("active");
        }
      }
      window.addEventListener("scroll", scrollFunction);
  
  },[])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
        <button onClick={scrollTop} type="button" className="tes-back-to-top" id="tes-back-to-top">
          <IoIosArrowUp size={24} />
          <span>للأعلى</span>
        </button>
    </>
  );
}

export default ScrollTopBtn;