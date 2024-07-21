import "../style/Signup/Signup.css";
import arrowBack from "../assets/Signup/arrowBack.png";
import bottomEllipse from "../assets/Signup/bottomEllipse.png";
import sideEllipse from "../assets/Signup/sideEllipse.png";
import polygon from "../assets/Signup/polygon.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleArrowBack = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter a username"
        />
        <br />

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

        <label htmlFor="confirmpassword">Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          placeholder="**********"
        />
        <br />
        <div className="signup-btn">Sign Up</div>

        <div className="signup-text">
          Already have an account ?{" "}
          <a href="" onClick={handleLogin}>
            Login
          </a>
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

export default Signup;
