import { useState, useEffect } from "react";
import "./categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.blog.redberryinternship.ge/api/categories")
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data.data);
      });
  }, []);

  return (
    <div className="categoryButtons">
      {categories.map((category) => (
        <button
          style={{
            color: category.text_color,
            backgroundColor: category.background_color,
            fontSize: "12px",
            fontFamily: "firaGo",
            borderRadius: "30px",
            padding: "8px 16px",
            border: "none",
            cursor: "pointer",
          }}
          key={category.id}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default Categories;
