import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../../images/01.jpg";
import image2 from "../../images/02.jpg";
import image3 from "../../images/03.jpg";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={image1} alt="" className="h-[600px] w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="" className="h-[600px] w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="" className="h-[600px] w-full" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
