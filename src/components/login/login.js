import "./login.css";
import { useState } from "react";

const Login = ({ isWindowOpen, closeWindow }) => {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const checkForMailFront = (e) => {
    setMail(e.target.value);
  };

  const validateFront = (e) => {
    e.preventDefault();
    const pattern = /@redberry\.ge$/;
    if (pattern.test(mail)) {
      setMessage("valid maladec");
    } else if (pattern.test(mail) !== "") {
      setMessage("გთხოვთ შეიყვანოთ ელ-ფოსტა");
    } else {
      setMessage("ელ-ფოსტა არ მოიძებნა");
    }
  };

  return (
    <>
      {isWindowOpen && (
        <div className="overlay">
          <form className="login-modal">
            <span className="closeWindow" onClick={closeWindow}>
              &times;
            </span>
            <p className="enter">შესვლა</p>
            <p className="e-mail">ელ-ფოსტა</p>
            <input
              className="input"
              type="email"
              placeholder="Example@redberry.ge"
              value={mail}
              onChange={checkForMailFront}
            />
            <button onClick={validateFront} className="window-login-bttn">
              შესვლა
            </button>
            <p className="message">{message}</p>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
