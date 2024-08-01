import "../style/Desktop/Desktop.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import icon from "../../src/assets/Workspace/Theme/icon.png";
import send from "../assets/Desktop/send.png";

function Desktop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Move this function to "api/fetchedData"
    // Fetching data from the backend API
    axios
      .get("http://localhost:4001/formdata")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const filteredData = data.filter((form) => form.formName === "Introduction");

  return (
    <div className="desktop">
      <div className="chat-container">
        {filteredData.length > 0 ? (
          filteredData.map((form) =>
            form.itemList.map((item, index) => (
              <div
                key={index}
                className={`data-container ${
                  item.type === "textInput" ? "right" : "left"
                }`}
              >
                {item.type !== "textInput" && (
                  <>
                    <img src={icon} alt="icon" className="data-icon" />
                    <p className="chat-bubble">{item.value}</p>
                  </>
                )}
                {item.type === "textInput" && (
                  <div className="text-input-container">
                    <span className="text-input-label">{item.value}</span>
                    <input
                      type="text"
                      placeholder="Enter your text"
                      className="text-input"
                    />
                    <button className="submit-button">
                      <img src={send} alt="Send" />
                    </button>
                  </div>
                )}
              </div>
            ))
          )
        ) : (
          <p>No items available for "Introduction"</p>
        )}
      </div>
    </div>
  );
}

export default Desktop;
