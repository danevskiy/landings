import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 mb-5"
      >
       
        <SwiperSlide>
          <img src="/images/product-image1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-image2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-image3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-image4.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={24}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="productSwiper"
      >
        <SwiperSlide>
          <img src="/images/product-image1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-image2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-image3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-image4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
