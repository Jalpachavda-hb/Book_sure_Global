// import "./Hero.css";
// import img1 from "../../assets/Images/Hero/whychoseus.jpg";
// import { getWhyChooseUs } from "../../utils/Getdata";
// import { useEffect, useState } from "react";
// const Strength = () => {
//   const [whyChooseUsData, setWhyChooseUsData] = useState(null);

//   useEffect(() => {
//     const fetchWhyChooseUs = async () => {
//       const res = await getWhyChooseUs();
//       if (res?.success) {
//         setWhyChooseUsData(res.data);
//       }
//     };

//     fetchWhyChooseUs();
//   }, []);

//   return (
//     <section className="why-section">
//       <div className="container">
//         <div className="why-grid">
//           {/* LEFT CONTENT */}
//           <div className="why-content">
//             <span className="why-tag">WHY CHOOSE US</span>
//             <h2>
//               Why Choose <span>Booksure Global</span>
//             </h2>
//             <p className="why-desc">
//               Experience reliable, compliant, and scalable accounting solutions
//               designed for growing businesses across the globe.
//             </p>

//             <div className="why-points">
//               {[
//                 {
//                   title: "Compliance-Driven Approach",
//                   desc: "Country-specific accounting standards ensure audit-ready and fully compliant books.",
//                 },
//                 {
//                   title: "Multi-Country Expertise",
//                   desc: "Serving USA, Australia & UAE with localized tax and reporting compliance.",
//                 },
//                 {
//                   title: "Reliable Process Delivery",
//                   desc: "Structured workflows for timely reconciliations and smooth closings.",
//                 },
//                 {
//                   title: "Certified Accounting Experts",
//                   desc: "Skilled professionals experienced with QuickBooks, Xero & cloud systems.",
//                 },
//                 {
//                   title: "Accuracy & Transparency",
//                   desc: "Clear financial visibility with detailed reporting and reviews.",
//                 },
//               ].map((item, i) => (
//                 <div className="why-card" key={i}>
//                   <span className="why-icon">✔</span>
//                   <div>
//                     <h5>{item.title}</h5>
//                     <p>{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="why-visual">
//             <div className="image-glass">
//               <img src={img1} alt="Why Choose Us" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Strength;

import "./Hero.css";
import { getWhyChooseUs } from "../../utils/Getdata";
import { useEffect, useState } from "react";

const Strength = () => {
  const [whyChooseUsData, setWhyChooseUsData] = useState(null);

  useEffect(() => {
    const fetchWhyChooseUs = async () => {
      const res = await getWhyChooseUs();
      if (res?.success) {
        setWhyChooseUsData(res.data);
      }
    };
    fetchWhyChooseUs();
  }, []);

  if (!whyChooseUsData) return null;

  return (
    <section className="why-section">
      <div className="container">
        <div className="why-grid">
          {/* LEFT CONTENT */}
          <div className="why-content">
            <span className="why-tag">{whyChooseUsData.section_title}</span>

            {/* <h2>
              {whyChooseUsData.content_title}
            </h2> */}

            <h2>
              {whyChooseUsData?.content_title
                ?.split(" ")
                .slice(0, -2)
                .join(" ")}{" "}
              <span>
                {whyChooseUsData?.content_title?.split(" ").slice(-2).join(" ")}
              </span>
            </h2>

            <p className="why-desc">{whyChooseUsData.content_para}</p>

            <div className="why-points">
              {whyChooseUsData.speciality_list?.map((item, i) => (
                <div className="why-card" key={i}>
                  <span className="why-icon">✔</span>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="why-visual">
            <div className="image-glass">
              <img
                src={whyChooseUsData.whychosseus_image}
                alt="Why Choose Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strength;
