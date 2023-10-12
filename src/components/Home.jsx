import axios from "axios";
import React, { useEffect, useState } from "react";
import { Blog } from "./blog/Blog";
import { useNavigate } from "react-router-dom";
import { get } from "../services/api";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchAllBlogs = async () => {
    setIsLoading(true);
    try {
      const blogData = await get("/blog/all");
      setBlogs(blogData.data);
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
        blogs.length > 0 &&
        blogs.map((blog) => <Blog key={blog._id} {...blog} />)
      )}
    </main>
  );
};
