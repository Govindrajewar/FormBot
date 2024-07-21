import "../style/Login/Login.css";
import arrowBack from "../assets/Login/arrowBack.png";
import bottomEllipse from "../assets/Login/bottomEllipse.png";
import sideEllipse from "../assets/Login/sideEllipse.png";
import polygon from "../assets/Login/polygon.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleArrowBack = () => {
    navigate("/");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <div className="login-form">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
        />
        <br />

        <div className="login-btn">Log in</div>

        <div className="login-text">
          Don’t have an account? <a href="" onClick={handleSignup}>Register now</a>
        </div>
      </div>

      <img
        id="arrowBack"
        src={arrowBack}
        alt="Arrow Back"
        onClick={handleArrowBack}
      />
      <img id="bottomEllipse" src={bottomEllipse} alt="Bottom Ellipse" />
      <img id="sideEllipse" src={sideEllipse} alt="Side Ellipse" />
      <img id="polygon" src={polygon} alt="Polygon" />
    </div>
  );
}

export default Login;
