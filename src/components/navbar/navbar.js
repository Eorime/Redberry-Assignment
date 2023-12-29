import { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "./logo.png";
import Login from "../login/login.js";
import { useAppContext } from "../../context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes.js";

const Navbar = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const { showSuccess, setShowSuccess } = useAppContext();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate(routes.CreateBlog);
  };

  const handleBack = () => {
    const requestBody = {
      email: mail,
    };

    fetch("https://api.blog.redberryinternship.ge/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((respo) => {
      if (respo.ok) {
        setShowSuccess(true);
      } else {
        setMessage("ელ-ფოსტა არ მოიძებნა");
      }
    });
  };

  const checkForMailFront = (e) => {
    setMail(e.target.value);
  };

  const validateFront = (e) => {
    e.preventDefault();
    const pattern = /@redberry\.ge$/;
    if (pattern.test(mail)) {
      handleBack();
    } else {
      setMessage("ელ-ფოსტა უნდა მთავრდებოდეს @redberry.ge-ით");
    }
  };

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
      {!showSuccess ? (
        <button onClick={openWindow} className="login-btn">
          შესვლა
        </button>
      ) : (
        <button onClick={handleCreateClick} className="login-btn">
          დამატება
        </button>
      )}
      <Login
        showSuccess={showSuccess}
        validateFront={validateFront}
        checkForMailFront={checkForMailFront}
        isWindowOpen={isWindowOpen}
        closeWindow={closeWindow}
        mail={mail}
        message={message}
      />
    </div>
  );
};

export default Navbar;
