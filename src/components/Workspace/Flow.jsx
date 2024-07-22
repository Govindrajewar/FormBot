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
            <div className="bubble">
              <img src={numberInput} alt="Number Input" />
              Number
            </div>
            <div className="bubble">
              <img src={emailInput} alt="Email Input" />
              Email
            </div>
            <div className="bubble">
              <img src={phoneInput} alt="Phone Input" />
              Phone
            </div>
            <div className="bubble">
              <img src={dateInput} alt="Date Input" />
              Date
            </div>
            <div className="bubble">
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
              ) : (
                <div>Unknown Item Type</div>
              )}
            </div>
            {/* <div className="item-warning">Required Field</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flow;
