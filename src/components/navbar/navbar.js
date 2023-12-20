import "./navbar.css";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="navigation">
      <img src={Logo} className="redberry-logo" alt="Redberry Logo"></img>
      <button className="login-btn">შესვლა</button>
    </div>
  );
};

export default Navbar;
