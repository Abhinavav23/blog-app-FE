import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { post } from "../../services/api";
import { setToken } from "../../utils/storage";

export const Login = () => {
  const initialUserInfo = {
    email: "",
    password: "",
  };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleForm = async(e) => {
    e.preventDefault();
    try{
      const data = await post("/auth/login", userInfo);
      setToken(data.token);
      navigate("/home");
    }catch(err){
      console.log('err', err);
    }
  };

  return (
    <form onSubmit={handleForm} className="form-container">
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          name="email"
          id="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={userInfo.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
      <div>
        <p>Not a user already ? </p>
        <button onClick={() => navigate("/signup")}>SignUp</button>
      </div>
    </form>
  );
};