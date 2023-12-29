import "./login.css";
import Success from "../success/success";
import Invalid from "./invalid.png";

const Login = ({
  isWindowOpen,
  closeWindow,
  mail,
  checkForMailFront,
  validateFront,
  showSuccess,
  message,
}) => {
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
          </form>
          {showSuccess && (
            <Success onClick={closeWindow} showSuccess={showSuccess} />
          )}
        </div>
      )}
    </>
  );
};

export default Login;
