import "./style.scss";
import foodImg1 from "../../assets/carousel-image-1.jpg";
import foodImg2 from "../../assets/carousel-image-2.jpg";
import foodImg3 from "../../assets/carousel-image-3.jpg";
import userImg1 from "../../assets/hero-user-1.png";
import userImg2 from "../../assets/hero-user-3.png";
import Comment from "../../components/Comment/Comment";

export default function Comments() {
  return (
    <section className="comments">
      <h4 className="section-title">What they are say</h4>
      <h5 className="section-subtitle">Comment for food</h5>
      <div className="comments__content">
        <div className="comments__before">
          <img src={foodImg1} alt="Food-1" />
        </div>
        <div className="comments__main">
          <div className="comments__main-user">
            <Comment
              img={userImg1}
              imageLeft
              author="Smith Teen"
              occupation="Food vlogger"
              comment="All service provided is so perfect and fast, and I'm so happy
                to order from this company"
            />
          </div>
          <img src={foodImg2} alt="Food-2" />
          <div className="comments__main-user">
            <Comment
              img={userImg2}
              author="Bella Wish"
              occupation="Food vlogger"
              comment="All service provided is so perfect and fast, and I'm so happy
                to order from this company"
            />
          </div>
        </div>
        <div className="comments__after">
          <img src={foodImg3} alt="Food-3" />
        </div>
      </div>
    </section>
  );
}
