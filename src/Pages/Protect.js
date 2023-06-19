import React, { useEffect, useState } from 'react'
import { Outlet, Navigate,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Protect = () => {

  const [status, setStatus] = useState('')
  const navigate = useNavigate()


    let auth = localStorage.getItem('token')
    
    useEffect(() => {
      if (auth)
      {
        const parsedAuth = JSON.parse(auth);
        const { t } = parsedAuth;
        console.log(t)
  
  
        axios.get('https://flixlistbackend-zosl.vercel.app/api/v1/auth/verify', {
          headers: {'authorization': t}
        })
      .then(response => {
        setStatus(response.data.message)
        console.log(status)
        console.log("good")
        // Handle response
      })
      .catch(error => {
        console.log(error)
        console.log("bad")
        // Handle error
        navigate('/login');
  
      });
      }else{
        navigate('/login');
      }
    }, [])
    

    return <Outlet/>
      // if(status=="success")
      // {
      //   return <Outlet/>
      // }

      // if(status=="")
      // {
      //   return <Navigate to="/log"/>
      // } 
    
     
      
      // return <Navigate to="/log"/>  
}

export default Protect