import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import "./styles.css";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Mousewheel,
  Pagination,
  Scrollbar,
} from "swiper/modules";

export default function Carousel({ data }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        slidesPerGroup
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[
          EffectCoverflow,
          Autoplay,
          Pagination,
          FreeMode,
          Scrollbar,
          Mousewheel,
        ]}
        className="mySwiper m-auto max-h-[500px] w-[50vh] md:w-[80vh]"
        direction={"horizontal"}
        freeMode={true}
        speed={800}
        scrollbar={{
          hide: false,
          draggable: true,
          snapOnRelease: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1.5,
          releaseOnEdges: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              draggable={false}
              className="h-full w-full scale-75"
              src={item.imgUrl}
              alt="portfolio image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
