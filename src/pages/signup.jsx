import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate=useNavigate();

    const signupcontrol=()=> {
        navigate('/');
        alert("Account created succesfully");
    }

    return ( 
        <div>
            <h2>Create Account: </h2>
            <button onClick={signupcontrol}>Signup</button>
        </div>
     );
}
 
export default Signup;