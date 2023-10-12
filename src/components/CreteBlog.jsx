import React, { useRef, useState } from "react";
import { post } from "../services/api";
import { useNavigate } from "react-router-dom";

const initialValue = {
  title: "",
  description: "",
  imageUrl: "",
};

export const CreteBlog = () => {
  const [blogInfo, setBlogInfo] = useState(initialValue);
  const tagRef = useRef();
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setBlogInfo({ ...blogInfo, [name]: value });
  };

  const addTag = (e) => {
    e.preventDefault();
    setTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const newBlogData = blogInfo;
    newBlogData.tag = tags;
    try {
      const res = await post("/blog/new", newBlogData, true);
      navigate("/home");
      // throw a modal with success message
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <form onSubmit={handleForm} className="form-container">
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={blogInfo.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image link : </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={blogInfo.imageUrl}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          id="description"
          cols="60"
          rows="10"
          value={blogInfo.description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div>
        <label htmlFor="tags">Tags: </label>
        <input type="tags" name="tags" id="tags" ref={tagRef} />
        <button onClick={addTag}>Add</button>
        <div className="tagList">
          {tags && tags.map((tag, i) => <span key={i}>#{tag} </span>)}
        </div>
      </div>
      <div>
        <input type="submit" value="Create" />
      </div>
    </form>
  );
};

/*

My visit to USA
https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60
it was a professional visit with family for q week and we went to couple of places
*/
