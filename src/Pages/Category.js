import React from 'react'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

const Category = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
  
    let a = useParams()
    
  
    useEffect(() => {
      const getProducts = async () => {
      
        let response = await fetch("https://flixlistbackend-zosl.vercel.app/api/v1/auth/sendmovies");      
        response = await response.json();
        
          setData(response?.filter( x => x.category == a.category));
          console.log(data)
          // setFilter(response);
        }
   
        
  
      getProducts();
      
    }, [a]);
  
    // const filterProduct = async () => {
   
    //     const updatedList = await data.filter((x)=>x.category == a.category);
    //     setFilter(updatedList);
    // } 


    // useEffect(()=>{
      
    //     filterProduct()
      
        
    //  },[filter])
    return(
        <Layout>
        <div  className='container'>        
      
  
  <div className='row mt-5'>
          {data?.map(x=>{
             return(
              <div className='col-lg-3 col-md-4 col-sm-10 mb-3'>
                  <div className="card" style={{width: '15rem'}}>
                  <Link to={`/single/${x.id}`}><img src={`.${x.image}`} class="card-img-top"></img></Link>
                  
                  </div>
              </div>
  
  )
})}</div></div>
      </Layout>
    )
}

export default Category