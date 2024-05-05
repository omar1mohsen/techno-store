"use client";
import React, { useState } from "react";
import { useModalStore } from "../store/states";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PostData from "../helpers/PostData";
import { useFormik } from 'formik';
import { loginShema } from "../helpers/validationSchema";
import Link from "next/link";
import { json } from "stream/consumers";
import { toast } from "react-toastify";

function LoginModal() {

const modalState = useModalStore((state) => state.modal),
      openModal = useModalStore((state) => state.openModal),
      closeModal = useModalStore((state) => state.closeModal),
      [error,setError] = useState("")

const onSubmit = (values : any, actions:any) => {
    let formData = {...values};
        setError("") 
        PostData(`${process.env.NEXT_PUBLIC_LOGIN_URL}`, formData).then((res) => {
            if(res){
                localStorage.setItem("user_token",JSON.stringify(res.token))
                closeModal()
                toast.success("مرحبًا بعودتك")
            }else{
                setError("username or password is incorrect");                
            }
        });


};

const {values,errors,touched,handleChange,handleBlur,handleSubmit,setSubmitting,} = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginShema,
    onSubmit,
});

return (
    <>
    <Modal
        open={modalState}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock
    >
    <Box className="tes-modal-box tes-auth-wrap">
        <h2 className="tes-modal-title">تسجيل الدخول</h2>
        <p>ليس لديك حساب؟<Link href="/register">سجل الآن</Link></p>
        <form method="POST" className="tes-auth-form"  onSubmit={handleSubmit}>
            {error ? (<span className="tes-validation-txt block text-center">{error}</span>) : null}
            <div className="tes-form-group">
                <label htmlFor="email">اسم المستخدم</label>
                <input type="text" name="username" value={values.username} defaultValue="johnd" onChange={handleChange} onBlur={handleBlur}/>
                {errors.username ? (<span className="tes-validation-txt">{errors.username}</span>) : null}
            </div>

            <div className="tes-form-group">
                <label htmlFor="password">كلمة المرور</label>
                <input type="password" name="password"  value={values.password} defaultValue="m38rmF$" onChange={handleChange} onBlur={handleBlur}/>
                {errors.password ? (<span className="tes-validation-txt">{errors.password}</span> ) : null}
            </div>

            <button type="submit"className="tes-btn tes-white-btn tes-auth-btn w-full mt-5">
                تسجيل الدخول
            </button>
            <p>
            ملاحظة : انشاء حساب لم يكتمل بعد، ولكن يمكنك استخدام <br/> 
            اسم المستخدم : <b className="text-[--tes-alt-color] whitespace-nowrap">johnd</b><span className="mx-1">&&</span>كلمة المرور  : <b  className="text-[--tes-alt-color]">m38rmF$</b>
            <br/> للقيام بعملية الاختبار
          </p>
        </form>
    </Box>
    </Modal>
    </>
);
}

export default LoginModal;
