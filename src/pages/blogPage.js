import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import "./blogPage.css";
import BackArrow from "./backArrow.png";

const BlogPage = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetch("https://api.blog.redberryinternship.ge/api/blogs/1141", {
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
        // console.log(blogData.description);
      });
  }, []);

  return (
    <div className="blog-container">
      <Navbar />
      {blogData && (
        <div>
          <h1 className="blog-header">{blogData.title}</h1>
          <img className="blog-image" alt="" src={blogData.image} />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
