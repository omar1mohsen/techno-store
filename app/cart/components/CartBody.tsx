import { getCart } from "@/app/helpers/getCart";
import CartItem from "./CartItem";
import { Product } from "@/app/Types/interfaces";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import CartPayment from "./CartPayment";

async function CartBody() {
  let cartData : any = [];

  try {
    cartData = await getCart();
  } catch (error) {
    console.log("Error fetching cart:", error);
  }

  return (
    <div className="tes-section tes-cart-wrap ">
      <div className="container flex gap-[48px] flex-wrap">
        <div className="tes-cart-products">
          <h2 className="tes-sec-title mb-5 ps-3">سلة التسوق</h2>
          <table>
            <thead>
              <tr>
                <th>المنتج</th>
                <th>السعر</th>
                <th>الكمية</th>
                <th>الاجمالي</th>
              </tr>
            </thead>
            <tbody>
              {cartData.length ? (
                cartData.map((product : Product) => {
                  return <CartItem product={product} key={`cartProduct_${product.id}`} />;
                })
              ) : (
                <tr>
                  <td colSpan={4}>No data</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="tes-cart-btns">
            <Link href="/" className="flex items-center gap-2 text-[--tes-alt-color] font-bold text-[16px]"><GoArrowRight size={20} /> متابعة التسوق </Link> 
            <button className="tes-btn tes-white-btn !border-2 !border-[--tes-alt-color] !text-[--tes-alt-color] !w-auto !px-5">تحديث السلة</button>
          </div>
        </div>
        <CartPayment />
      </div>
    </div>
  );
}

export default CartBody;