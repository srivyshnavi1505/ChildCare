import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    const navigate=useNavigate();

    const handlesubmit= (e)=> {
        e.preventDefault();
        const account={username,password};
        axios.post('http://localhost:3000/accounts', account)
            .then(res=> {
                alert(`Account created with username: ${res.data.username}`);
                navigate('/');
            })
            .catch(err=> console.log(err));
    }

    return ( 
        <div>
            <h2>Create Account: </h2>
            <form onSubmit={handlesubmit}>
                <label>Username: </label>
                <input type="text" required value={username} onChange={(e)=> setusername(e.target.value)} />
                <label>Password: </label>
                <input type="password" required value={password} onChange={(e)=> setpassword(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Signup;