import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";




const Singin = () => {
    const navigate = useNavigate();

    const [inputText, setInputText] = useState({    
        name:"",
        phone:"",
        address:"",
        email:"",
        password:""
    })

    const handler = (e) => {
       
        setInputText({...inputText, [e.target.name]:e.target.value})
        console.log(inputText)
    }
   
    const updateList = () => {
        if(inputText.name!="" && inputText.phone!="" && inputText.address!="" && inputText.email!="" && inputText.password!=""){
        const {name, phone, address, email, password} = inputText
        console.log(name)
        console.log(phone)
        console.log(address)
        console.log(email)
        console.log(password)
        try {
            axios.post('http://localhost:8000/api/v1/auth/register', {name, phone, address, email,password})
            .then(response => {
                const data = response.data;
                const message = data.message 
                console.log(message)   
               
                if(message == "user already exists")
                {
                   alert("user already exists") 
                }
                if(message == "change phone number")
                {
                   alert("change phone number") 
                }
                if(message == "user created successfully"){
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
         
            
            
        // setInputText({  name:"",
        // phone:"",
        // address:"",
        // email:"",
        // password:""})
        
        

        
    }   
        else{alert("one of the fields is empty")}
        
    }
    
        
    


  return (
    <>
    <Layout>
    <div className='myform shadow container my-5 col-4 p-5 mrgin'>
       
            <div className="mb-3">
                <label  className="form-label">Name</label>
                <input type="text" className="form-control" name="name" placeholder="Enter Name" value={inputText.name} onChange={handler}  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" placeholder="Enter Phone" value={inputText.phone} onChange={handler} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                <input type="text" className="form-control" name="address" placeholder="Enter Address" value={inputText.address} onChange={handler} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email    </label>
                <input type="email" className="form-control" name="email" placeholder="Enter Email" value={inputText.email} onChange={handler} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter Password" value={inputText.password} onChange={handler}/>
            </div>
            <button  className="btn btn-success" onClick={updateList}>Sign up</button>
            <br/>
            <p className='mt-3'>Already signed up? <Link to="/login">Login</Link> </p>
        </div>
        </Layout>
    </>
  )
}

export default Singin