import Navbar from "../../components/navbar/navbar";
import "./blogPage.css";
import BackArrow from "./backArrow.png";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { routes } from "../../constants/routes";
import Slider from "../../components/Slider/Slider";

const BlogPage = () => {
  let { id } = useParams();

  const [data, error, isLoading] = useFetch(
    `https://api.blog.redberryinternship.ge/api/blogs/${id}`
  );

  return (
    <div className="blog-container">
      <Navbar />
      {data && (
        <div>
          <Link className="arrow-Link" to={routes.Home}>
            <img
              src={BackArrow}
              className="back-arrow"
              alt="back-arrow"
              style={{ position: "fixed" }}
            />
          </Link>
          <p className="blog-author">{data.author}</p>
          <p className="blog-date">{data.publish_date}</p>
          <p className="blog-email">
            <span style={{ marginLeft: "-4px", marginRight: "8px" }}>
              &#8226;
            </span>
            {data.email}
          </p>
          <h1 className="blog-header">{data.title}</h1>
          <div className="blog-categories">
            {data.categories &&
              data.categories.map((category) => (
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
            <img className="blog-image" alt="" src={data.image} />
          </div>
          <p className="blog-text">{data.description}</p>
        </div>
      )}
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginTop: "750px",
          marginBottom: "-400px",
          marginLeft: "-1200px",
          position: "relative",
        }}
      >
        მსგავსი სტატიები
      </h1>
      <div className="slider">
        <Slider />
      </div>
    </div>
  );
};

export default BlogPage;
