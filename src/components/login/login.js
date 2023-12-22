import "./login.css";

const Login = ({ isWindowOpen, closeWindow }) => {
  // const checkForMail = () => {};

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
            />
            <button
              type="submit"
              // onClick={checkForMail}
              className="window-login-bttn"
            >
              შესვლა
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
