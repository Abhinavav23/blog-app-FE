import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, getConfig, post } from "../../services/api";
import { Comment } from "./Comment";
import axios from "axios";

export const BlogDetails = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState({});
  const [comment, setComment] = useState("");
  const [errMessage, serErrMessage] = useState("");
  const navigate = useNavigate();

  const getBlogData = async () => {
    try {
      const blog = await get(`/blog/read/${blogId}`);
      console.log("blog", blog);
      setBlogData(blog.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getBlogData();
    console.log("blogData");
  }, [blogId, comment]);

  const makeComment = async () => {
    const commentData = {
      message: comment,
    };
    try {
      const response = await post(
        `/blog/addComment/${blogId}`,
        commentData,
        true
      );
      setComment("");
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteBlog = async () => {
    const config = getConfig();
    try {
      await axios.delete(
        `http://localhost:5500/api/v1/blog/remove/${blogId}`,
        config
      );
      navigate("/home");
    } catch (err) {
      console.log(err.response.data.message);
      serErrMessage(err.response.data.message);
    }
  };

  const vote = async (voteType) => {
    const config = getConfig();
    try {
      await axios.patch(
        `http://localhost:5500/api/v1/blog/vote/${blogId}?voteType=${voteType}`,
        {},
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="container">
      <h2>Blog Details</h2>
      <p>Title: {blogData.title}</p>
      <p>Description: {blogData.description}</p>
      <p>Author: {blogData.username}</p>
      <p>Up-vote: {blogData.upVote}</p>
      <p>Down-Vote: {blogData.downVote}</p>
      <p>
        Tags:{" "}
        {blogData.tag &&
          blogData.tag.map((el, i) => <span key={i}>#{el} </span>)}
      </p>
      <div>
        <h3>Comments:</h3>
        {blogData.comments &&
          blogData.comments.map((item, i) => <Comment key={i} {...item} />)}
      </div>
      <div className="container add-comment-container">
        <label htmlFor="comment">Add your comment: </label>
        <input
          type="text"
          name="comment"
          id="comment"
          onBlur={(e) => setComment(e.target.value)}
        />
        <button onClick={makeComment}>comment</button>
      </div>

      <div>
        <button onClick={() => vote("upVote")}>upvote</button>
        <button onClick={() => vote("downVote")}> downvote</button>
      </div>

      <button
        style={{
          backgroundColor: "red",
          fontSize: "1.5rem",
          padding: "0.75rem 1.5rem",
          margin: "1.5rem",
        }}
        onClick={deleteBlog}
      >
        Delete
      </button>

      {errMessage && <h2 style={{ color: "red" }}>Error: {errMessage}</h2>}
    </section>
  );
};
