import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";

const Assesories = () => {
  return (
    <section id="assesories">
      <div className="container">
        <h1 className="title left-title">WE PROVIDE ALL GAMING ACCESORIES</h1>

        <Swiper
          slidesPerView={4}
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
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },

            992: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          scrollbar={false}
          navigation={true}
          pagination={{
            enabled: false,
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <div className="row products">
            <SwiperSlide>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="assesories-card">
                  <h2>$95</h2>
                  <img src={item1} />
                  <h3>Gaming Controller</h3>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="assesories-card">
                  <h2>$95</h2>
                  <img src={item2} />
                  <h3>Gaming Keyboard</h3>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="assesories-card">
                  <h2>$95</h2>
                  <img src={item3} />
                  <h3>Gaming Monitor</h3>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="assesories-card">
                  <h2>$95</h2>
                  <img src={item1} />
                  <h3>Gaming Controller</h3>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="assesories-card">
                  <h2>$95</h2>
                  <img src={item2} />
                  <h3>Gaming Keyboard</h3>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="assesories-card">
                  <h2>$95</h2>
                  <img src={item3} />
                  <h3>Gaming Monitor</h3>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="assesories-card">
                  <h2>$95</h2>
                  <img src={item1} />
                  <h3>Gaming Controller</h3>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="assesories-card">
                  <h2>$95</h2>
                  <img src={item2} />
                  <h3>Gaming Keyboard</h3>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Assesories;
