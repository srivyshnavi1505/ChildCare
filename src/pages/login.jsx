import { useNavigate } from "react-router-dom";

const Login = ({loggedin,setloggedin}) => {

  const navigate=useNavigate();

  const logincontrol= ()=> {
    setloggedin(true);
    navigate('/');
  }

  return (
    <div>
      <h2>Login using your details: </h2>
      <button onClick={logincontrol}>Login</button>
      </div>
  )
}

export default Login