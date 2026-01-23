// import React from "react";

// import heroImg from "../../assets/Images/Aboutus/banner3.webp"; // background image
// import "./Aboutus.css";
// import sign from "../../assets/Images/Aboutus/tjpc_logo.jpg";
// const OurAssociate = () => {
//   return (
//     <section
//       className="hero-finance mb-5"
//       style={{ backgroundImage: `url(${heroImg})` }}
//     >
//       <div className="container position-relative">
//         {/* CONTENT CARD */}
//         <div className="hero-card">
//           {/* LEFT BADGE */}

//           {/* TEXT */}
//           <div className="hero-content">
//             {/* <span className="hero-subtitle">WE ARE EXPERT IN THIS FIELD</span> */}

//             <h1 className="mission-title">OUR ASSOCIATE</h1>

//             <p>
//               Trupal J. Patel & Co., the backbone of Integrity, founded by
//               Trupal Patel in 2003, is a leading Chartered Accountant firm. With
//               over 20 years of expertise, they offer comprehensive financial and
//               advisory services, including audit, taxation, and insolvency, to
//               diverse industries. Their seasoned team delivers customized
//               solutions, ensuring efficiency and precision. Committed to
//               integrity and a client-first approach, they drive sustainable
//               growth for businesses.
//             </p>

//             <div >
//             <img className="ass_img" src={sign} alt="25 Years Experience" />
//           </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurAssociate;

import React from "react";
import "./Aboutus.css";

import founder1 from "../../assets/Images/Hero/f1.png";
import founder2 from "../../assets/Images/Hero/f2.png"; // replace with real image
import bgImg from "../../assets/Images/Services/pngtree-geometric-color-block-simple-light-blue-image_4913.jpg";
const OurAssociate = () => {
  return (
    <section
      className="our-associate-section"
     
    >
      <div className="associate-overlay"
      
      
      >
        <div className="container">
          {/* HEADER */}
          <div className="associate-header">
            <h2>Our Associates</h2>
            <p>Leadership That Builds Trust & Excellence</p>
          </div>

          {/* FOUNDERS */}
          <div className="associate-grid">
            {/* FOUNDER 1 */}
            <div className="associate-card">
              <div className="associate-image">
                <img src={founder1} alt="Trupal J. Patel" />
              </div>

              <div className="associate-content">
                <h4>Trupal J. Patel</h4>
                <span>Founder & Chartered Accountant</span>

                <p>
                  Founder of Trupal J. Patel & Co., Trupal Patel brings over 20
                  years of expertise in audit, taxation, and advisory services.
                  Known for precision and integrity, he delivers tailored
                  financial solutions across diverse industries.
                </p>
              </div>
            </div>

            {/* FOUNDER 2 */}
            <div className="associate-card">
              <div className="associate-image">
                <img src={founder2} alt="Co-Founder" />
              </div>

              <div className="associate-content">
                <h4>Associate Partner Name</h4>
                <span>Co-Founder / Partner</span>

                <p>
                  With strong expertise in compliance, accounting, and financial
                  advisory, our associate partner supports businesses with
                  strategic insights, operational efficiency, and sustainable
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAssociate;
