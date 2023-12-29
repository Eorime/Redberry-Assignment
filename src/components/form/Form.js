import React, { useState } from "react";
import "./Form.css";

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
      <div className="row">
        <div className="column author">
          <label
            htmlFor="author"
            style={{ fontWeight: "500", color: "#1a1a1f" }}
          >
            ავტორი *
          </label>
          <input
            onChange={handleChange}
            id="author"
            type="text"
            name="author"
            placeholder="შეიყვანეთ ავტორი"
          />
          <ul style={{ color: "#85858D", width: "240px", marginTop: "-5px" }}>
            <li>მინიმუმ 4 სიმბოლო</li>
            <li>მინიმუმ ორი სიტყვა</li>
            <li>მხოლოდ ქართული სიმბოლოები</li>
          </ul>
        </div>
        <div className="column title">
          <label
            htmlFor="title"
            style={{ fontWeight: "500", color: "#1a1a1f" }}
          >
            სათაური *
          </label>
          <input
            onChange={handleChange}
            id="title"
            type="text"
            name="title"
            placeholder="შეიყვანეთ სათაური"
          />
          <ul style={{ color: "#85858D", width: "240px", marginTop: "-5px" }}>
            <li>მინიმუმ 4 სიმბოლო</li>
          </ul>
        </div>
      </div>
      <div className="description">
        <label
          htmlFor="description"
          style={{ fontWeight: "500", color: "#1a1a1f" }}
        >
          აღწერა *
        </label>
        <textarea
          onChange={handleChange}
          id="description"
          type="text"
          name="description"
          placeholder="შეიყვანეთ აღწერა"
        />
        <ul style={{ color: "#85858D", width: "240px", marginTop: "-5px" }}>
          <li>მინიმუმ 4 სიმბოლო</li>
        </ul>
      </div>

      <div className="row">
        <div className="column date">
          <label htmlFor="date" style={{ fontWeight: "500", color: "#1a1a1f" }}>
            გამოქვეყნების თარიღი *
          </label>
          <input onChange={handleChange} id="date" type="date" name="date" />
        </div>
        <div className="column category">
          <label
            htmlFor="category"
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
          />
        </div>
      </div>

      <div className="email">
        <label htmlFor="email" style={{ fontWeight: "500", color: "#1a1a1f" }}>
          ელ-ფოსტა
        </label>
        <input
          onChange={handleChange}
          id="email"
          type="email"
          name="email"
          placeholder="Example@redberry.ge"
        />
      </div>
      <button className="publish" onClick={handleSubmit}>
        გამოქვეყნება
      </button>
    </div>
  );
};

export default Form;
