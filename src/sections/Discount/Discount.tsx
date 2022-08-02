import "./style.scss";

import discountImage from "../../assets/amico.png";

export default function Discount() {
  return (
    <section className="discount">
      <div className="discount__image">
        <img src={discountImage} alt="ImageBack" />
      </div>
      <div className="discount__form">
        <h6>Get more discount if you order from us</h6>
        <p>
          Join with us then you must have get a discount and get promo from us
          to you, enjoy and happy to order
        </p>
        <form>
          <input type="text" placeholder="Your email address" />
          <button>Get</button>
        </form>
      </div>
    </section>
  );
}
