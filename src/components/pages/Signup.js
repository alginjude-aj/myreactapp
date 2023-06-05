import React from "react";
import './Signup.css';

function Signup(){

    return (
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    }
    
export default Signup;