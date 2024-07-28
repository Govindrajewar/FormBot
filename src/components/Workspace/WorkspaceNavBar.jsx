import { useState } from "react";
import "../../style/Workspace/WorkspaceNavBar.css";
import close from "../../assets/Workspace/close.png";
import { useNavigate } from "react-router-dom";

function WorkspaceNavBar({ setActiveComponent }) {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Flow");

  const handleItemClick = (item) => {
    setActiveComponent(item);
    setSelectedItem(item);
  };

  const handleShareForm = () => {
    navigate("/desktop");
  };

  return (
    <div className="header-container">
      <div className="form-name">
        <input type="text" placeholder="Enter Form Name" id="formNameId" />
      </div>
      <div className="item-container">
        <div
          className={`item ${selectedItem === "Flow" ? "selected-item" : ""}`}
          onClick={() => handleItemClick("Flow")}
        >
          Flow
        </div>
        <div
          className={`item ${selectedItem === "Theme" ? "selected-item" : ""}`}
          onClick={() => handleItemClick("Theme")}
        >
          Theme
        </div>
        <div
          className={`item ${
            selectedItem === "Response" ? "selected-item" : ""
          }`}
          onClick={() => handleItemClick("Response")}
        >
          Response
        </div>
      </div>
      <div className="buttons">
        <button className="share-btn" onClick={handleShareForm}>
          Share
        </button>
        <button className="save-btn">Save</button>
        <img src={close} alt="close" />
      </div>
    </div>
  );
}

export default WorkspaceNavBar;
