import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const [movies, setMovies] = useState([])
  const api = useEffect(()=>{
    axios.get("https://flixlistbackend-zosl.vercel.app/api/v1/auth/sendmovies").then(res=>setMovies(res.data))
  },[])
  

  return (
    <>
    <Layout>
      <div  className='container'>
        <div className='row mybg banner'>
            <div className='col-md-6  mybannerheading ps-5 h1'>
              <h1 >Create a personal watchlist using this app</h1>
            </div>
            <div className='col-md-6 banner'>
              <img className='img-fluid mt-5' src='../Images/denise-jans-Lq6rcifGjOU-unsplash.jpg' />
            </div>
        </div>
        
    

<div className='row mt-5'>
        {movies.map(x=>{
           return(
            
            <div className='col-lg-3 col-md-4 col-sm-10 mb-3'>
                <div className="card" style={{width: '15rem'}}>
                <Link to={`/single/${x.id}`}><img src={x.image} class="card-img-top"></img></Link>
                
                </div>
            </div>

)

            
            })}</div></div>
    </Layout>
</>
  )
}

export default Home