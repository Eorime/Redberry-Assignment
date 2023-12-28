import Valid from "./valid.png";
import "./success.css";
// import { useHistory } from "react-router-dom";

const Success = () => {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/");
  // };

  return (
    <div className="login-success">
      <img src={Valid} className="success-tick" alt="Header"></img>
      <p className="success-message">წარმატებული ავტორიზაცია</p>
      <button className="ok-button" onClick={""}>
        კარგი
      </button>
      <span className="closeOk" /*es ar mushaobs */>&times;</span>
    </div>
  );
};

export default Success;
