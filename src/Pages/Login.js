import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
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
      axios.post('http://localhost:8000/api/v1/auth/login', {email,password})
      .then(response => {
        const data = response.data.user.email;   
        localStorage.setItem('email',JSON.stringify({data})) 
        let t = response.data.token
        localStorage.setItem('token',JSON.stringify({t}))
        navigate('/')  
      })
  } catch (error) {
      console.log(error)
      console.log("axios has issues")
  }


      }else{alert("one of the fields is empty")}
    }

  return (
    <Layout>
     <div className='container myform shadow mt-5 col-4 p-5'>
        
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
    </Layout>
  )
}

export default Login