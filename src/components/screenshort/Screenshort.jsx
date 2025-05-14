// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import "./ss.css";
// import ss1 from "../../assets/Images/ss/01.png";
// import ss2 from "../../assets/Images/ss/02.png";
// import ss3 from "../../assets/Images/ss/03.png";
// import ss4 from "../../assets/Images/ss/04.png";
// import ss5 from "../../assets/Images/ss/05.png";
// import ss6 from "../../assets/Images/ss/06.png";
// import ss7 from "../../assets/Images/ss/07.png";

// const ScreenshotsSection = () => {
//   const screenshots = [ss1, ss2, ss3, ss4, ss5, ss6, ss7];
//   // Add more screenshots as needed

//   return (
//     <section
//       id="screenshots"
//       className="screenshots-section ptb-100 gray-light-bg "
//     >
//       <div className="container">
//         <div className="hero-content-left  animated-content position-relative z-index text-white">
//           <h4 className="page-tital">Screenshots</h4>
//           <p className="contain-colur ">
//             “A quick look at Smart Box File in action”
//           </p>
//         </div>

//         <div className="row justify-content-center">
//           <div className="col-lg-12">
//             <div className="screen-slider-content">
//               <div className="screenshot-frame"></div>
// <Swiper
//   effect="coverflow"
//   grabCursor={true}
//   centeredSlides={true}
//   loop={true}
//   autoplay={{
//     delay: 3000,
//     disableOnInteraction: false,
//   }}
//   coverflowEffect={{
//     rotate: 0,
//     stretch: 0,
//     depth: 150,
//     modifier: 2,
//     slideShadows: false,
//   }}
//   pagination={{ clickable: true }}
//   breakpoints={{
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: "auto",
//     },
//   }}

//   modules={[Pagination, EffectCoverflow, Autoplay]}
//   className="mySwiper"
// >

//                 {screenshots.map((src, index) => (
//                   <SwiperSlide key={index}>
//                     <img src={src} alt={`screenshot ${index + 1}`} />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScreenshotsSection;
import React, { useState, useRef } from "react";
import "./ss.css";
import ss1 from "../../assets/Images/ss/01.png";
import ss2 from "../../assets/Images/ss/02.png";
import ss3 from "../../assets/Images/ss/03.png";
import ss4 from "../../assets/Images/ss/04.png";
import ss5 from "../../assets/Images/ss/05.png";
import ss6 from "../../assets/Images/ss/06.png";
import ss7 from "../../assets/Images/ss/07.png";

const images = [
  ss1,
  ss2,
  ss3,
  ss4,
  ss5,
  ss6,
  ss7,
];

const ScreenshotsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    if (deltaX > 50) nextImage();
    else if (deltaX < -50) prevImage();
  };

  return (
    <section  id="screenshorts">
      <div className="container ">
        <div className="row align-items-center  ">
          <div className="hero-content-left  animated-content position-relative z-index text-white">
            <h4 className="page-tital mt-1 ">Screenshots</h4>
            <p className="contain-colur">
             “A quick look at Smart Box File in action”
            </p>
          </div>
        </div>
      </div>
    <div className="carousel-container">

  
    {images.map((img, index) => {
  let className = "image-card";
  if (index === currentIndex) className += " main";
  else if (index === currentIndex + 1) className += " next";
  else if (index === currentIndex + 2) className += " next2";
  else if (index === currentIndex - 1) className += " prev";
  else if (index === currentIndex - 2) className += " prev2";
  else className += " hidden";

  return (
    <div
      key={index}
      className={className}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {index === currentIndex ? (
        <div className="phone-frame-wrapper">
          <img src={img} alt={`Image ${index + 1}`} />
        </div>
      ) : (
        <img src={img} alt={`Image ${index + 1}`} />
      )}
    </div>
  );
})}


      <button className="nav-button prev-button" onClick={prevImage}>
        &#8592;
      </button>
      <button className="nav-button next-button" onClick={nextImage}>
        &#8594;
      </button>
    </div>
    </section>
  );
};

export default ScreenshotsSection;
