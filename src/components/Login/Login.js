import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" placeholder="your email" />
          <br />
          <input type="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to Ema-John <Link to="/register">Creat Account</Link>
        </p>
        <div> -------------- or ---------------</div>
        <button onClick={signInUsingGoogle} className="btn-regular">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
