import "../style/Workspace/Workspace.css";
import close from "../assets/Workspace/close.png";

function Workspace() {
  return (
    <div className="workspace">
      <div className="header-container">
        <div className="form-name">
          <input type="text" placeholder="Enter Form Name" id="formNameId" />
        </div>
        <div className="item-container">
          <div className="item">Flow</div>
          <div className="item">Theme</div>
          <div className="item">Response</div>
        </div>
        <div className="buttons">
          <button className="share-btn">Share</button>
          <button className="save-btn">Save</button>
          <img src={close} alt="close" />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
