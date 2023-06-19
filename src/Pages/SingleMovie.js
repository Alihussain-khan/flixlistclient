import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import Layout from '../components/Layout'

const SingleMovie = () => {

    const [movies, setMovies] = useState([])
    const [single, setSingle] = useState([])
    let a = useParams()
    const api = useEffect(()=>{
        FetchMovies();
    },[])

//  const fetchMovies = async()=>{
//     const moviesList = await axios.get("http://localhost:8000/api/v1/auth/sendmovies").then(res=> {return res})
  
//     let b = movies.find(x=>x.id==a.id) 
//     setSingle(b)
//  }

 async function FetchMovies()
 {
    await axios.get('https://flixlistbackend-zosl.vercel.app/api/v1/auth/sendmovies')
    .then(response => 
    {
        console.log(JSON.stringify(response));

        if (response?.data)
        {
            setMovies(response.data);
        }
    });
 }

 useEffect(()=>{
    if(movies?.length)
    {
        const movie = movies.find(i => i.id == a.id);
        setSingle(movie)
    }
 },[movies])


const add = () =>{
    let data = localStorage.getItem('email')
    const parsedData = JSON.parse(data);
    const email = parsedData.data;
    const id = single._id
   
    if(email){try {
        axios.put('https://flixlistbackend-zosl.vercel.app/api/v1/auth/add', {id, email})
        alert("added")
    } catch (error) {
        
        console.log("axios has issues")
    }}
    
}

const remove= () =>{
    let data = localStorage.getItem('email')
    const parsedData = JSON.parse(data);
    const email = parsedData.data;
    const id = single._id
   
    if(email){try {
        axios.put('https://flixlistbackend-zosl.vercel.app/api/v1/auth/remove', {id, email})
        alert("removed")
    } catch (error) {
        
        console.log("axios has issues")
    }}
}

  return (
    <Layout>
        
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-4 d-flex justify-content-center' ><img className='img'  src={`.${single?.image}`}/> </div>
                <div className='col-6 px-5 py-3 text-dark   '>
                    <h3 className='text-danger'>{single?.title}</h3>
                    <h5><span className='text-warning'>IMDb Rating: </span> {single?.imbd}</h5>
                    <p className='fs-6'>{single?.description}</p>
                    <p className='fs-6'><span className='fw-bold fs-6'>Writers: </span>{single?.writers}</p>
                    <p className='fs-6'><span className='fw-bold fs-6'>Direcor: </span>{single?.director}</p>
                    <button className='btn btn-success ' onClick={add}>Add</button>
                    <button className='btn btn-success ms-2' onClick={remove}>Remove</button>
                </div>

            </div>
        </div>
        
  </Layout>
  
  )
}

export default SingleMovie