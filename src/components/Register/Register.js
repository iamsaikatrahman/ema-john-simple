import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Register: Create an Account</h2>
        <form onSubmit="">
          <input type="email" placeholder="enter your email" />
          <br />
          <input type="password" placeholder="Enter your password" />
          <br />
          <input type="password" placeholder="Re-enter your password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
        <div>------------- or --------------</div>
        <button className="btn-regular">Google SignIn</button>
      </div>
    </div>
  );
};

export default Register;
