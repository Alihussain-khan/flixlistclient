import * as yup from 'yup'

export const signUpSchema = yup.object({
    name:yup.string().min(3).max(20).required("Please enter your name"),
    phone:yup.string().min(11).max(13).required("Please enter your phone"),
    address:yup.string().min(5).required("Please enter your address"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(8).required("Please enter your password"),
    cpassword:yup.string().required("please confirm password").oneOf([yup.ref('password'), null], "password must match")
})