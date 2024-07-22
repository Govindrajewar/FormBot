import React, { useState } from "react";
import "../../style/Workspace/Flow.css";
import start from "../../assets/Workspace/Flow/start.png";
import deleteLogo from "../../assets/Workspace/Flow/delete.png";

// Bubble Icons
import textBubble from "../../assets/Workspace/Flow/Bubbles/text.png";
import image from "../../assets/Workspace/Flow/Bubbles/image.png";
import video from "../../assets/Workspace/Flow/Bubbles/video.png";
import gif from "../../assets/Workspace/Flow/Bubbles/gif.png";

// input Icons
import textInput from "../../assets/Workspace/Flow/Inputs/text.png";
import numberInput from "../../assets/Workspace/Flow/Inputs/number.png";
import emailInput from "../../assets/Workspace/Flow/Inputs/email.png";
import phoneInput from "../../assets/Workspace/Flow/Inputs/phone.png";
import dateInput from "../../assets/Workspace/Flow/Inputs/date.png";
import ratingInput from "../../assets/Workspace/Flow/Inputs/rating.png";
import buttonInput from "../../assets/Workspace/Flow/Inputs/button.png";

function Flow() {
  const [dynamicItems, setDynamicItems] = useState([]);
  const [textItemCount, setTextItemCount] = useState(0);
  const [imageItemCount, setImageItemCount] = useState(0);
  const [videoItemCount, setVideoItemCount] = useState(0);
  const [gifItemCount, setGifItemCount] = useState(0);
  const [textInputItemCount, setTextInputItemCount] = useState(0);
  const [numberInputItemCount, setNumberInputItemCount] = useState(0);
  const [emailInputItemCount, setEmailInputItemCount] = useState(0);
  const [phoneInputItemCount, setPhoneInputItemCount] = useState(0);
  const [dateInputItemCount, setDateInputItemCount] = useState(0);
  const [rateInputItemCount, setRateInputItemCount] = useState(0);

  const handleAddTextItem = () => {
    const newTextItemId = textItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newTextItemId}`,
        type: "text",
        placeholder: "Click here to edit",
      },
    ]);
    setTextItemCount(newTextItemId);
  };

  const handleAddImageItem = () => {
    const newImageItemId = imageItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newImageItemId}`,
        type: "image",
        src: image,
        placeholder: "Click to add link",
      },
    ]);
    setImageItemCount(newImageItemId);
  };

  const handleAddVideoItem = () => {
    const newVideoItemId = videoItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newVideoItemId}`,
        type: "video",
        src: video,
        placeholder: "Click to add link",
      },
    ]);
    setVideoItemCount(newVideoItemId);
  };

  const handleAddGifItem = () => {
    const newGifItemId = gifItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newGifItemId}`,
        type: "gif",
        src: gif,
        placeholder: "Click to add link",
      },
    ]);
    setGifItemCount(newGifItemId);
  };

  const handleAddTextInputItem = () => {
    const newTextInputItemId = textInputItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newTextInputItemId}`,
        type: "text-input",
        src: textInput,
        placeholder: "Hint : User will input a text on his form",
      },
    ]);
    setTextInputItemCount(newTextInputItemId);
  };

  const handleAddNumberInputItem = () => {
    const newNumberInputItemId = numberInputItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newNumberInputItemId}`,
        type: "number-input",
        src: numberInput,
        placeholder: "Hint : User will input a number on his form",
      },
    ]);
    setNumberInputItemCount(newNumberInputItemId);
  };

  const handleAddEmailInputItem = () => {
    const newEmailInputItemId = emailInputItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newEmailInputItemId}`,
        type: "email-input",
        src: emailInput,
        placeholder: "Hint : User will input a email on his form",
      },
    ]);
    setEmailInputItemCount(newEmailInputItemId);
  };

  const handleAddPhoneInputItem = () => {
    const newPhoneInputItemId = phoneInputItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newPhoneInputItemId}`,
        type: "phone-input",
        src: phoneInput,
        placeholder: "Hint : User will input a phone on his form",
      },
    ]);
    setPhoneInputItemCount(newPhoneInputItemId);
  };

  const handleAddDateInputItem = () => {
    const newDateInputItemId = dateInputItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newDateInputItemId}`,
        type: "date-input",
        src: dateInput,
        placeholder: "Hint : User will select a date",
      },
    ]);
    setDateInputItemCount(newDateInputItemId);
  };

  const handleAddRateInputItem = () => {
    const newRateInputItemId = rateInputItemCount + 1;
    setDynamicItems([
      ...dynamicItems,
      {
        id: `${newRateInputItemId}`,
        type: "rate-input",
        src: ratingInput,
        placeholder: "Hint : User will tap to rate out of 5",
      },
    ]);
    setRateInputItemCount(newRateInputItemId);
  };

  return (
    <div className="flow">
      <div className="flow-items">
        <div className="flow-container">
          <div className="sub-header sub-header-bubbles">Bubbles</div>
          <div className="bubbles">
            <div className="bubble" onClick={handleAddTextItem}>
              <img src={textBubble} alt="Text Bubble" />
              Text
            </div>
            <div className="bubble" onClick={handleAddImageItem}>
              <img src={image} alt="Images Bubble" />
              Image
            </div>
            <div className="bubble" onClick={handleAddVideoItem}>
              <img src={video} alt="Video Bubble" />
              Video
            </div>
            <div className="bubble" onClick={handleAddGifItem}>
              <img src={gif} alt="GIF Bubble" />
              GIF
            </div>
          </div>

          <div className="sub-header">Inputs</div>
          <div className="bubbles">
            <div className="bubble" onClick={handleAddTextInputItem}>
              <img src={textInput} alt="Text Input" />
              Text
            </div>
            <div className="bubble" onClick={handleAddNumberInputItem}>
              <img src={numberInput} alt="Number Input" />
              Number
            </div>
            <div className="bubble" onClick={handleAddEmailInputItem}>
              <img src={emailInput} alt="Email Input" />
              Email
            </div>
            <div className="bubble" onClick={handleAddPhoneInputItem}>
              <img src={phoneInput} alt="Phone Input" />
              Phone
            </div>
            <div className="bubble" onClick={handleAddDateInputItem}>
              <img src={dateInput} alt="Date Input" />
              Date
            </div>
            <div className="bubble" onClick={handleAddRateInputItem}>
              <img src={ratingInput} alt="Rating Input" />
              Rating
            </div>
            <div className="bubble">
              <img src={buttonInput} alt="Button Input" />
              Button
            </div>
          </div>
        </div>
      </div>

      <div className="flowchart-container">
        <div className="start-header">
          <img src={start} alt="start" />
          Start
        </div>
        {dynamicItems.map((item) => (
          <div className="text-item" key={item.id}>
            <img src={deleteLogo} alt="delete" id="deleteId" />
            <div className="item-header">
              {item.type === "text"
                ? "Text"
                : item.type === "image"
                ? "Image"
                : item.type === "video"
                ? "Video"
                : item.type === "gif"
                ? "GIF"
                : item.type === "text-input"
                ? "Text Input"
                : item.type === "number-input"
                ? "Input Number"
                : item.type === "email-input"
                ? "Input Email"
                : item.type === "phone-input"
                ? "Input Phone"
                : item.type === "date-input"
                ? "Input Date"
                : item.type === "rate-input"
                ? "Input Rate"
                : "Unknown"}{" "}
              {item.id}
            </div>
            <div className="item-data">
              {item.type === "text" ? (
                <>
                  <img src={textBubble} alt="Text Bubble" />
                  <input type="text" placeholder={item.placeholder} />
                </>
              ) : item.type === "image" ? (
                <>
                  <img src={item.src} alt="Images Item" />
                  <input type="text" placeholder={item.placeholder} />
                </>
              ) : item.type === "video" ? (
                <>
                  <img src={item.src} alt="Video Item" />
                  <input type="text" placeholder={item.placeholder} />
                </>
              ) : item.type === "gif" ? (
                <>
                  <img src={item.src} alt="GIF Item" />
                  <input type="text" placeholder={item.placeholder} />
                </>
              ) : item.type === "text-input" ? (
                <>
                  <img src={item.src} alt="Text Input" />
                  <input type="text" placeholder={item.placeholder} disabled />
                </>
              ) : item.type === "number-input" ? (
                <>
                  <img src={item.src} alt="Number Input" />
                  <input
                    type="number"
                    placeholder={item.placeholder}
                    disabled
                  />
                </>
              ) : item.type === "email-input" ? (
                <>
                  <img src={item.src} alt="Email Input" />
                  <input type="email" placeholder={item.placeholder} disabled />
                </>
              ) : item.type === "phone-input" ? (
                <>
                  <img src={item.src} alt="Phone Input" />
                  <input type="tel" placeholder={item.placeholder} disabled />
                </>
              ) : item.type === "date-input" ? (
                <>
                  <img src={item.src} alt="Date Input" />
                  <input type="text" placeholder={item.placeholder} disabled />
                </>
              ) : item.type === "rate-input" ? (
                <>
                  <img src={item.src} alt="Rate Input" />
                  <input type="text" placeholder={item.placeholder} disabled />
                </>
              ) : (
                <div>Unknown Item Type</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flow;
