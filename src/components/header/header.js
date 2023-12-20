import "./header.css";
import Image from "./image.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Image} className="header-image" alt="Header"></img>
      <h1>ბლოგი</h1>
    </div>
  );
};

export default Header;
