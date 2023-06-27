import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const UserMovies = () => {


  let data = localStorage.getItem('email')
  const parsedData = JSON.parse(data);
  const email = parsedData.data;
  
  const [movies, setMovies] = useState([])

useEffect(() => 
{
  FetchUserMovies();

}, [])

async function FetchUserMovies() 
{
  await axios.post('https://flixlistbackend-zosl.vercel.app/api/v1/auth/usermovies', {email})
  .then(res => setMovies(res?.data ?? []))
  .catch(exception => console.log(`exception.response = ${JSON.stringify(exception?.response)}`))
}





  return (
    <Layout>
      <div className='container'>
      <div className='row mt-3'>
        {movies.length>0 ? (movies.map(x=>{
           return(
            
            <div className='col-lg-3 col-md-4 col-sm-10 mb-3'>
                <div className="card" style={{width: '15rem'}}>
                <Link to={`/single/${x.id}`}><img src={x.image} class="card-img-top"></img></Link>
                
                </div>
            </div>

)

            
            })):<h1 className='text-center py-5'>No Movies Added, Please go to <br/><Link className='btn btn-outline-secondary' to="/">Home</Link></h1>}</div>
            </div>
    </Layout>
  )
}

export default UserMovies