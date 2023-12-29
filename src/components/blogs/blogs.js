import "./blogs.css";
import SeeMore from "./seemore.png";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useMemo } from "react";

const Blogs = () => {
  const [data, error, isLoading] = useFetch(
    "https://api.blog.redberryinternship.ge/api/blogs"
  );

  const [params] = useSearchParams();
  const id = params.get("selectedId");

  const filteredData = useMemo(() => {
    return data.data?.filter((fdat) => {
      return +id ? !!fdat.categories.find((cat) => cat.id === +id) : true;
    });
  }, [id, data.data]);

  return (
    <div className="blogs-window">
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
              style={{ color: "#85858D", fontSize: "16px", marginTop: "-12px" }}
            >
              {blog.publish_date}
            </p>
            <h2
              className="blogs-header"
              style={{
                color: "#1a1a1f",
                fontSize: "26px",
                width: "544px",
                height: "70px",
                fontWeight: "500",
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
                marginTop: "2px",
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
  );
};

export default Blogs;
