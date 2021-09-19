import React from "react";
import "./Login.css"

const Login = ({ submit, email, password, onChangeEmail, onChangePassword }) => {
  //   
  
    return (
      <main>
         <form>
           <div className="input">
          <input
            className = "input"
            type="text"
            placeholder="email"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            className = "input password"
            type="password"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
          />
          </div>
          <div className="buttons">
          <button className="single-button">Back to Home</button>
          <button className="single-button" onClick={submit}>Log in</button>
          </div>
          </form>
      </main>
    );
  };
  
  export default Login;