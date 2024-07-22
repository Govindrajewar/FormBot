import "../style/Workspace/Workspace.css";
import WorkspaceNavBar from "../components/Workspace/WorkspaceNavBar.jsx";
import Flow from "../components/Workspace/Flow.jsx";
import Theme from "../components/Workspace/Theme.jsx";

function Workspace() {
  return (
    <div className="workspace">
      <WorkspaceNavBar />
      {/* <Flow /> */}
      <Theme />
    </div>
  );
}

export default Workspace;
