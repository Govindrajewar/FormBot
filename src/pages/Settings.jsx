import "../style/Settings/Settings.css";
import lock from "../assets/Settings/lock.png";
import logout from "../assets/Settings/logout.png";
import profile from "../assets/Settings/profile.png";
import view from "../assets/Settings/view.png";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="data-container">
        <img src={profile} alt="profile" />
        <input type="text" placeholder="Name" />
      </div>
      <div className="data-container">
        <img src={lock} alt="lock" />
        <input type="email" placeholder="Update Email" />
        <img src={view} alt="view" id="viewId" />
      </div>
      <div className="data-container">
        <img src={lock} alt="lock" />
        <input type="password" placeholder="Old Password" />
        <img src={view} alt="view" id="viewId" />
      </div>
      <div className="data-container">
        <img src={lock} alt="lock" />
        <input type="password" placeholder="New Password" />
        <img src={view} alt="view" id="viewId" />
      </div>

      <button type="button" id="update-btn">
        Update
      </button>

      <div className="logout-container" onClick={handleLogout}>
        <img src={logout} alt="logout" />
        <div>Log out</div>
      </div>
    </div>
  );
}

export default Settings;
