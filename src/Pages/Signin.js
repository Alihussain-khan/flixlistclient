import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas/signup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    name:"",
    phone:"",
    address:"",
    email:"",
    password:"",
    cpassword:""
}

const Singin = () => {
    const navigate = useNavigate();
    // formik stuff

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit : (values)=>{
            const {name, phone, address, email, password} = values
            try {
                axios.post('https://flixlistbackend-zosl.vercel.app/api/v1/auth/register', {name, phone, address, email,password})
                .then(response => {
                    const data = response.data;
                    const message = data.message 
                    console.log(message)   
                   
                    if(message == "user already exists")
                    {
                        toast.error('user already exists', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                    }
                    if(message == "change phone number")
                    {
                        toast.error('change phone number', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            }); 
                    }
                    if(message == "user created successfully"){
                        toast.success('Sign up Successfull', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                        navigate('/login')
                    }
                     
                  })
                  .catch(function (error) {
                    console.log(error);
                    console.log("bad1")
                  });
            } catch (error) {
                console.log(error)
                console.log("axios has issues")
            }  
        }
    })
    
    
    
    // old working stuff
    // const navigate = useNavigate();

    // const [inputText, setInputText] = useState({    
    //     name:"",
    //     phone:"",
    //     address:"",
    //     email:"",
    //     password:""
    // })

    // const handler = (e) => {
       
    //     setInputText({...inputText, [e.target.name]:e.target.value})
    //     console.log(inputText)
    // }
   
    // const updateList = () => {
    //     if(inputText.name!="" && inputText.phone!="" && inputText.address!="" && inputText.email!="" && inputText.password!=""){
    //     const {name, phone, address, email, password} = inputText
    //     console.log(name)
    //     console.log(phone)
    //     console.log(address)
    //     console.log(email)
    //     console.log(password)
    //     try {
    //         axios.post('https://flixlistbackend-zosl.vercel.app/api/v1/auth/register', {name, phone, address, email,password})
    //         .then(response => {
    //             const data = response.data;
    //             const message = data.message 
    //             console.log(message)   
               
    //             if(message == "user already exists")
    //             {
    //                alert("user already exists") 
    //             }
    //             if(message == "change phone number")
    //             {
    //                alert("change phone number") 
    //             }
    //             if(message == "user created successfully"){
    //                 navigate('/login')
    //             }
                 
    //           })
    //           .catch(function (error) {
    //             console.log(error);
    //             console.log("bad1")
    //           });
    //     } catch (error) {
    //         console.log(error)
    //         console.log("axios has issues")
    //     }  
         
            
            
    //     // setInputText({  name:"",
    //     // phone:"",
    //     // address:"",
    //     // email:"",
    //     // password:""})
        
        

        
    // }   
    //     else{alert("one of the fields is empty")}
        
    // }
    
        
    


  return (
    <>
    <Layout>
    <div className='container'>
    <div className='row'>
        <div className='col-md-3'></div>
        <div className='shadow col-md-6  p-5 my-5  mrgin'>
            <div className="">
                <label  className="form-label">Name</label>
                <input type="text" className="form-control" name="name" placeholder="Enter Name" value={formik.values.name} onChange={formik.handleChange}  />
            </div>
            {formik.errors.name && formik.touched.name ? <div style={{color:"red"}} className="form-text mb-3">{formik.errors.name}</div> : null}
            <div className="">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" placeholder="Enter Phone" value={formik.values.phone} onChange={formik.handleChange} />
            </div>
            {formik.errors.phone && formik.touched.phone ? <div style={{color:"red"}} className="form-text mb-3">{formik.errors.phone}</div> : null}
            <div className="">
                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                <input type="text" className="form-control" name="address" placeholder="Enter Address" value={formik.values.address} onChange={formik.handleChange} />
            </div>
            {formik.errors.address && formik.touched.address ? <div style={{color:"red"}} className="form-text mb-3">{formik.errors.address}</div> : null}
            <div className="">
                <label htmlFor="exampleInputEmail1" className="form-label">Email    </label>
                <input type="email" className="form-control" name="email" placeholder="Enter Email" value={formik.values.email} onChange={formik.handleChange} />
            </div>
            {formik.errors.email && formik.touched.email ? <div style={{color:"red"}} className="form-text mb-3">{formik.errors.email}</div> : null}
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={formik.values.password} onChange={formik.handleChange}/>
            </div>
            {formik.errors.password && formik.touched.password ? <div style={{color:"red"}} className="form-text mb-3">{formik.errors.password}</div> : null}

            <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">confirm Password</label>
                <input type="password" className="form-control" name="cpassword" placeholder="Confirm Password" value={formik.values.cpasswordpassword} onChange={formik.handleChange}/>
            </div>
            {formik.errors.cpassword && formik.touched.cpassword ? <div style={{color:"red"}} className="form-text mb-3">{formik.errors.cpassword}</div> : null}

            <button  className="btn btn-success" type="submit" onClick={formik.handleSubmit}>Sign up</button>
            <br/>
            <p className='mt-3'>Already signed up? <Link to="/login">Login</Link> </p>
        </div>
        </div>
        </div>

        </Layout>
        <ToastContainer />
    </>
  )
}

export default Singin