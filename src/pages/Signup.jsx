import "../style/Signup/Signup.css";
import arrowBack from "../assets/Signup/arrowBack.png";
import bottomEllipse from "../assets/Signup/bottomEllipse.png";
import sideEllipse from "../assets/Signup/sideEllipse.png";
import polygon from "../assets/Signup/polygon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const handleArrowBack = () => {
    navigate("/");
  };

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSignup = () => {
    const { username, email, password, confirmPassword } = userData;

    let isValid = true;

    if (!username) {
      setUsernameError("Username cannot be empty.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!email) {
      setEmailError("Email cannot be empty.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password cannot be empty.");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Enter the same password in both fields.");
      isValid = false;
    } else {
      setPasswordError("");
      setConfirmPasswordError("");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password cannot be empty.");
      isValid = false;
    }

    if (!isValid) return;

    // Clear any existing error messages
    setEmailError("");
    setPasswordError("");
    setUsernameError("");
    setConfirmPasswordError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <label htmlFor="username" className={usernameError ? "labelError" : ""}>
          Username
        </label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          value={userData.username}
          onChange={handleChange}
          className={usernameError ? "error" : "signup-username"}
        />
        <br />
        {usernameError && <div className="errorMessage">{usernameError}</div>}

        <label htmlFor="email" className={emailError ? "labelError" : ""}>
          Email
        </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={userData.email}
          onChange={handleChange}
          className={emailError ? "error" : "signup-email"}
        />
        <br />
        {emailError && <div className="errorMessage">{emailError}</div>}

        <label htmlFor="password" className={passwordError ? "labelError" : ""}>
          Password
        </label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="**********"
          value={userData.password}
          onChange={handleChange}
          className={passwordError ? "error" : "signup-password"}
        />
        <br />
        {passwordError && <div className="errorMessage">{passwordError}</div>}

        <label
          htmlFor="confirmPassword"
          className={confirmPasswordError ? "labelError" : ""}
        >
          Confirm Password
        </label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="**********"
          value={userData.confirmPassword}
          onChange={handleChange}
          className={confirmPasswordError ? "error" : "signup-confirmpassword"}
        />
        <br />
        {confirmPasswordError && (
          <div className="errorMessage">{confirmPasswordError}</div>
        )}

        <div className="signup-btn" onClick={handleSignup}>
          Sign Up
        </div>

        <div className="signup-text">
          Already have an account? <a href="/login">Login</a>
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
