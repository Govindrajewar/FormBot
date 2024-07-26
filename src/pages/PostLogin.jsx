import { useState } from "react";
import "../style/PostLogin/PostLogin.css";
import addFolder from "../assets/PostLogin/addFolder.png";
import drop from "../assets/PostLogin/drop.png";
import deleteIcon from "../assets/PostLogin/delete.png";
import upArrow from "../assets/PostLogin/upArrow.png";

function PostLogin() {
  const [isListVisible, setIsListVisible] = useState(false);

  return (
    <div className="workspace">
      <header className="workspace-header">
        {isListVisible ? (
          <>
            <div
              className="header-h1"
              onClick={() => setIsListVisible(!isListVisible)}
            >
              Dewank Rastogi's workspace
              <img src={upArrow} alt="Up arrow" />
            </div>
            <div className="header-settings">Settings</div>
            <div className="header-logOut">Log Out</div>
          </>
        ) : (
          <>
            <div
              className="header-h1"
              onClick={() => setIsListVisible(!isListVisible)}
            >
              Dewank Rastogi's workspace
              <img src={drop} alt="drop arrow" />
            </div>
          </>
        )}
      </header>
      <div className="workspace-content">
        <div className="folder-button">
          <img src={addFolder} alt="Add Folder" />
          Create a folder
        </div>
        <div className="tabs">
          <div className="tab">
            Computer Networks{" "}
            <span className="delete-icon">
              <img src={deleteIcon} alt="delete Icon" />
            </span>
          </div>
        </div>
      </div>
      <div className="create-typebot">
        <div className="typebot-button">
          <br />
          <br />
          <span className="plus-sign">+</span>
          <br />
          <br />
          <br />
          Create a typebot
        </div>
      </div>
    </div>
  );
}

export default PostLogin;
