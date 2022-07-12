import "./style.scss";
import ImgSupport1 from "../../assets/supportby-1.png";
import ImgSupport2 from "../../assets/supportby-2.png";
import ImgSupport3 from "../../assets/supportby-3.png";
import ImgSupport4 from "../../assets/supportby-4.png";
import ImgSupport5 from "../../assets/supportby-5.png";

export default function SupportBy() {
  return (
    <div className="support__container">
      <div className="suppport__logo">
        <img src={ImgSupport1} alt="Support-1" />
      </div>
      <div className="suppport__logo">
        <img src={ImgSupport2} alt="Support-1" />
      </div>
      <div className="suppport__logo">
        <img src={ImgSupport3} alt="Support-1" />
      </div>
      <div className="suppport__logo">
        <img src={ImgSupport4} alt="Support-1" />
      </div>
      <div className="suppport__logo">
        <img src={ImgSupport5} alt="Support-1" />
      </div>
    </div>
  );
}
