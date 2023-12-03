import "./Footer.css";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="icons">
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </div>
          <div className="text">
            <a href="">Info</a>
            <a href="">Contact</a>
            <a href="">Location</a>
            <div className="copy">
              <a href="">Terms of Use</a>
              <a href="">Privacy Policy</a>
              <p>© Luxor Watches</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
