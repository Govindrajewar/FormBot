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
  return (
    <div className="flow">
      <div className="flow-items">
        <div className="flow-container">
          <div className="sub-header sub-header-bubbles">Bubbles</div>
          <div className="bubbles">
            <div className="bubble">
              <img src={textBubble} alt="Text Bubble" />
              Text
            </div>
            <div className="bubble">
              <img src={image} alt="Images Bubble" />
              Image
            </div>
            <div className="bubble">
              <img src={video} alt="Video Bubble" />
              Video
            </div>
            <div className="bubble">
              <img src={gif} alt="GIF Bubble" />
              GIF
            </div>
          </div>

          <div className="sub-header">Inputs</div>
          <div className="bubbles">
            <div className="bubble">
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
        <div className="text-item-1">
          <img src={deleteLogo} alt="delete" id="deleteId"/>
          <div className="item-header">Text</div>
          <div className="item-data">
            <img src={textBubble} alt="Text Bubble" />
            <input type="text" placeholder="Click here to edit" />
          </div>
          <div className="item-warning">Required Field</div>

        </div>
      </div>
    </div>
  );
}

export default Flow;
