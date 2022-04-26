import React from "react";
import "../BodyStyles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import styles from "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { injectIntl } from "react-intl";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

 function BodytopSlider({intl}) {
  
  return (
    <div className="md:flex-row md:flex md:w-full md:justify-around mt-4 md:py-3">
      <div className="w-full md:w-7/12 m ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          style={{direction:"ltr"}}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <img
              className="md:rounded-3xl"
              src="/assets/images/askquestion.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:rounded-3xl"
              src="/assets/images/Gplus.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="md:rounded-3xl"
              src="/assets/images/schoolcb.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-row w-full md:w-3/12 justify-around py-3 md:flex-col md:items-center md:my-0 ">
        <img
          className="w-5/12 rounded-3xl md:w-full"
          src="/assets/images/digistyle.jpg"
          alt=""
        />
        <img
          className="w-5/12 rounded-3xl md:w-full"
          src="/assets/images/digikalajet.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
export default injectIntl(BodytopSlider);