import "../../style/Workspace/Theme.css";

import light from "../../assets/Workspace/Theme/light.png";
import dark from "../../assets/Workspace/Theme/dark.png";
import blue from "../../assets/Workspace/Theme/blue.png";

function Theme() {
  return (
    <div className="theme">
      <div className="theme-container">
        <div className="theme-header">Customize the theme</div>
        <img src={light} alt="light" />
        <img src={dark} alt="dark" />
        <img src={blue} alt="blue" />
      </div>
    </div>
  );
}

export default Theme;
