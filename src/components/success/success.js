import Valid from "./valid.png";
import "./success.css";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const Success = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.Home);
  };

  return (
    <div className="login-success">
      <img src={Valid} className="success-tick" alt="Header"></img>
      <p className="success-message">წარმატებული ავტორიზაცია</p>
      <button className="ok-button" onClick={handleClick}>
        კარგი
      </button>
      <span className="closeOk" /*es ar mushaobs */>&times;</span>
    </div>
  );
};

export default Success;
