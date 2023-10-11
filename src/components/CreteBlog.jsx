import React, { useRef, useState } from "react";

export const CreteBlog = () => {
  const initialValue = {
    title: "",
    description: "",
    imageUrl: "",
  };

  const [blogInfo, setBlogInfo] = useState(initialValue);
  const tagRef = useRef();

  const [tags, setTags] = useState([]);
  const handleForm = () => {};
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setBlogInfo({ ...blogInfo, [name]: value });
  };

  const addTag = (e) => {
    e.preventDefault();
    setTags([...tags, tagRef.current.value]);
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
          {tags && tags.map((tag) => <span>#{tag} </span>)}
        </div>
      </div>
      <div>
        <input type="submit" value="Create" />
      </div>
    </form>
  );
};
