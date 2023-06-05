import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="company-name">EyeCare</h1>
        <form>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-button">Log In</button>
        </form>
              
      </div>
    </div>
  );
};

export default Login;
