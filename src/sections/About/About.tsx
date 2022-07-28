import "./style.scss";
import aboutImg from "../../assets/about.png";
import userImg2 from "../../assets/hero-user-2.png";
import Rating from "../../components/Rating/Rating";

export default function About() {
  return (
    <section className="about">
      <div className="about__image">
        <img src={aboutImg} alt="AboutImg" />
      </div>
      <div className="about__data">
        <h4 className="section-title">What they are say</h4>
        <h5 className="section-subtitle">What they are says about us</h5>
        <div className="about__data-user">
          <img src={userImg2} alt="UserImage" />
          <div>
            <p>Erick Smith</p>
            <span>Food vlogger</span>
          </div>
        </div>
        <p className="about__data-comment">
          "All service provided is so perfect and <br /> fast, and I'm so happy
          to order from this company"
        </p>
        <Rating rating={4} />
      </div>
    </section>
  );
}
