import { useState } from "react";
import "../style/Workspace/Workspace.css";
import WorkspaceNavBar from "../components/Workspace/WorkspaceNavBar.jsx";
import Flow from "../components/Workspace/Flow.jsx";
import Theme from "../components/Workspace/Theme.jsx";
import Response from "../components/Workspace/Response.jsx";

function Workspace() {
  const [activeComponent, setActiveComponent] = useState("Flow");
  const [formName, setFormName] = useState("");

  return (
    <div className="workspace">
      <WorkspaceNavBar
        setActiveComponent={setActiveComponent}
        formName={formName}
        setFormName={setFormName}
      />
      {activeComponent === "Flow" && <Flow formName={formName} />}
      {activeComponent === "Theme" && <Theme />}
      {activeComponent === "Response" && <Response />}
    </div>
  );
}

export default Workspace;
