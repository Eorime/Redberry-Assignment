import React, { useRef } from "react";
import "./Slider.css";
import { Link } from "react-router-dom";
import useFilteredData from "../../hooks/useFilteredData";
import BackArrow from "./slider_arrow.png";
import SeeMore from "./seemore.png";

const Slider = ({}) => {
  const [filteredData] = useFilteredData();
  const slide = useRef(null);

  const handleLeftClick = () => {
    slide.current.scrollTo({
      left: slide.current.scrollLeft - 500,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    slide.current.scrollTo({
      left: slide.current.scrollLeft + 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-container">
      <div className="arrow-buttons">
        <img
          onClick={handleLeftClick}
          className="back-arrow"
          src={BackArrow}
          alt=""
        />
        <img
          className="back-arrow-rotate back-arrow"
          src={BackArrow}
          alt=""
          onClick={handleRightClick}
        />
      </div>
      <div className="slides-box" ref={slide}>
        {filteredData &&
          filteredData.map((blog) => (
            <div
              className="blog-window"
              style={{
                marginBottom: "60px",
              }}
              key={blog.id}
            >
              <img
                className="blogs-image"
                alt=""
                src={blog.image}
                style={{
                  width: "544px",
                  height: "423px",
                  borderRadius: "16px",
                }}
              />
              <p
                className="blogs-author"
                style={{ fontSize: "21px", fontWeight: "500" }}
              >
                {blog.author}
              </p>
              <p
                className="blogs-date"
                style={{
                  color: "#85858D",
                  fontSize: "16px",
                  marginTop: "-12px",
                }}
              >
                {blog.publish_date}
              </p>
              <h2
                className="blogs-header"
                style={{
                  color: "#1a1a1f",
                  fontSize: "26px",
                  width: "544px",
                  fontWeight: "500",
                  height: "70px",
                }}
              >
                {blog.title}
              </h2>
              <div className="blogs-categories">
                {blog.categories.map((category) => (
                  <div
                    className="blog-category"
                    style={{
                      color: category.text_color,
                      backgroundColor: category.background_color,
                      fontSize: "16px",
                      fontFamily: "firaGo",
                      fontWeight: "500",
                      borderRadius: "40px",
                      padding: "10px 20px",
                      border: "none",
                      cursor: "default",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      marginRight: "15px",
                    }}
                    key={category.id}
                  >
                    {category.title}
                  </div>
                ))}
              </div>
              <p
                className="blogs-text"
                style={{
                  color: "#404049",
                  fontSize: "21px",
                  width: "544px",
                  maxHeight: "56px",
                  lineHeight: "28px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  whiteSpace: "pre-line",
                }}
              >
                {blog.description}
              </p>
              <Link
                to={`/blogs/${blog.id}`}
                className="seeAll"
                style={{
                  color: "#5D37F3",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "firaGo",
                  border: "none",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                }}
              >
                სრულად ნახვა
              </Link>
              <img className="see-more" alt="see more" src={SeeMore} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slider;
