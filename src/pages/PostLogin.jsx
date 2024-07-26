import { useState } from "react";
import "../style/PostLogin/PostLogin.css";
import addFolder from "../assets/PostLogin/addFolder.png";
import drop from "../assets/PostLogin/drop.png";
import deleteIcon from "../assets/PostLogin/delete.png";
import upArrow from "../assets/PostLogin/upArrow.png";
import { useNavigate } from "react-router-dom";

function PostLogin() {
  const [isListVisible, setIsListVisible] = useState(false);
  const [isCreateFolder, setIsCreateFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [folders, setFolders] = useState([]);

  const navigate = useNavigate();

  const handleSettings = () => {
    navigate("/settings");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim() !== "") {
      setFolders([...folders, newFolderName]);
      setNewFolderName("");
      setIsCreateFolder(false);
    }
  };

  // const handleDeleteFolder = (index) => {
  //   const updatedFolders = folders.filter((_, i) => i !== index);
  //   setFolders(updatedFolders);
  // };

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
            <div className="header-settings" onClick={handleSettings}>
              Settings
            </div>
            <div className="header-logOut" onClick={handleLogout}>
              Log Out
            </div>
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
        <div
          className="folder-button"
          onClick={() => setIsCreateFolder(!isCreateFolder)}
        >
          <img src={addFolder} alt="Add Folder" />
          Create a folder
        </div>
        <div className="tabs">
          {folders.map((folder, index) => (
            <div className="tab" key={index}>
              {folder}
              <span
                className="delete-icon"
                // onClick={() => handleDeleteFolder(index)}
              >
                <img src={deleteIcon} alt="delete Icon" />
              </span>
            </div>
          ))}
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

      {isCreateFolder && (
        <div className="createNewFolder">
          <label htmlFor="createFolderId">Create New Folder</label>
          <input
            type="text"
            id="createFolderId"
            placeholder="Enter folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <div className="createNewFolder-buttons">
            <div className="done-button" onClick={handleCreateFolder}>
              Done
            </div>
            <div
              className="cancel-button"
              onClick={() => setIsCreateFolder(false)}
            >
              Cancel
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostLogin;
