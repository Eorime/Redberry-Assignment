import Valid from "./valid.png";
import "./success.css";
import { useNavigate } from "react-router-dom";

const Success = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <div className="login-success">
      <img src={Valid} className="success-tick" alt="Header"></img>
      <p className="success-message">წარმატებული ავტორიზაცია</p>
      <button onClick={onClick} type="button" className="ok-button">
        კარგი
      </button>
      <span className="closeOk" onClick={onClick} /*es ar mushaobs */>
        &times;
      </span>
    </div>
  );
};

export default Success;
