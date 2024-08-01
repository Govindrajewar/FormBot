import "../style/Desktop/Desktop.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import icon from "../../src/assets/Workspace/Theme/icon.png";
import send from "../assets/Desktop/send.png";

function Desktop() {
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
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

  const handleInputChange = (index, value, type) => {
    setInputValues({
      ...inputValues,
      [index]: value,
    });

    if (type === "emailInput") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [index]: null });
      } else {
        setErrors({ ...errors, [index]: "Invalid email address" });
      }
    } else if (type === "phoneInput") {
      if (validatePhone(value)) {
        setErrors({ ...errors, [index]: null });
      } else {
        setErrors({ ...errors, [index]: "Invalid phone number" });
      }
    } else if (type === "dateInput") {
      if (validateDate(value)) {
        setErrors({ ...errors, [index]: null });
      } else {
        setErrors({ ...errors, [index]: "Invalid date" });
      }
    } else {
      setErrors({ ...errors, [index]: null });
    }
  };

  const handleFormSubmit = (index) => {
    const updatedData = data.map((form) => ({
      ...form,
      itemList: form.itemList.map((item, itemIndex) =>
        itemIndex === index &&
        (item.type === "textInput" ||
          item.type === "numberInput" ||
          item.type === "emailInput" ||
          item.type === "phoneInput" ||
          item.type === "dateInput")
          ? { ...item, value: inputValues[index] || "" }
          : item
      ),
    }));
    setData(updatedData);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const validateDate = (date) => {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(date);
  };

  const filteredData = data
    .filter((form) => form.formName === "input testing")
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
                (item.type === "textInput" ||
                  item.type === "numberInput" ||
                  item.type === "emailInput" ||
                  item.type === "phoneInput" ||
                  item.type === "dateInput") &&
                !inputValues[index];
              if (isInputEmpty) isEmpty = true;

              return (
                <div
                  key={index}
                  className={`data-container ${
                    item.type === "textInput" ||
                    item.type === "numberInput" ||
                    item.type === "emailInput" ||
                    item.type === "phoneInput" ||
                    item.type === "dateInput"
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
                    item.type !== "numberInput" &&
                    item.type !== "emailInput" &&
                    item.type !== "phoneInput" &&
                    item.type !== "dateInput" ? (
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
                              item.type === "textInput"
                                ? "text"
                                : item.type === "numberInput"
                                ? "number"
                                : item.type === "emailInput"
                                ? "email"
                                : item.type === "phoneInput"
                                ? "tel"
                                : "date"
                            }
                            value={item.value}
                            className={
                              item.type === "textInput"
                                ? "text-input-dark"
                                : item.type === "numberInput"
                                ? "number-input-dark"
                                : item.type === "emailInput"
                                ? "email-input-dark"
                                : item.type === "phoneInput"
                                ? "phone-input-dark"
                                : "date-input-dark"
                            }
                            disabled
                          />
                          <button className="submit-button-dark" disabled>
                            <img src={send} alt="Send" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-input-container">
                          <input
                            type={
                              item.type === "textInput"
                                ? "text"
                                : item.type === "numberInput"
                                ? "number"
                                : item.type === "emailInput"
                                ? "email"
                                : item.type === "phoneInput"
                                ? "tel"
                                : "date"
                            }
                            placeholder={
                              item.type === "textInput"
                                ? "Enter your text"
                                : item.type === "numberInput"
                                ? "Enter your number"
                                : item.type === "emailInput"
                                ? "Enter your email"
                                : item.type === "phoneInput"
                                ? "Enter your phone number"
                                : "Enter a date"
                            }
                            className={
                              item.type === "textInput"
                                ? "text-input"
                                : item.type === "numberInput"
                                ? "number-input"
                                : item.type === "emailInput"
                                ? "email-input"
                                : item.type === "phoneInput"
                                ? "phone-input"
                                : "date-input"
                            }
                            value={inputValues[index] || ""}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                e.target.value,
                                item.type
                              )
                            }
                          />
                          <button
                            className="submit-button"
                            onClick={() => handleFormSubmit(index)}
                            disabled={
                              (item.type === "emailInput" && errors[index]) ||
                              (item.type === "phoneInput" && errors[index]) ||
                              (item.type === "dateInput" && errors[index])
                            }
                          >
                            <img src={send} alt="Send" />
                          </button>
                          <br />
                          {(item.type === "emailInput" ||
                            item.type === "phoneInput" ||
                            item.type === "dateInput") &&
                            errors[index] && (
                              <p className="display-error-message">
                                {errors[index]}
                              </p>
                            )}
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
