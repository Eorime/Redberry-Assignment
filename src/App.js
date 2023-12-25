import "./App.css";
import Navbar from "./components/navbar/navbar.js";
import Header from "./components/header/header.js";
import Categories from "./components/categories/categories.js";
import Blogs from "./components/blogs/blogs.js";
import Create from "./create/create.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Create />} />
      </Routes>
      <Navbar />
      <Header />;
      <Categories />
      <Blogs />
    </div>
  );
}

export default App;
