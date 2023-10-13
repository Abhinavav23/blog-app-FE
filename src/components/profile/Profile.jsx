import React, { useEffect, useState } from "react";
import { get } from "../../services/api";
import { removeToken } from "../../utils/storage";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

export const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    email: "",
    username: "",
    blog: [],
  });

  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      const profileData = await get("/auth/profile");
      setProfileInfo(profileData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const logout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <section className="container">
      <h2>Profile Info</h2>
      
      <p>Email: {profileInfo.email}</p>
      <p>Username: {profileInfo.username}</p>
      <p>No of Blogs written: {profileInfo.blog.length}</p>
      <NavLink to="myblogs">My Blogs </NavLink> 
      <NavLink to="myComments">My comments </NavLink>
      <button onClick={logout}>Logout</button>

      <Outlet/>
    </section>
  );
};
