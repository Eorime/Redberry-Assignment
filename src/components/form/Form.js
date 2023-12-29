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

  const handleEndBtnClick = async () => {
    try {
      const data = new FormData();
      data.append("name", inputValue.author);
      data.append("name", inputValue.title);
      data.append("name", inputValue.description);
      data.append("name", inputValue.date);
      data.append("name", inputValue.category);
      data.append("name", inputValue.email);

      const response = await fetch("https://api.blog.redberryinternship.ge/", {
        headers: {
          Authorization:
            "Bearer 6a09ce323058c4ba70774a9ae7daa6a5dab74736a51948b4b676e303dbf9e9fb",
        },
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log(response);
      } else {
      }
    } catch (error) {}
  };

  console.log(inputValue);

  const minFourLetter =
    inputValue.author.length === 0
      ? "#85858D"
      : inputValue.author.length < 4
      ? "#EA1919 "
      : "#14D81C";

  const minFourLetterTitle =
    inputValue.title.length === 0
      ? "#85858D"
      : inputValue.title.length < 4
      ? "#EA1919 "
      : "#14D81C";

  const minFourLetterDescription =
    inputValue.description.length === 0
      ? "#85858D"
      : inputValue.description.length < 4
      ? "#EA1919 "
      : "#14D81C";

  const authorWords = inputValue.author.trim().split(/\s+/);
  const minTwoWord =
    inputValue.author === ""
      ? { borderColor: "#EA1919 ", color: "#85858D" }
      : authorWords.length < 2
      ? { borderColor: "#EA1919 ", color: "#EA1919 " }
      : { borderColor: "#14D81C", color: "#14D81C" };

  const georgianRegex = /^[\u10A0-\u10FF\s]+$/;
  const inputLangColor =
    inputValue.author === ""
      ? "#85858D"
      : !georgianRegex.test(inputValue.author)
      ? "#EA1919"
      : inputValue.author.trim().split(/\s+/).length < 2
      ? "#EA1919"
      : "#14D81C";

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
            style={{ borderColor: minTwoWord.borderColor }}
            id="author"
            type="text"
            name="author"
            placeholder="შეიყვანეთ ავტორი"
          />
          <ul style={{ color: "#85858D", width: "240px", marginTop: "-5px" }}>
            <li style={{ color: minFourLetter }}>მინიმუმ 4 სიმბოლო</li>
            <li
              style={{
                color: minTwoWord.color,
              }}
            >
              მინიმუმ ორი სიტყვა
            </li>
            <li style={{ color: inputLangColor }}>მხოლოდ ქართული სიმბოლოები</li>
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
            <li style={{ color: minFourLetterTitle }}>მინიმუმ 4 სიმბოლო</li>
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
          <li style={{ color: minFourLetterDescription }}>მინიმუმ 4 სიმბოლო</li>
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
      <button className="publish" onClick={handleEndBtnClick}>
        გამოქვეყნება
      </button>
    </div>
  );
};

export default Form;
