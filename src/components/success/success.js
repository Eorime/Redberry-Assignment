import Valid from "./valid.png";

import "./success.css";

const Success = () => {
  return (
    <div className="login-success">
      <img src={Valid} className="success-tick" alt="Header"></img>
      <p className="success-message">წარმატებული ავტორიზაცია</p>
      <button className="ok-button">კარგი</button>
      <span className="closeOk" /*es ar mushaobs */>&times;</span>
    </div>
  );
};

export default Success;
