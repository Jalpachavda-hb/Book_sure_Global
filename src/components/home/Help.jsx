// import React from 'react'

// const Help = () => {
//   return (
//      <div className="row align-items-center  ">
//           <div className="hero-content-left  animated-content position-relative z-index text-white">
//             <h4 className="page-tital mt-1 ">HOW WE HELP</h4>
//             <p className="contain-colur">
//            "  Streamlining Success For Your Business with Our Expert Outsourcing Solutions"
//             </p>
//           </div>
//         </div>
//   )
// }

// export default Help

import React from "react";
// import "./Hero.css";
import bgImage from "../../assets/Images/bgabout.jpg";
import service from "../../assets/Images/Aboutus/service.jpg";

const Help = () => {
  return (
    <section
      id="about"
      className="hero-equal-height mt-5 ptb "
      style={{
        background: `url(${bgImage}) no-repeat top center / cover`,
      }}
    >
      <div className="container">
        <div className="row align-items-center  ">
          <div className="hero-content-left  animated-content position-relative z-index text-white">
            <h4 className="page-tital mt-1 ">How We Help </h4>
          </div>
        </div>
        <div className="hero-content-left  animated-content position-relative z-index text-white">
          {/* <h4 className="page-tital">Discover Integrity Data Services</h4> */}
        </div>
        <div className="row  ">
   <div className="col-lg-6 col-md-12 col-12">
  <div className="animated-down paraabout">
    <p className="mt-4 contain-colur">
      Streamlining Success for Your Business with Our Expert Outsourcing
      Solutions
    </p>

    <p>
      We partner with organizations to simplify complex operations, reduce
      costs, and enhance efficiency through tailored Knowledge Process
      Outsourcing (KPO) services.
    </p>

    <p>
      Our solutions are designed to empower businesses with accurate insights,
      reliable processes, and scalable support that adapts to evolving
      industry demands.
    </p>

    <p>
      With a strong foundation built on integrity, transparency, and
      accountability, we foster long-term partnerships that drive measurable
      growth and operational excellence.
    </p>

    <p>
      Backed by over <strong>25+ years of combined expertise</strong> in
      financial management, accounting, taxation, and compliance, our team
      delivers precision-driven results you can trust.
    </p>



 
  </div>
</div>
          <div className="col-lg-6 col-md-12 col-12 img-fluid animated-down">
            <img src={service} alt="about-figma" className="about-phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
