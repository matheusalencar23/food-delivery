import Card from "./Card/Card";
import ServiceImage1 from "../../assets/service-card-1.png";
import ServiceImage2 from "../../assets/service-card-2.png";
import ServiceImage3 from "../../assets/service-card-3.png";
import "./style.scss";

export default function OurServices() {
  return (
    <section className="services">
      <h4 className="section-title">Our services</h4>
      <h5 className="section-subtitle">Our serve just for you</h5>
      <div className="services__cards">
        <Card
          img={ServiceImage1}
          alt="Service1"
          title="Delivery food"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <Card
          img={ServiceImage2}
          alt="Service2"
          title="Easy to order"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <Card
          img={ServiceImage3}
          alt="Service3"
          title="Fastest delivery"
          description="Lorem ipsum dolor sit amet consectetur."
        />
      </div>
    </section>
  );
}
