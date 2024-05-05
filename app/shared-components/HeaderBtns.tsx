"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useModalStore } from '../store/states'
import { useRouter } from 'next/navigation'

function HeaderBtns() {
    const openModal = useModalStore((state) => state.openModal),
         router = useRouter(),
        handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
            e.preventDefault()
            if(localStorage.getItem("user_token")){
                router.push("/cart");
            }else{
                openModal()
            }
        }
  return (
    <div className="tes-user-btns">
    <Link href="#"><Image src="/assets/icons/User.svg" width={32} height={32} alt="" /></Link>
    <Link href="#"><Image src="/assets/icons/Heart.svg" width={32} height={32} alt="" /></Link>
    <Link onClick={handleClick} href="/cart"><Image src="/assets/icons/ShoppingCartSimple.svg" width={32} height={32} alt="" /></Link>
</div>
  )
}

export default HeaderBtns