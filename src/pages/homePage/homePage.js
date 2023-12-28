import { useState } from "react";
import Blogs from "../../components/blogs/blogs";
import Categories from "../../components/categories/categories";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";

const HomePage = () => {
  const [categoryId, setCategoryId] = useState("");

  return (
    <div>
      <Navbar />
      <Header />;
      <Categories setCategoryId={setCategoryId} />
      <Blogs categoryId={categoryId} />
    </div>
  );
};

export default HomePage;
