import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import "./blogPage.css";
import BackArrow from "./backArrow.png";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const [blogData, setBlogData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://api.blog.redberryinternship.ge/api/blogs/${id}`, {
      headers: {
        Authorization:
          "Bearer 6a09ce323058c4ba70774a9ae7daa6a5dab74736a51948b4b676e303dbf9e9fb",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setBlogData(data);
      });
  }, []);

  return (
    <div className="blog-container">
      <Navbar />
      {blogData && (
        <div>
          <img
            src={BackArrow}
            className="back-arrow"
            alt="back-arrow"
            style={{ position: "fixed" }}
          />
          <p className="blog-author">{blogData.author}</p>
          <p className="blog-date">{blogData.publish_date}</p>
          <p className="blog-email">
            <span style={{ marginLeft: "-4px", marginRight: "8px" }}>
              &#8226;
            </span>
            {blogData.email}
          </p>
          <h1 className="blog-header">{blogData.title}</h1>
          <div className="blog-categories">
            {blogData.categories.map((category) => (
              <div
                className="blogpage-category"
                style={{
                  color: category.text_color,
                  backgroundColor: category.background_color,
                  fontSize: "13px",
                  fontFamily: "firaGo",
                  fontWeight: "500",
                  borderRadius: "40px",
                  padding: "8px 13px",
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
          <div className="blog-image-container">
            <img className="blog-image" alt="" src={blogData.image} />
          </div>
          <p className="blog-text">{blogData.description}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
