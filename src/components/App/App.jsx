import { Mousewheel, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { image1 } from 'img/screen-1';
import { image2 } from 'img/screen-2';
import { image3 } from 'img/screen-3';

import './App.css';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';

export const App = () => {
  return (
    <Swiper
      modules={[Mousewheel, Parallax]}
      speed={2500}
      parallax={{ enabled: true }}
      spaceBetween={20}
      mousewheel={{ enabled: true, sensitivity: 2.4 }}
      style={{ width: '100%', height: '100%' }}
    >
      <SwiperSlide
        style={{
          overflow: `hidden`,
        }}
      >
        <div
          className="slider__layer"
          data-swiper-parallax="35%"
          style={{
            backgroundImage: `url(${image1.layerBack})`,
          }}
        ></div>
        <div
          className="slider__layer"
          data-swiper-parallax="25%"
          style={{ backgroundImage: `url(${image1.layerMiddle})` }}
        ></div>
        <div
          className="slider__layer"
          data-swiper-parallax="14%"
          style={{ backgroundImage: `url(${image1.layerFront})` }}
        ></div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide slider__item">
        <div
          className="slider__layer"
          data-swiper-parallax="40%"
          style={{
            backgroundImage: `url(${image2.layerBack})`,
          }}
        ></div>
        <div
          className="slider__layer"
          data-swiper-parallax="34%"
          style={{
            backgroundImage: `url(${image2.layerGera})`,
          }}
        ></div>
        <div
          className="slider__layer"
          data-swiper-parallax="30%"
          style={{
            backgroundImage: `url(${image2.layerYen})`,
          }}
        ></div>

        <div
          className="slider__layer"
          data-swiper-parallax="14%"
          style={{
            backgroundImage: `url(${image2.layerFront})`,
          }}
        ></div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide slider__item">
        <div
          className="slider__layer"
          data-swiper-parallax="48%"
          style={{
            backgroundImage: `url(${image3.layerBack})`,
          }}
        ></div>
        <div
          className="slider__layer"
          data-swiper-parallax="35%"
          style={{
            backgroundImage: `url(${image3.layerMiddle})`,
          }}
        ></div>
        <div
          className="slider__layer"
          data-swiper-parallax="29%"
          style={{
            backgroundImage: `url(${image3.layerCiri})`,
          }}
        ></div>

        <div
          className="slider__layer"
          data-swiper-parallax="16%"
          style={{
            backgroundImage: `url(${image3.layerFront})`,
          }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};
