import React from "react";
import Blogs from "../components/blogs/blogs";
import Categories from "../components/categories/categories";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";

const homePage = () => {
  return (
    <div>
      <Navbar />
      <Header />;
      <Categories />
      <Blogs />
    </div>
  );
};

export default homePage;
