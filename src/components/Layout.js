import React from 'react'
import Footer from './Footer'
import Header from './Header'
const Layout = (props) => {
  return (
    <>
   
        <Header/>
        <main className='' style={{}}>
          <div className='mypage-container'>
            <div className='my-wrap'>
                  {props.children}
            </div>
          </div>
        </main>
    
       
        <Footer/>
    </>
  )
}

export default Layout