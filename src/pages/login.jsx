import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import "../components/login.css"; 

const Login = ({ loggedin, setloggedin }) => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();
    const res = await axios.get("http://localhost:3000/accounts");
    const exists = res.data.find((user) => {
      if (user.username === username) {
        if (user.password === password) {
          setloggedin(true);
          navigate("/");
          return true;
        } else {
          alert("Incorrect password");
          return true;
        }
      }
    });
    if (!exists) {
      alert(`No account with username: ${username} exists`);
      navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-box"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h2 className="login-header">Login using your details:</h2>
        <form onSubmit={handlelogin} className="login-form">
          <label>Username:</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="login-button"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
