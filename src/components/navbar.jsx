import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>ChildCare Connect</h1>
        <div className="navbar">
            <Link to="/"><p>Home</p></Link>
            <Link to="/donate"><p>Donate</p></Link>
        </div>
    </div>
  )
}

export default Navbar