// import React from "react";
// import "./Aboutus.css";
// import ceo from "../../assets/Images/Aboutus/team.jpg";
// import mainImg from "../../assets/Images/Aboutus/aboutf.jpg";
// import starImg from "../../assets/Images/Aboutus/round.png";
// import { FaPhoneVolume } from "react-icons/fa6";
// import card from "../../assets/Images/Aboutus/98img.jpg";
// const FirstSection = () => {
//   return (
//     <section className="about-section">
//       {/* Decorative rotating image */}
//       <img src={starImg} alt="decor" className="bg-star" />

//       <div className="container">
//         <div className="about-grid">
//           {/* LEFT IMAGE */}
//           <div className="about-image animate-up">
//             <img src={mainImg} alt="Consulting" />

//             {/* BADGE */}
//             <div className="miniimg">
//               <img src={card} alt="Consulting" />
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="about-content">
//             <span className="subtitle">WHO WE ARE</span>

//             <h1 className="mission-title">
//               Booksure Global Private Limited – Your Trusted Bookkeeping Partner
//             </h1>

//             <p className="about-text">
//               Booksure Global Private Limited is a specialized bookkeeping and
//               accounting outsourcing firm serving CPA firms and businesses
//               across the United States, Australia, and the UAE.
//             </p>
//             <p className="about-text">
//               We provide comprehensive bookkeeping services including ongoing
//               bookkeeping, cleanup bookkeeping, and catch-up bookkeeping, along
//               with accounting services such as account reconciliations, payroll
//               processing support, month-end and year-end closing, and
//               preparation of accurate financial statements.
//             </p>

//             <p className="about-text">
//               Led by Chartered Accountants and certified professionals in Xero
//               and QuickBooks, we follow a compliance-driven approach aligned
//               with country-specific regulations, ensuring clean, structured, and
//               reliable financial records.
//             </p>

//             <p className="about-text">
//               We act as a trusted extension of our clients’ finance teams,
//               delivering accurate, scalable, and compliance-ready solutions that
//               support confident business growth.
//             </p>

//             {/* EXPERIENCE + LIST stays same */}
//             <div className="experience-wrapper">
//               {/* <div className="experience-card">
//                 <h2>11</h2>
//                 <div className="exp-text">
//                   <span>YEARS</span>
//                   <span>EXPERIENCE</span>
//                   <span>IN CONSULTING</span>
//                 </div>
//               </div> */}

//               <div className="experience-divider"></div>

//               <ul className="experience-list">
//                 <li>
//                   <span className="arrow">➜</span>
//                   Compliance-Driven Bookkeeping
//                 </li>
//                 <li>
//                   <span className="arrow">➜</span>
//                   Certified Xero & QuickBooks Experts
//                 </li>
//                 <li>
//                   <span className="arrow">➜</span>
//                   Trusted Global Outsourcing Partner
//                 </li>
//               </ul>
//             </div>

//             {/* CONTACT BOX */}
//             <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 contact-wrapper mt-4">

//             <div className="d-flex align-items-center gap-3">
//                 <img
//                   src={ceo}
//                   alt="CEO"
//                   className="rounded-circle"
//                   width="55"
//                   height="55"
//                 />

//                 <div>
//                   <div className="signature-name">Booksure Team</div>
//                   <div className="fw-semibold text-primary">
//                     Chartered Accounting Experts
//                   </div>
//                 </div>
//               </div>

//             {/* RIGHT HOTLINE */}
//             <div className="d-flex align-items-center gap-3">
//                 <div className="phone-icon">
//                   <FaPhoneVolume />
//                 </div>

//                 <div>
//                   <div className="text-muted small">Hot Line Number</div>
//                   <a
//                     href="tel:+1238989444"
//                     className="fw-bold text-primary text-decoration-none"
//                   >
//                     +123 8989 444
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FirstSection;

import React, { useEffect, useState } from "react";
import "./Aboutus.css";

import starImg from "../../assets/Images/Aboutus/round.png";
// import card from "../../assets/Images/Aboutus/98img.jpg";
// import { FaLocationDot } from "react-icons/fa6";
import { GetAboutmain } from "../../utils/Getdata";

const FirstSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const res = await GetAboutmain();
      if (res?.success && res.data) {
        setData(res.data);
      } else {
        setData(null);
      }
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Hide full section if no data
  if (loading || !data) {
    return null;
  }

  return (
    <section className="about-section">
      <img src={starImg} alt="decor" className="bg-star" />

      <div className="container">
        <div className="about-grid">
          {/* IMAGE SECTION */}
          <div className="about-image animate-up">
            <img src={data.main_image} alt="Consulting" />

            {/* <div className="miniimg">
              <img src={card} alt="Consulting" />
            </div> */}
          </div>

          {/* CONTENT */}
          <div className="about-content">
            <span className="subtitle">{data.subtitle}</span>
            <h1 className="mission-title">{data.title}</h1>

            {data.description &&
              data.description.split(/\r?\n\r?\n+/).map((para, index) => (
                <p key={index} className="about-text">
                  {para}
                </p>
              ))}

            <div className="experience-wrapper">
              <div className="experience-divider"></div>

              <ul className="experience-list">
                {data.experience_list?.map((item, index) => (
                  <li key={index}>
                    <span className="arrow">➜</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Section */}
            {/* <div className="d-flex align-items-center justify-content-between flex-wrap gap-4 contact-wrapper mt-4"> */}
              {/* <div className="d-flex align-items-center gap-3">
                <div className="phone-icon">
                  <FaLocationDot />
                </div>
                <div>
                  <div className="fw-semibold text-primary">Ahmedabad</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="phone-icon">
                  <FaLocationDot />
                </div>
                <div>
                  <div className="fw-semibold text-primary">Canada</div>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
