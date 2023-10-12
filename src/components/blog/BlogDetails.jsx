import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../services/api";

export const BlogDetails = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState({});
  const getBlogData = async () => {
    try {
      const blog = await get(`/blog/read/${blogId}`);
      console.log('blog', blog);
      setBlogData(blog.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getBlogData();
  }, [blogId]);

  return (
    <section>
      <h2>Blog Details</h2>
      <p>Title: {blogData.title}</p>
      <p>Description: {blogData.description}</p>
      <p>Author: {blogData.username}</p>
      <p>Up-vote: {blogData.upVote}</p>
      <p>Down-Vote: {blogData.downVote}</p>
      <p>Tags: {blogData.tag && blogData.tag.map((el) => <span>#{el} </span>)}</p>
    </section>
  );
};
