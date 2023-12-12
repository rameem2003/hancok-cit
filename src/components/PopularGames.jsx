import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import popular_gama_1 from "../assets/popular1.png";
import popular_gama_2 from "../assets/popular2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const PopularGames = () => {
  return (
    <section id="popular-games">
      <div className="container">
        <h1 className="title right-title">POPULAR GAMES AROUND THE WORLD</h1>

        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            576: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={false}
          navigation={true}
          pagination={{
            clickable: true,
            enabled: false,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="img">
              <img className="img-fluid slide-img" src={popular_gama_1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img className="img-fluid slide-img" src={popular_gama_2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img className="img-fluid slide-img" src={popular_gama_1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img className="img-fluid slide-img" src={popular_gama_2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img className="img-fluid slide-img" src={popular_gama_1} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PopularGames;
