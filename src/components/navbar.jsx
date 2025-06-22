import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({loggedin,setloggedin}) => {

  const navigate=useNavigate();

  const handlelogout=()=> {
    setloggedin(false);
    navigate('/');
  }

  return (
    <div className="title">
      <Link to="/"><h1>ChildCare</h1></Link>
      <div className="navbar">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/activities">Activities</Link></p>
        <p><Link to="/programmes">Programmes</Link></p>
        {loggedin && <p><Link to="/children">Children</Link></p>}
      </div>
      {!loggedin && <div>
      <Link to='/login'><button>Login</button></Link>
      <Link to='/signup'><button>Signup</button></Link> </div>}
      {loggedin && <button onClick={handlelogout}>Logout</button>}
    </div>
  );
};

export default Navbar;
