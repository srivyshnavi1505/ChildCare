import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="title">
      <Link to="/"><h1>ChildCare</h1></Link>
      <div className="navbar">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/activities">Activities</Link></p>
        <p><Link to="/programmes">Programmes</Link></p>
      </div>
    </div>
  );
};

export default Navbar;
