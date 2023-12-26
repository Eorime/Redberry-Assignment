import "./App.css";
import Navbar from "./components/navbar/navbar.js";
import Header from "./components/header/header.js";
import Categories from "./components/categories/categories.js";
import Blogs from "./components/blogs/blogs.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header />;
      <Categories />
      <Blogs />
    </div>
  );
}

export default App;
