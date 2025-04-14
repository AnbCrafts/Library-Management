import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/assets.js";

const BannerGallery = () => { 
  const slides = [
    { image: assets.book, text: "Explore a vast collection of books" },
    { image: assets.famous, text: "Find rare and unique literature" },
    { image: assets.gain, text: "Expand your knowledge with new reads" },
    { image: assets.scifi, text: "Immerse yourself in different worlds" },
    { image: assets.top, text: "Discover top-rated books of the year" },
    { image: assets.power, text: "Unleash the power of reading" },
    { image: assets.mastermind, text: "Meet the minds behind the books" },
  ];

  return (
    <div className="w-[900px]  h-[60vh] absolute right-10 overflow-hidden rounded-lg shadow-lg">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h2 className=" text-center w-full text-3xl py-1 mb-2 bg-[#555555af] text-[#fff] rounded-sm font-semibold">{slide.text}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerGallery;
