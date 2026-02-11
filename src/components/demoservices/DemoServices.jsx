// import PageBanner from "../PageBanner/PageBanner";
// import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
// import { FaCalculator } from "react-icons/fa";
// import { FaBookAtlas } from "react-icons/fa6";
// import ConsultationSection from "../demoservices/ConsultationSection";
// import { useNavigate } from "react-router-dom";
// import "../Services/services.css";
// const DemoServices = () => {
//   const servicesData = [
//     {
//       id: 1,
//       slug: "bookkeeping",
//       icon: <FaBookAtlas />,
//       title: "Bookkeeping Services",
//       description:
//         "We provide end-to-end bookkeeping solutions to maintain accurate, organized, and compliant financial records for your business.",
//     },
//     {
//       id: 2,
//       slug: "accounting",
//       icon: <FaCalculator />,
//       title: "Accounting Services",
//       description:
//         "We ensure financial accuracy and smooth closing processes through detailed accounting support and reporting.",
//     },
//   ];
//   const navigate = useNavigate();
//   return (
//     <>
//       <PageBanner title="Services" bgImage={bannerImg} />
//       <section
//         className="split-services-section"
//         style={{
//           backgroundImage: `url(${require("../../assets/Images/Services/about_shape02.png")})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center bottom",
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="split-overlay">
//           <div className="container">
//             {/* HEADER */}
//             <div className=" mb-5 hero-content-left animated-content position-relative z-index text-white mb-4">
//               <h3 className="page-tital mt-1">Our Services</h3>
//               <p className="contain-colur">“What We Provide”</p>
//             </div>

//             {/* SERVICES */}
//             <div className="split-services-grid mt-5">
//               {servicesData.map((service, index) => (
//                 <div
//                   key={service.id}
//                   className={`split-item ${index % 2 === 0 ? "left" : "right"}`}
//                   onClick={() => navigate(`/services/${service.slug}services`)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <div className="split-icon">{service.icon}</div>

//                   <div className="split-content">
//                     <h4>{service.title}</h4>
//                     <span className="split-line"></span>
//                     <p>{service.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <ConsultationSection />
//     </>
//   );
// };

// export default DemoServices;



import React, { useEffect, useState } from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import { FaCalculator } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import ConsultationSection from "../demoservices/ConsultationSection";
import { useNavigate } from "react-router-dom";
import "../Services/services.css";
import { getActiveServices } from "../../utils/Getdata";

/* ✅ ICONS (CYCLIC) */
const ICONS = [<FaBookAtlas />, <FaCalculator />];

const DemoServices = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const res = await getActiveServices();
    console.log("Demo Services API:", res);

    // only active services
    setServices(res.filter((s) => s.is_active === 1));
  };

  // ✅ IF NO DATA → RENDER NOTHING
  if (!services || services.length === 0) return null;

  return (
    <>
      <PageBanner title="Services" bgImage={bannerImg} />

      <section
        className="split-services-section"
        style={{
          backgroundImage: `url(${require("../../assets/Images/Services/about_shape02.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="split-overlay">
          <div className="container">
            {/* HEADER */}
            <div className="hero-content-left text-white mb-5">
              <h3 className="page-tital mt-1">Our Services</h3>
              <p className="contain-colur">“What We Provide”</p>
            </div>

            {/* SERVICES */}
            <div className="split-services-grid mt-5">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`split-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                  onClick={() =>
                    navigate(`/services/${service.slug}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="split-icon">
                    {ICONS[index % ICONS.length]}
                  </div>

                  <div className="split-content">
                    <h4>{service.service_name}</h4>
                    <span className="split-line"></span>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationSection />
    </>
  );
};

export default DemoServices;