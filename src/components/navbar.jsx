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
      <div className="logo">
      <Link to="/"><h1>ChildCare</h1></Link>
      </div>
  <div className="navbar">
    <Link to="/"><h1>ChildCare</h1></Link>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/activities">Activities</Link></p>
    <p><Link to="/programmes">Programmes</Link></p>
    {loggedin && <p><Link to="/children">Children</Link></p>}
  </div>

  <div className="nav-buttons">
    {!loggedin && (
      <>
        <Link to='/login'><button className="log-button">Login</button></Link>
        <Link to='/signup'><button className="sign-up-button">Signup</button></Link>
      </>
    )}
    {loggedin && <button className="logout" onClick={handlelogout}>Logout</button>}
  </div>
</div>

  );
};

export default Navbar;
