import "../../style/Footer.css";
import linkImg from "../../assets/HomePage/Footer/link.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container-developer">
        Made with ❤️ by <br />
        <a href="https://cuvette.tech/app/student/">@cuvette</a>
      </div>
      <div className="footer-container">
        <a href="https://www.npmjs.com/package/http-status-codes">
          Status &nbsp;
          <img src={linkImg} alt="link" />
        </a>

        <a href="https://legacy.reactjs.org/docs/getting-started.html">
          Documentation &nbsp;
          <img src={linkImg} alt="link" />
        </a>
        <a href="https://roadmap.sh/react">
          Roadmap &nbsp;
          <img src={linkImg} alt="link" />
        </a>
        <a href="https://cuvette.tech/placement-guarantee-program/">Pricing</a>
      </div>
      <div className="footer-container">
        <a href="https://discord.com/">
          Discord &nbsp;
          <img src={linkImg} alt="link" />
        </a>
        <a href="https://github.com/Govindrajewar">
          GitHub repository &nbsp;
          <img src={linkImg} alt="link" />
        </a>
        <a href="https://x.com/who_abhirajewar">
          Twitter &nbsp;
          <img src={linkImg} alt="link" />
        </a>
        <a href="https://www.linkedin.com/in/govind-rajewar/">
          LinkedIn &nbsp;
          <img src={linkImg} alt="link" />
        </a>
        <a href="https://openbb.co/oss-friends">OSS Friends</a>
      </div>
      <div className="footer-container">
        <a href="https://legacy.reactjs.org/docs/faq-ajax.html">About</a>
        <a href="https://github.com/Govindrajewar">Contact</a>
        <a href="https://opensource.fb.com/legal/terms/">Terms of Service</a>
        <a href="https://opensource.fb.com/legal/privacy/">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer;
