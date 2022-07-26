import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.scss";

import { imageList } from "./data";

export default function Popular() {
  return (
    <section className="popular">
      <h4 className="section-title">Popular delivery</h4>
      <h5 className="section-subtitle">Trending food</h5>
      <Swiper
        className="popular__carousel"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        navigation={true}
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {imageList.map((data, i) => {
          return (
            <SwiperSlide key={i} className="popular__carousel-item">
              <img
                src={data.image}
                alt={`CarouselImage${i}`}
                className="popular__carousel-image"
              />
              <span className="popular__carousel-data popular__carousel-price">
                ${data.price}
              </span>
              <div className="popular__carousel-data">
                <span className="popular__carousel-name">{data.name}</span>
                <span className="popular__carousel-stars">{data.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
