import Button from "../../components/Button/Button";
import "./style.scss";
import HeroImage from "../../assets/hero.png";
import User1Image from "../../assets/hero-user-1.png";
import User2Image from "../../assets/hero-user-2.png";
import User3Image from "../../assets/hero-user-3.png";
import Star from "../../components/Icons/Star";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__size hero__left">
        <h2>
          Don't wanna <br /> make you have <br /> a bad day
        </h2>
        <h3>
          Our job is delivering a delicious food with fast, <br /> freen
          delivery and easy
        </h3>
        <div className="hero__buttons">
          <Button variant="primary">Order now</Button>
          <Button variant="secondary">How to order</Button>
        </div>
        <div className="hero__rating">
          <div className="hero__rating-users">
            <img src={User1Image} alt="User1" />
            <img src={User2Image} alt="User2" />
            <img src={User3Image} alt="User3" />
          </div>
          <div className="hero__rating-data">
            <p>Customer Review</p>
            <span>
              <Star /> 4.8 <span>(5K reviews)</span>
            </span>
          </div>
        </div>
      </div>
      <div className="hero__size hero__right">
        <img src={HeroImage} alt="HeroImage" />
      </div>
    </section>
  );
}
