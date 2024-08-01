import "../style/Desktop/Desktop.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import icon from "../../src/assets/Workspace/Theme/icon.png";
import send from "../assets/Desktop/send.png";

function Desktop() {
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4001/formdata")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    if (visibleItems < data.length) {
      const timer = setTimeout(() => {
        setVisibleItems(visibleItems + 1);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visibleItems, data]);

  const handleInputChange = (index, value) => {
    setInputValues({
      ...inputValues,
      [index]: value,
    });
  };

  const handleFormSubmit = (index) => {
    const updatedData = data.map((form) => ({
      ...form,
      itemList: form.itemList.map((item, itemIndex) =>
        itemIndex === index &&
        (item.type === "textInput" || item.type === "numberInput")
          ? { ...item, value: inputValues[index] || "" }
          : item
      ),
    }));
    setData(updatedData);
  };

  const filteredData = data
    .filter((form) => form.formName === "gif testing")
    .map((form) => ({
      ...form,
      itemList: form.itemList.slice(0, visibleItems),
    }));

  return (
    <div className="desktop">
      <div className="chat-container">
        {filteredData.length > 0 ? (
          filteredData.map((form) => {
            let isEmpty = false;
            return form.itemList.map((item, index) => {
              if (isEmpty) return null;

              const isInputEmpty =
                (item.type === "textInput" || item.type === "numberInput") &&
                !inputValues[index];
              if (isInputEmpty) isEmpty = true;

              return (
                <div
                  key={index}
                  className={`data-container ${
                    item.type === "textInput" || item.type === "numberInput"
                      ? "right"
                      : "left"
                  }`}
                >
                  {item.type === "image" || item.type === "gif" ? (
                    <>
                      <img
                        src={item.value}
                        alt="Invalid URL"
                        className="data-image"
                      />
                    </>
                  ) : item.type === "video" ? (
                    <>
                      <video src={item.value} controls className="data-video">
                        Your browser does not support the video tag.
                      </video>
                    </>
                  ) : item.type !== "textInput" &&
                    item.type !== "numberInput" ? (
                    <>
                      <img src={icon} alt="icon" className="data-icon" />
                      <p className="chat-bubble">{item.value}</p>
                    </>
                  ) : (
                    <>
                      {item.value ? (
                        <div className="text-input-container">
                          <input
                            type={
                              item.type === "textInput" ? "text" : "number"
                            }
                            value={item.value}
                            className={
                              item.type === "textInput"
                                ? "text-input-dark"
                                : "number-input-dark"
                            }
                            disabled
                          />
                          <button
                            className={
                              item.type === "textInput"
                                ? "submit-button-dark"
                                : "submit-button-dark"
                            }
                            disabled
                          >
                            <img src={send} alt="Send" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-input-container">
                          <input
                            type={
                              item.type === "textInput" ? "text" : "number"
                            }
                            placeholder={
                              item.type === "textInput"
                                ? "Enter your text"
                                : "Enter your number"
                            }
                            className={
                              item.type === "textInput"
                                ? "text-input"
                                : "number-input"
                            }
                            value={inputValues[index] || ""}
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                          />
                          <button
                            className="submit-button"
                            onClick={() => handleFormSubmit(index)}
                          >
                            <img src={send} alt="Send" />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            });
          })
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
}

export default Desktop;
