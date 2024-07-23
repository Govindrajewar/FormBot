import "../style/Workspace/Workspace.css";
import WorkspaceNavBar from "../components/Workspace/WorkspaceNavBar.jsx";
// import Flow from "../components/Workspace/Flow.jsx";
// import Theme from "../components/Workspace/Theme.jsx";
import Response from "../components/Workspace/Response.jsx";

function Workspace() {
  return (
    <div className="workspace">
      <WorkspaceNavBar />
      {/* <Flow /> */}
      {/* <Theme /> */}
      <Response />
    </div>
  );
}

export default Workspace;
