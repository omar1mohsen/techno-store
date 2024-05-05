import { toast } from "react-toastify";
import PostData from "./PostData";

export const addToCart = (formData: any,setLoading:any)=>{
    PostData(`${process.env.NEXT_PUBLIC_BASE_URL}/carts`,formData).then(res=>{
        if(res){
            setLoading(false)
            toast.success("تم إضافة المنتج بنجاح")
        }
    })
}