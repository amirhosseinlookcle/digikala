import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <div className="w-8/12 my-5 sm:w-full sm:px-5 md:w-full lg:w-full xl:w-8/12">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        navigation={true}
        speed= {2000}
        className="mySwiper"
        style={{direction:"ltr"}}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
        }}
      >
        {cartItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div 
              style={{ height: "450px" }}
              className="cursor-pointer p-7 bg-white rounded-xl w-full flex flex-col items-center justify-around"
            >
              <div className="w-full">
                <img className="w-full" src={item.itemImage} alt="" />
              </div>
              <p className="w-full text-center">
                {item.itemName}
              </p>
              <div className="flex flex-row justify-around w-full">
                <span className="line-through text-opacity-50 text-black">
                  {item.itemPrice}
                </span>
                <span className="py-1 px-2 text-sm bg-red-500 text-white rounded-3xl">
                  {item.discount}
                </span>
              </div>
              <span className="font-extrabold">{item.itemPriceDiscounted}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
