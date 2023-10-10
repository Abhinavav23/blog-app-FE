import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const handleForm = () => {};
  const navigate = useNavigate();
  return (
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="username">username : </label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="password">password : </label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
      <div>
        <p>Not a user already ? </p>
        <button onClick={() => navigate('/signup')}>SignUp</button>
      </div>
    </form>
  );
};
