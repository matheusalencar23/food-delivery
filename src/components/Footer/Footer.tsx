import "./style.scss";
import instagramLogo from "../../assets/instagram.svg";
import facebookLogo from "../../assets/facebook.svg";
import twitterLogo from "../../assets/twitter.svg";
import emailLogo from "../../assets/email.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logos">
          <p>F&D</p>
          <div className="footer__logos-social">
            <img src={instagramLogo} alt="Logo-Instagram" />
            <img src={facebookLogo} alt="Logo-Facebook" />
            <img src={twitterLogo} alt="Logo-Twitter" />
            <img src={emailLogo} alt="Logo-Email" />
          </div>
        </div>
        <div className="footer__lists">
          <p>Our product</p>
          <ul>
            <li>Support</li>
            <li>Guide</li>
          </ul>
        </div>
        <div className="footer__lists">
          <p>Terms & policies</p>
          <ul>
            <li>Terms of services</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer__lists">
          <p>Company</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer__lists">
          <p>Contact</p>
          <ul>
            <li>(+62) 1234567890</li>
            <li>f&d@email.com</li>
          </ul>
        </div>
        <div className="footer__lists">
          <p>Food delivery</p>
          <ul>
            <li>KFC delivery</li>
            <li>Bangu tanjung delivery</li>
          </ul>
        </div>
      </div>
      <span className="footer__rights">
        &copy; NameBrand 2022 - All Rights Reserved
      </span>
    </footer>
  );
}
