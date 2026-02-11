// import heroBg from "../../assets/Images/Hero/hero.jpg";
// import "./Hero.css";
// import Help from "../home/Help";
// import About from "../home/About/About";
// import Software from "./Software";
// import Strength from "./Strength";
// import Testimonial from "./Testimonial";

// export default function Hero() {
//   return (
//     <>
//       <section
//         className="hero-section"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       >
//         <div className="container">
//           <div className="row align-items-center min-vh-80">
//             <div className="col-lg-6">
// <h1>
//   CLEAN NUMBERS <br />
//   CLEAN BOOKS!
// </h1>
//               <p>Financial clarity backed by regulatory expertise</p>
//               <a href="/services">
//                 <button className="btn hero_btn px-4 py-2  mt-3">
//                   Explore More →
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//       <About />
//       <Help />
//       <Software />
//       <Strength />
//       <Testimonial />
//     </>
//   );
// }

import { useEffect, useState } from "react";
import "./Hero.css";
import ConsultationSection from "../demoservices/ConsultationSection";
import { getHero } from "../../utils/Getdata";

import Help from "../home/Help";
import About from "../home/About/About";
import Software from "./Software";
import Strength from "./Strength";
import Testimonial from "./Testimonial";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  // ✅ Fetch Hero Section Data
  useEffect(() => {
    const fetchHero = async () => {
      const res = await getHero();

      if (res.success) {
        setHeroData(res.data);
      }
    };

    fetchHero();
  }, []);

  // ✅ Show Loading Until Data Comes
  if (!heroData) {
    return (
      <section className="hero-section text-white text-center py-5">
        <h3>Loading Hero Section...</h3>
      </section>
    );
  }

  return (
    <>
      {/* ✅ HERO SECTION */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroData.background_image})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center min-vh-80">
            <div className="col-lg-6 text-white">
              {/* ✅ Title */}
              {/* <h1>{heroData.title}</h1> */}
              <h1>
                CLEAN NUMBERS <br />
                CLEAN BOOKS!
              </h1>
              {/* ✅ Subtitle */}
              <p>{heroData.subtitle}</p>

              {/* ✅ Button */}
              <a href={heroData.button_link}>
                <button className="btn hero_btn px-4 py-2 mt-3">
                  {heroData.button_text} →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Other Sections */}
      <About />
      <Help />
      <Software />
      <Strength />
      <ConsultationSection />
      <Testimonial />
    </>
  );
}
