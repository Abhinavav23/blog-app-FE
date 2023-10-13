import React, { useEffect, useState } from "react";
import { get } from "../../services/api";

export const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const getMyBlogs = async () => {
    try {
      const blogData = await get("/auth/myblogs");
      setBlogs(blogData.blogList);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getMyBlogs();
  }, []);
  return (
    <section>
        <h2>My Blogs</h2>
        {blogs.length > 0 && blogs.map((blog) => <h3>{blog.title}</h3>) }
    </section>
  );
};
