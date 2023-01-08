import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-Rau610</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />

          <button>Sign in</button>
        </form>
        <p>You don't have an accoount? Register</p>
      </div>
    </div>
  );
};

export default Login;
