import { useState } from "react";
import "../style/Workspace/Workspace.css";
import WorkspaceNavBar from "../components/Workspace/WorkspaceNavBar.jsx";
import Flow from "../components/Workspace/Flow.jsx";
import Theme from "../components/Workspace/Theme.jsx";
import Response from "../components/Workspace/Response.jsx";
import axios from "axios";

function Workspace() {
  const [activeComponent, setActiveComponent] = useState("Flow");
  const [formName, setFormName] = useState("");
  const [dynamicItems, setDynamicItems] = useState([]);
  const [itemCounts, setItemCounts] = useState({
    text: 0,
    image: 0,
    video: 0,
    gif: 0,
    textInput: 0,
    numberInput: 0,
    emailInput: 0,
    phoneInput: 0,
    dateInput: 0,
    ratingInput: 0,
    buttonInput: 0,
  });

  // eslint-disable-next-line
  const [user, setUser] = useState({
    userId: "12345",
    username: "john_doe",
    email: "john@example.com",
  });

  const handleSave = () => {
    const dataToSave = {
      formName,
      user,
      itemList: dynamicItems,
    };

    // TODO: Delete this
    console.log(dataToSave);

    // TODO: Move following code to /api/DynamicItems
    axios
      .post("http://localhost:4001/dynamic-items", dataToSave)
      .then((response) => {
        console.log("Items saved:", response.data);
      })
      .catch((error) => {
        console.error("There was an error saving the items!", error);
      });

    alert("Form Saved Successfully");
  };

  return (
    <div className="workspace">
      <WorkspaceNavBar
        setActiveComponent={setActiveComponent}
        formName={formName}
        setFormName={setFormName}
        handleSave={handleSave}
      />
      {activeComponent === "Flow" && (
        <Flow
          dynamicItems={dynamicItems}
          setDynamicItems={setDynamicItems}
          itemCounts={itemCounts}
          setItemCounts={setItemCounts}
        />
      )}
      {activeComponent === "Theme" && <Theme />}
      {activeComponent === "Response" && <Response />}
    </div>
  );
}

export default Workspace;
