import { useState, useEffect, useMemo } from "react";
import "./categories.css";
import useFetch from "../../hooks/useFetch";

const Categories = ({ setCategoryId }) => {
  const [data, error, isLoading] = useFetch(
    "https://api.blog.redberryinternship.ge/api/categories"
  );

  const handleFilterCategoriesClick = (id) => {
    setCategoryId(id);
  };

  return (
    <div className="categoryButtons">
      {data.data &&
        data.data.map((category) => (
          <button
            onClick={() => handleFilterCategoriesClick(category.id)}
            style={{
              color: category.text_color,
              backgroundColor: category.background_color,
              fontSize: "16px",
              fontFamily: "firaGo",
              fontWeight: "500",
              borderRadius: "40px",
              padding: "10px 20px",
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
