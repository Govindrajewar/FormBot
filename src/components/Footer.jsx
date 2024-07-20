import "../style/Footer.css";
import linkImg from "../assets/HomePage/Footer/link.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container-developer">
        Made with ❤️ by <br />
        <a href="">@cuvette</a>
      </div>
      <div className="footer-container">
        <a href="">
          Status &nbsp;
          <img src={linkImg} alt="link" />
        </a>

        <a href="">
          Documentation &nbsp;
          <img src={linkImg} alt="link" />
        </a>
        <a href="https://roadmap.sh/react">
          Roadmap &nbsp;
          <img src={linkImg} alt="link" />
        </a>
        <a href="">Pricing</a>
      </div>
      <div className="footer-container">
        <a href="">
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
        <a href="">OSS Friends</a>
      </div>
      <div className="footer-container">
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer;
