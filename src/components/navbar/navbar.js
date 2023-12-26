import { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "./logo.png";
import Login from "../login/login.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
  };

  useEffect(() => {
    if (isWindowOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isWindowOpen]);

  return (
    <div className="navigation">
      <img src={Logo} className="redberry-logo" alt="Redberry Logo"></img>
      <button onClick={openWindow} className="login-btn">
        შესვლა
      </button>
      <Login isWindowOpen={isWindowOpen} closeWindow={closeWindow} />
    </div>
  );
};

export default Navbar;
