import { useState, useEffect } from "react";
import "./blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.blog.redberryinternship.ge/api/blogs", {
      headers: {
        Authorization:
          "Bearer 8db43bd15470636a6dae591a5a2257f0cf9c9e91950d038129a052d57ca467e4",
      },
    })
      .then((respo) => respo.json())

      .then((added) => {
        console.log(added);
        setBlogs(added.data);
      });
  }, []);

  return (
    <div>
      {blogs.map((blog, index) => (
        <div className="blogs-window" key={index}>
          <img
            className="image"
            alt=""
            src={blog.image}
            style={{
              width: "408px",
              height: "328px",
              borderRadius: "12px",
            }}
          />
          <p className="author" style={{ fontSize: "16px", fontWeight: "500" }}>
            {blog.author}
          </p>
          <p className="date" style={{ color: "#85858D", fontSize: "12px" }}>
            {blog.publish_date}
          </p>
          <h2
            className="blog-header"
            style={{
              color: "#1a1a1f",
              fontSize: "20px",
              width: "408px",
              fontWeight: "500",
            }}
          >
            {blog.title}
          </h2>
          <p
            className="text"
            style={{
              color: "#404049",
              fontSize: "16px",
              width: "408px",
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
              fontSize: "14px",
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
