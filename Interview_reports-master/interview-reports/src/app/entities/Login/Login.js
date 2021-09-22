import React from "react";
import "./Login.css";

const Login = ({
  submit,
  email,
  password,
  onChangeEmail,
  onChangePassword,
  seeError,
  error
}) => {
  //

  return (
    <main>
      <form>
        <div className="input">
          <input
            className="input"
            type="text"
            placeholder="email"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            className="input password"
            type="password"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div className="buttons">
          <button className="single-button" onClick={submit} onKeyDown={submit}>
            Log in
          </button>
        </div>
        {seeError && <div className="errMsg">{error}</div>}
      </form>
    </main>
  );
};

export default Login;