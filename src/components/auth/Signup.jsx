import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const initialVal = {
    firstName: "",
    username: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [userInfo, setUserInfo] = useState(initialVal);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    //   mode: "no-cors",
      body: JSON.stringify(userInfo),
    };
    try {
      const res = await fetch(
        "http://localhost:5500/api/v1/auth/signup", //"http://localhost:3000/"
        config
      );
      const data = await res.json();
      console.log("data", data);
      navigate("/login");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <form onSubmit={handleForm} className="form-container">
      <div>
        <label htmlFor="firstName">First Name : </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={userInfo.firstName.toUpperCase()}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name : </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={userInfo.lastName.toUpperCase()}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="username">User name : </label>
        <input
          type="text"
          name="username"
          id="username"
          value={userInfo.username.toLowerCase()}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
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
        <input type="submit" value="signUp" />
      </div>
    </form>
  );
};
