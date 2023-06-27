import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-light  text-center myfooter">
  <div className="container container-fluid text-center">
    <Link className="navbar-brand text-center" to="/">FlixList</Link>
    
  </div>
</nav>
</>
    
  )
}

export default Footer