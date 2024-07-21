import "../style/Workspace/Workspace.css";
import WorkspaceNavBar from "../components/Workspace/WorkspaceNavBar.jsx";
import Flow from "../components/Workspace/Flow.jsx";

function Workspace() {
  return (
    <div className="workspace">
      <WorkspaceNavBar />
      <Flow />
    </div>
  );
}

export default Workspace;
