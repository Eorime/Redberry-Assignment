import "./navbar.css";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <div>
      <img src={Logo} class="redberry-logo"></img>
      <button class="login-btn">შესვლა</button>
    </div>
  );
};

export default Navbar;
