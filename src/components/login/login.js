import "./login.css";
import { useState } from "react";
import Success from "../success/success";
import Invalid from "./invalid.png";

const Login = ({ isWindowOpen, closeWindow }) => {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

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

  return (
    <>
      {isWindowOpen && (
        <div className="overlay">
          <form className="login-modal">
            {message && (
              <img
                src={Invalid}
                className="invalid-image"
                alt="invalid icon"
                style={{
                  width: "22px",
                  position: "absolute",
                  marginTop: "235px",
                  paddingRight: "540px",
                }}
              />
              //aq awitlebs inputis borders
            )}
            <span className="closeWindow" onClick={closeWindow}>
              &times;
            </span>
            <p className="enter">შესვლა</p>
            <p className="e-mail">ელ-ფოსტა</p>
            <input
              className={message ? "input error" : "input"}
              type="email"
              placeholder="Example@redberry.ge"
              value={mail}
              onChange={checkForMailFront}
            />
            <button onClick={validateFront} className="window-login-bttn">
              შესვლა
            </button>
            <p className="message">{message}</p>
            {showSuccess && <Success />}
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
