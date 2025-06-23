import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({loggedin,setloggedin}) => {

  const navigate=useNavigate();

  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');

  const handlelogin=async(e) => {
    e.preventDefault();
    const res=await axios.get('http://localhost:3000/accounts');
    const exists=res.data.find(user=> {
      if(user.username===username){
        if(user.password===password){
          setloggedin(true);
          navigate('/');
          return true;
        }else {
          alert("Incorrect password");
          return true;
        }
      }
    })
    if(!exists) {
      alert(`No account with username: ${username} exists`);
      navigate('/login');
    }
  }

  return (
    <div>
      <h2>Login using your details: </h2>
      <form onSubmit={handlelogin}>
        <label>Username: </label>
        <input type="text" required value={username} onChange={(e)=> setusername(e.target.value)} />
        <label>Password: </label>
        <input type="password" required value={password} onChange={(e)=> setpassword(e.target.value)} />
        <button>Login</button>
      </form>
      </div>
  )
}

export default Login;