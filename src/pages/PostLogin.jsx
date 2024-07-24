import "../style/PostLogin/PostLogin.css";
import addFolder from "../assets/PostLogin/addFolder.png";
import drop from "../assets/PostLogin/drop.png";
import deleteIcon from "../assets/PostLogin/delete.png";

function PostLogin() {
  return (
    <div className="workspace">
      <header className="workspace-header">
        <div className="header-h1">
          Dewank Rastogi's workspace
          <img src={drop} alt="drop arrow" />
        </div>
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
