import * as Yup from "yup";
const passwordRules = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])/,
      phoneNumberRegex = /^(\+?971|00971|05)\d{7,9}$/;


export const loginShema =  Yup.object().shape({
  username: Yup.string().required(`حقل مطلوب`),
    password: Yup.string()
      .min(2, `كلمة السر قصيرة`)
      .max(50, `كلمة السر طويلة جدا`)
      .required(`حقل مطلوب`),
  });

  // export const signupShema =  Yup.object().shape({
  //   name : Yup.string().required(requiredField).min(2, tooShort),
  //   email: Yup.string().email(InvaildEmail).required(requiredField),
  //   password: Yup.string()
  //     .min(8, tooShort)
  //     .max(50, tooLong)
  //     .required(requiredField)
  //     .matches(passwordRules,passValidtion),
  //     password_confirmation : Yup.string().oneOf([Yup.ref('password')],mustBeMatch ).required(requiredField)
  // });
