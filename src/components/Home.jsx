import axios from "axios";
import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchAllBlogs = async () => {
    setIsLoading(true);
    const token = sessionStorage.getItem("userToken");
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        "http://localhost:5500/api/v1/blog/all",
        config
      );
      setBlogs(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <main>
      <section className="create-blog-container">
        <h3>publish your thoughts</h3>
        <p>create your own blog today</p>
        <button onClick={() => navigate("/create")}>Create</button>
      </section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        blogs && blogs.map((blog) => <Blog key={blog._id} {...blog} />)
      )}
    </main>
  );
};
