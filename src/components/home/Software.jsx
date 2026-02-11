// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/autoplay";
// import "bootstrap/dist/css/bootstrap.min.css";
// import slider1 from "../../assets/Images/ss/QuickBooksOnline.jpg";
// import slider2 from "../../assets/Images/ss/Xero.jpg";
// import slider3 from "../../assets/Images/ss/Sage.jpg";
// import slider5 from "../../assets/Images/ss/myob.png";
// import slider4 from "../../assets/Images/ss/ZohoBooks.jpg";
// import slider6 from "../../assets/Images/ss/Tellyprime.jpg";
// import slider7 from "../../assets/Images/ss/wawelogo.jpg";
// import slider8 from "../../assets/Images/ss/Gusto.jpg";
// import slider9 from "../../assets/Images/ss/hubdoc.jpg";
// import slider10 from "../../assets/Images/ss/Dext.jpg";
// import "./Hero.css";

// const logos = [
//   { src: slider1, alt: "QuickBooks Online" },
//   { src: slider2, alt: "Xero" },
//   { src: slider3, alt: "Sage" },
//   { src: slider6, alt: "myob" },
//   { src: slider4, alt: "ZohoBooks" },
//   { src: slider5, alt: "Tellyprime" },
//   { src: slider6, alt: "wawelogo" },
//   { src: slider7, alt: "Wavelogo" },
//   { src: slider8, alt: "Gusto" },
//    { src: slider9, alt: "hubdoc" },
//       { src: slider10, alt: "Dext" },
// ];

// const Software = () => {
//   return (
//     <section className="software-section py-5  ">
//       <div className="container">
//         <div className="row align-items-center  ">
//           <div className="hero-content-left  animated-content position-relative z-index text-white">
//             <h3 className="page-tital mt-1 ">SoftWares</h3>
//             <p className="contain-colur">
//               “Cutting-Edge and Next-Gen Software Tailored to Your Needs”
//             </p>
//           </div>
//         </div>
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           grabCursor={true}
//           speed={3000}
//           autoplay={{
//             delay: 0, // continuous scrolling
//             disableOnInteraction: false,
//           }}
//           spaceBetween={30}
//           breakpoints={{
//             320: { slidesPerView: 2 },
//             576: { slidesPerView: 3 },
//             768: { slidesPerView: 4 },
//             992: { slidesPerView: 5 },
//             1200: { slidesPerView: 6 },
//           }}
//         >
//           {logos.map((logo, index) => (
//             <SwiperSlide key={index}>
//               <div className="software-logo d-flex align-items-center justify-content-center ">
//                 <img src={logo.src} alt={logo.alt} className="img-fluid" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Software;

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "./Hero.css";

import { fetchSoftware } from "../../utils/Getdata";

const Software = () => {
  const [logos, setLogos] = useState([]);

  // ✅ Fetch Software Images from API
  useEffect(() => {
    const getSoftwareImages = async () => {
      try {
        const data = await fetchSoftware();
        setLogos(data);
      } catch (error) {
        console.log("Software API Error:", error);
      }
    };

    getSoftwareImages();
  }, []);

  return (
    <section className="software-section py-5">
      <div className="container">
        {/* ✅ Heading */}
        <div className="row align-items-center">
          <div className="hero-content-left animated-content position-relative z-index text-white">
            <h3 className="page-tital mt-1">SoftWares</h3>
            <p className="contain-colur">
              “Cutting-Edge and Next-Gen Software Tailored to Your Needs”
            </p>
          </div>
        </div>

        {/* ✅ Show Only If Data Exists */}
        {logos.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            loop={true}
            grabCursor={true}
            speed={3000}
            autoplay={{
              delay: 0,
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
            {/* ✅ Dynamic API Logos */}
            {logos.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="software-logo d-flex align-items-center justify-content-center">
                  {/* ✅ Image From Backend */}
                  <img
                    src={item.image}
                    alt={`software-${item.id}`}
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-white mt-4">Loading software logos...</p>
        )}
      </div>
    </section>
  );
};

export default Software;
