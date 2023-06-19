import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
        
      <div  className='container'>
        <div className='row mybg banner'>
            <div className='col-md-6  mybannerheading ps-5 h1'>
              <h1 >We are a company that creates mern stack web applications</h1>
              
            </div>
            <div className='col-md-6 banner'>
              <img className='img-fluid mt-5' src='../Images/denise-jans-Lq6rcifGjOU-unsplash.jpg' />
            </div>
        </div></div>
    </Layout>
  )
}

export default About