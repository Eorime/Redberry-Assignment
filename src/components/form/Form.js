import React from "react";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    author: "",
    title: "",
    description: "",
    date: "",
    category: "",
    email: "",
  });

  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(inputValue);

  return (
    <div className="form">
      <div className="author">
        <label for="username" style={{ fontWeight: "500", color: "#1a1a1f" }}>
          ავტორი *
        </label>
        <input
          onChange={handleChange}
          id="author"
          type="text"
          name="author"
          placeholder="შეიყვანეთ ავტორი"
        ></input>
        <ul className="author-validation"></ul>
      </div>
      <div className="title">
        <label for="title" style={{ fontWeight: "500", color: "#1a1a1f" }}>
          სათაური *
        </label>
        <input
          onChange={handleChange}
          id="title"
          type="text"
          name="title"
          placeholder="შეიყვანეთ სათაური"
        ></input>
      </div>
      <label for="description" style={{ fontWeight: "500", color: "#1a1a1f" }}>
        აღწერა *
      </label>
      <input
        onChange={handleChange}
        id="description"
        type="text"
        name="description"
        placeholder="შეიყვანეთ ავტორი"
      ></input>
      <div className="date">
        <label
          for="description"
          style={{ fontWeight: "500", color: "#1a1a1f" }}
        >
          გამოქვეყნების თარიღი *
        </label>
        <input
          onChange={handleChange}
          id="date"
          type="date"
          name="date"
        ></input>
      </div>
      <div className="category">
        <label
          for="description"
          style={{ fontWeight: "500", color: "#1a1a1f" }}
        >
          კატეგორია
        </label>
        <input
          onChange={handleChange}
          id="category"
          type="text"
          name="category"
          placeholder="აირჩიეთ კატეგორია"
        ></input>
      </div>
      <div className="email">
        <label for="email" style={{ fontWeight: "500", color: "#1a1a1f" }}>
          ელ-ფოსტა
        </label>
        <input
          onChange={handleChange}
          id="email"
          type="email"
          name="email"
          placeholder="Example@redberry.ge"
        ></input>
      </div>
      {/* <button className="publish" onClick={handleSubmit}>
        გამოქვეყნება
      </button> */}
    </div>
  );
};

export default Form;
