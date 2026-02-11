// import "./Aboutus.css";
// import founder1 from "../../assets/Images/Hero/f1.png";
// import founder2 from "../../assets/Images/Hero/f2.png";

// import team from "../../assets/Images/Services/blog_img06.jpg";
// // import { Link } from "react-router-dom";
// const OurAssociate = () => {
//   return (
//     <>
//       <section className="our-associate-section">
//         <div className="associate-overlay">
//           <div className="container">
//             <div className="associate-header">
//               <h2>Our Associates</h2>
//               <p>Leadership That Builds Trust & Excellence</p>
//             </div>
//             <div className="associate-grid">
//               <div className="associate-card">
//                 <div className="associate-image">
//                   <img src={founder1} alt="Trupal J. Patel" />
//                 </div>
//                 <div className="associate-content">
//                   <h4>Trupal J. Patel</h4>
//                   <span>Founder & Chartered Accountant</span>
//                   <p>
//                     Founder of Trupal J. Patel & Co., Trupal Patel brings over
//                     20 years of expertise in audit, taxation, and advisory
//                     services. Known for precision and integrity, he delivers
//                     tailored financial solutions across diverse industries.
//                   </p>
//                 </div>
//               </div>
//               <div className="associate-card">
//                 <div className="associate-image">
//                   <img src={founder2} alt="Co-Founder" />
//                 </div>
//                 <div className="associate-content">
//                   <h4>Associate Partner Name</h4>
//                   <span>Co-Founder / Partner</span>
//                   <p>
//                     With strong expertise in compliance, accounting, and
//                     financial advisory, our associate partner supports
//                     businesses with strategic insights, operational efficiency,
//                     and sustainable growth.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     <section className="leadership-section">
//       <div className="leadership-container">

//         {/* ✅ LEFT CONTENT */}
//         <div className="leadership-content">
//           <h2>
//             Leadership
//           </h2>

//           <p>
//             Our leadership team comprises highly qualified accounting professionals
//             with strong global accounting expertise, advanced certifications, and
//             practical knowledge in bookkeeping and accounting standards.
//           </p>

//           <p>
//             The partners bring over <b>10 years</b> of experience in Indian accounting
//             practices, while our leadership adds proficiency in international
//             accounting standards, cloud-based software, advanced Excel, and MS
//             Office skills to ensure accurate, efficient, and compliant financial
//             management.
//           </p>

//           <p>
//             Supported by a dedicated team of trained accountants and bookkeepers,
//             we follow structured workflows, rigorous quality controls, and strict
//             compliance standards to deliver reliable, audit-ready books across
//             multiple regions including the US, Australia, and UAE.
//           </p>

//         </div>

//         {/* ✅ RIGHT IMAGE */}
//         <div className="leadership-image">
//           <img src={team} alt="Team" />
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default OurAssociate;

import "./Aboutus.css";
import team from "../../assets/Images/Services/blog_img06.jpg";
import associateImg from "../../assets/Images/Hero/f1.png"; // use different images if available

const associatesData = [
  {
    name: "Karishma Shah",
    qualification: "MCom, BCom",
    experience: "5+ years",
    description:
      "Focused on operational excellence and client service delivery ",
  },
  {
    name: "Dimpal Patel",
    qualification: "MCom, BCom",
    experience: "6+ years",
    description:
      "Ensures accuracy, timelines, and structured accounting workflows..",
  },
  {
    name: "Rinkesh Prajapati",
    qualification: "BCom, CA Finalist",
    experience: "13+ years (since 2013)",
    description:
      "Brings deep hands-on expertise across diverse industries and regulatory environments.",
  },
  {
    name: "Uma Patel",
    qualification: "CPA (Australia), CA (India), BCom",
    experience: "4+ years",
    description:
      "Uma combines strong accounting fundamentals with cloud-based bookkeeping expertise, supporting global clients with compliance-ready financial systems.",
  },
];

const OurAssociate = () => {
  return (
    <>
      {/* ================= ASSOCIATES SECTION ================= */}
      <section className="our-associate-section">
        <div className="associate-overlay">
          <div className="container">
            <div className="associate-header">
              <h2>Our Associates</h2>
              <p>Leadership That Builds Trust & Excellence</p>
            </div>

            <div className="blog-content associate-grid ">
              {associatesData.map((associate, index) => (
                <div className="blog-card" key={index}>
                  <div className="blog-img">
                    <img src={associateImg} alt={associate.name} />
                  </div>

                  <div className="associate-content">
                    <h4>{associate.name}</h4>
                    <span>{associate.qualification}</span>

                    <p>
                      <strong>Experience:</strong> {associate.experience} in
                      Accounting, Taxation & Compliance
                    </p>

                    <p>{associate.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP SECTION ================= */}
      <section className="leadership-section">
        <div className="leadership-container">
          {/* LEFT CONTENT */}
          <div className="leadership-content">
            <h2>Leadership</h2>

            <p>
              Our leadership team comprises highly qualified accounting
              professionals with strong global accounting expertise, advanced
              certifications, and practical knowledge in bookkeeping and
              accounting standards.
            </p>

            <p>
              The partners bring over <b>10 years</b> of experience in Indian
              accounting practices, while our leadership adds proficiency in
              international accounting standards, cloud-based software, advanced
              Excel, and MS Office skills.
            </p>

            <p>
              Supported by a dedicated team of trained accountants and
              bookkeepers, we follow structured workflows, rigorous quality
              controls, and strict compliance standards to deliver reliable,
              audit-ready books across the US, Australia, and UAE.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="leadership-image">
            <img src={team} alt="Team" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurAssociate;
