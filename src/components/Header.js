import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Header = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState('')
  const [f, setf] = useState('')
    
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
    });
}
}, [])
  return (
    <>
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container container-fluid">
  <Link className="navbar-brand" to="/">FlixList</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {status=="success" ? 
        <><ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/movies" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Genre
  </Link>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><Link className="dropdown-item" to="/cat/action">Action</Link></li>
    <li><Link className="dropdown-item" to="/cat/science-fiction">Science Fiction</Link></li>
    <li><Link className="dropdown-item" to="/cat/life">Life</Link></li>
    <li><Link className="dropdown-item" to="/cat/psyco">Pyscho</Link></li>
    {/* <li><a className="dropdown-item" href="#">Comedy</a></li>  */}
  </ul>
</li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usermovies">My Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/login'} onClick={()=>localStorage.clear()}>Logout</Link>
        </li>
      </ul>
      </> : <>
      <form className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">Sign up</Link>
        </li>
        </ul>
        
      </form></>}
    </div>
  </div>
</nav>

    </>
  )
}

export default Header