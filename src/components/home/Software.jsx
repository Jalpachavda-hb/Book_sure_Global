import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../../assets/Images/ss/software_1.jpg";
import slider2 from "../../assets/Images/ss/software_1.jpg";
import slider3 from "../../assets/Images/ss/software_2.jpg";
import slider4 from "../../assets/Images/ss/software_3.jpg";
import slider5 from "../../assets/Images/ss/software_4.jpg";
import slider6 from "../../assets/Images/ss/software_5.jpg";

import "./Hero.css";

const logos = [
  { src: slider1, alt: "eClinicalWorks" },
  { src: slider2, alt: "Dentrix" },
  { src: slider6, alt: "Cerner" },
  { src: slider3, alt: "NextGen Healthcare" },
  { src: slider4, alt: "OpenDental" },
  { src: slider5, alt: "Optum360" },
  { src: slider6, alt: "Cerner" },
];

const Software = () => {
  return (
    <section className="software-section py-5  ">
      <div className="container">
        <div className="row align-items-center  ">
          <div className="hero-content-left  animated-content position-relative z-index text-white">
            <h3 className="page-tital mt-1 ">SoftWares</h3>
            <p className="contain-colur">
              “Cutting-Edge and Next-Gen Software Tailored to Your Needs”
            </p>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          speed={3000}
          autoplay={{
            delay: 0, // continuous scrolling
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="software-logo d-flex align-items-center justify-content-center ">
                <img src={logo.src} alt={logo.alt} className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Software;
