import React, { useEffect, useState } from "react";
import { get } from "../../services/api";
import { removeToken } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

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
    <section className="profile-container">
      <h2>Profile Info</h2>
      <p>Email: {profileInfo.email}</p>
      <p>Username: {profileInfo.username}</p>
      <p>No of Blogs written: {profileInfo.blog.length}</p>
      <button onClick={logout}>Logout</button>
    </section>
  );
};
