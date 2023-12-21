import "./login.css";

const Login = ({ isWindowOpen, closeWindow }) => {
  const checkForMail = () => {};

  return (
    <>
      {isWindowOpen && (
        <div className="login-modal">
          <span className="closeWindow" onClick={closeWindow}>
            &times;
          </span>
          <p className="enter">შესვლა</p>
          <p className="e-mail">ელ-ფოსტა</p>
          <input
            className="input"
            type="text"
            placeholder="Example@redberry.ge"
          />
          <button onClick={checkForMail} className="window-login-bttn">
            შესვლა
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
