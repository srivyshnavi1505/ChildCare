import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ loggedin, setloggedin }) => {
  const navigate = useNavigate();

  const handlelogout = () => {
    setloggedin(false);
    navigate('/');
  };

  return (
    <div className="title">
  <div className="left-section">
    <Link to="/"><h1>ChildCare</h1></Link>
    <div className="navbar">
      <p><Link to="/">Home</Link></p>
      <p><Link to="/activities">Activities</Link></p>
      <p><Link to="/programmes">Programmes</Link></p>
      {loggedin && <p><Link to="/children">Children</Link></p>}
    </div>
  </div>

  <div className="nav-content">
    {!loggedin && (
      <>
        <div className="log-button">
          <Link to='/login'><button>Login</button></Link>
        </div>
        <div className="sign-up-button">
          <Link to='/signup'><button>Signup</button></Link> 
        </div>
      </>
    )}
    {loggedin && (
      <div className="logout">
        <button onClick={handlelogout}>Logout</button>
      </div>
    )}
  </div>
</div>
  );  

};

export default Navbar;
