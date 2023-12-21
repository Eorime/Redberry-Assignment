import { useState, useEffect } from "react";
import "./blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.blog.redberryinternship.ge/api/blogs/341", {
      headers: {
        Authorization:
          "Bearer 8db43bd15470636a6dae591a5a2257f0cf9c9e91950d038129a052d57ca467e4",
      },
    })
      .then((respo) => respo.json())

      .then((added) => {
        console.log(added);
        setBlogs(added);
      });
  }, []);

  return (
    <div>
      <p className="author">{blogs.author}</p>
      <p className="date">{blogs.publish_date}</p>
      <h2 className="blog-header">{blogs.title}</h2>
      <p className="text">{blogs.description}</p>
      {/* <p className="categories">{blogs.categories}</p> */}
      <img
        className="image"
        alt=""
        src={blogs.image}
        style={{
          width: "408px",
          height: "328px",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

/*avtori, gamoqveynebis tarigi, satauri, kategoriebi da extract*/

export default Blogs;
