// import React from "react";
// import "./Hero.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import shape from "../../assets/Images/hero-shape.svg";
// import bgImage from "../../assets/Images/homebg.jpg";
// import img1 from "../../assets/Images/home_figma.png";
// import img2 from "../../assets/Images/home_figma.png";
// import img3 from "../../assets/Images/main-slider1.png";
// import Help from "../home/Help";
// import About from "../home/About/About"
// import Software from "./Software";
// import Strength from "./Strength";
// import Testimonial from "./Testimonial";
// const slides = [
//   {
//     title: "Your Outsourced Partners In Accounting",
//     desc: "Professional accounting solutions tailored to your business needs.",
//     image: img1,
//   },
//   {
//     title: "Your Outsourced Partners In Tax & Payroll",
//     desc: "Reliable tax planning and payroll management services.",
//     image: img2,
//   },
//   {
//     title: "Your Outsourced Partners In Corporate & Research",
//     desc: "Corporate compliance and in-depth research support.",
//     image: img3,
//   },
// ];

// const Home = () => {
//   return (
//     <>
//       <nav className="navbar navbar-light"></nav>

//       <section
//         className="hero-equal-height gradient-overlay"
//         style={{
//           background: `url(${bgImage}) no-repeat top center / cover`,
//         }}
//       >
//         <div className="container">
//           <Swiper
//             modules={[Autoplay, EffectFade]}
//             // effect="fade"
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             loop={true}
//           >
//             {slides.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <div className="row align-items-center">
//                   {/* IMAGE */}
//                   <div className="col-md-6 col-lg-6">
//                     <div className="hero-content-left text-white">
//                       <img
//                         src={item.image}
//                         alt="hero"
//                         className="img-fluid home_img mb-5"
//                       />
//                     </div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="col-md-6 col-lg-6">
//                     <div className="hero-content-left text-white">
//                       <h1 className="text-white text-start">{item.title}</h1>
//                       <p className="lead homecontain text-start">{item.desc}</p>

//                       <div className="hero-btns mt-4">
//                         <button className="btn solid-white-btn">
//                           Explore More
//                           <span className="btn-icon">
//                             <MdKeyboardDoubleArrowRight />
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="shape-bottom">
//           <img src={shape} alt="shape" className="bottom-shape img-fluid" />
//         </div>
//       </section>
// <About />
// <Help/>
// <Software/>
//   <Strength/>
//   <Testimonial/>
//     </>
//   );
// };

// export default Home;

import heroBg from "../../assets/Images/Hero/hero.jpg";
import "./Hero.css";
import Help from "../home/Help";
import About from "../home/About/About";
import Software from "./Software";
import Strength from "./Strength";
import Testimonial from "./Testimonial";

export default function Hero() {
  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div className="row align-items-center min-vh-90">
            <div className="col-lg-6">
              <h1>
                Your Outsources <br />
                Partners in Corporate <br />& Research
              </h1>
              <p>Corporate compliance and in-depth research support.</p>
              <button className="btn hero_btn px-4 py-2">
                Explore More →
              </button>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Help />
      <Software />
      <Strength />
      <Testimonial />
    </>
  );
}
