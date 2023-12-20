import "./App.css";
import Navbar from "./components/navbar/navbar.js";
import Header from "./components/header/header.js";
import Categories from "./components/categories/categories.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header />;
      <Categories />
    </div>
  );
}

export default App;
