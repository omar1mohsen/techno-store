import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function MainNav() {
  return (
    <div className="tes-main-nav">
      <div className="tes-nav-list container">
        <Link href="/">الرئيسية</Link>
        <Link href="#" className="tes-active-link">الأقسام <IoIosArrowDown width={12} height={12} color='#000'/></Link>
        <Link href="#">المنتجات</Link>
        <Link href="#">المنتجات</Link>
        <Link href="#">المنتجات</Link>
        <Link href="#">المنتجات</Link>
      </div>
    </div>
  );
}

export default MainNav;
