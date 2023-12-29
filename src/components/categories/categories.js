import { useState, useEffect, useMemo } from "react";
import "./categories.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useSearchParams } from "react-router-dom";

const Categories = ({ setCategoryId }) => {
  const [data, error, isLoading] = useFetch(
    "https://api.blog.redberryinternship.ge/api/categories"
  );

  const [chosen, setIsChosen] = useState(false);
  const navigate = useNavigate();

  const handleFilterCategoriesClick = (id) => {
    navigate(`?selectedId=${id}`);
    setIsChosen(id);
  };

  console.log(chosen);
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
              whiteSpace: "nowrap",
              border: chosen === category.id ? "1px solid #000000" : "none",
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
