import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {motion} from "framer-motion";
import "../components/signup.css"; 


const Signup = () => {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    const navigate=useNavigate();

    const handlesubmit= async (e)=> {
        e.preventDefault();
        const account={username,password};
        const res = await axios.get('http://localhost:3000/accounts');
        const existing = res.data.find(user => user.username === username);

        if(existing) {
            alert(`An account with username "${username}" already exists`);
            navigate('/signup');
            return;
        }

        if(password.length<6 || password.length>15) {
            alert("Password length must be between 6 to 15 characters");
            return;
        }

        axios.post('http://localhost:3000/accounts', account)
            .then(res=> {
                alert(`Account created with username: ${res.data.username}`);
                navigate('/');
            })
            .catch(err=> console.log(err));
    }

    return ( 
        <motion.div className="signup-container"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", ease: "easeInOut", duration: 0.5 }}>
                <h2 className="signup-header">Create a new account:</h2>
                <form onSubmit={handlesubmit} className="auth-form">
        <label>Username</label>
        <input 
          type="text" 
          required 
          value={username} 
          onChange={(e) => setusername(e.target.value)} 
        />

        <label>Password</label>
        <input 
          type="password" 
          required 
          value={password} 
          onChange={(e) => setpassword(e.target.value)} 
        />

        <button className="auth-button">Create Account</button>
      </form>
            </motion.div>
    )
}

export default Signup;