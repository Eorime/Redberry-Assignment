import { useState, useEffect } from "react";
import "./blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.blog.redberryinternship.ge/api/blogs", {
      headers: {
        Authorization:
          "Bearer 6a09ce323058c4ba70774a9ae7daa6a5dab74736a51948b4b676e303dbf9e9fb",
      },
    })
      .then((respo) => respo.json())

      .then((added) => {
        console.log(added);
        setBlogs(added.data);
      });
  }, []);

  return (
    <div className="blogs-window">
      {blogs.map((blog, index) => (
        <div
          className="blog-window"
          style={{
            marginBottom: "60px",
          }}
          key={index}
        >
          <img
            className="image"
            alt=""
            src={blog.image}
            style={{
              width: "544px",
              height: "437px",
              borderRadius: "16px",
            }}
          />
          <p className="author" style={{ fontSize: "21px", fontWeight: "500" }}>
            {blog.author}
          </p>
          <p className="date" style={{ color: "#85858D", fontSize: "16px" }}>
            {blog.publish_date}
          </p>
          <h2
            className="blog-header"
            style={{
              color: "#1a1a1f",
              fontSize: "26px",
              width: "544px",
              fontWeight: "500",
            }}
          >
            {blog.title}
          </h2>
          <p
            className="text"
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
          <button
            className="seeAll"
            style={{
              color: "#5D37F3",
              fontSize: "18px",
              fontWeight: "500",
              fontFamily: "firaGo",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            სრულად ნახვა
          </button>
        </div>
      ))}
    </div>
  );
};

/*avtori, gamoqveynebis tarigi, satauri, kategoriebi da extract*/

export default Blogs;
