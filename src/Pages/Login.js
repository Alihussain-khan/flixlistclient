import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
const Login = () => {

    const navigate = useNavigate()



  const [inputText, setInputText] = useState({
    email:"",
    password:""
})


// useEffect(()=>{localStorage.removeItem("token")},[])
const handler = (e) => {
    console.log(e.target.value)
    setInputText({...inputText, [e.target.name]:e.target.value})
}

const updateList = () => {
    if(inputText.email!="" && inputText.password!=""){
    // setInputList([...inputList, inputText] )
    const {email, password} = inputText
    console.log(JSON.stringify(inputText))
    setInputText({
    email:"",
    password:""})

    try {
      axios.post('https://flixlistbackend-zosl.vercel.app/api/v1/auth/login', {email,password})
      .then(response => {

        const info = response.data;
        const message = info.message 
        console.log(message)   
       
        if(message == "password incorrect")
        {

          return toast.error('password incorrect', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          // return alert("password incorrect") 
        }
        if(message == "email or password required")
        {
          return toast.error('email or password required', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          // return alert("email or password required") 
        }
        if(message == "email not found"){
          return toast.error('user not found please sign up first', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          // return alert("user not found please sign up first") 
            
        }
        else{  
              const data = response.data.user.email;   
              localStorage.setItem('email',JSON.stringify({data})) 
              let t = response.data.token
              localStorage.setItem('token',JSON.stringify({t}))
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
              navigate('/') 
         }
      
      })
  } catch (error) {
      console.log(error)
      console.log("axios has issues")
  }


      }else{alert("one of the fields is empty")}
    }

  return (
    <>
    <Layout>
<div className='container'>
    <div className='row'>
        <div className='col-md-3'></div>
        <div className='shadow col-md-6  p-5 my-5  mrgin'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" placeholder="Enter Email" value={inputText.email} onChange={handler} />
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={inputText.password} onChange={handler}/>
            </div>
            <button type="submit" className="btn btn-success" onClick={updateList}>Login</button>
            <br/>
            <p className='mt-3'>New User?  <Link to="/signin">Sign up</Link> </p>
      </div>
      </div>
        </div>
    </Layout>
    <ToastContainer/>
    </>
  )
}

export default Login