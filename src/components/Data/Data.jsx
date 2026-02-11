// import PageBanner from "../PageBanner/PageBanner";
// import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
// import Dataimg from "../../assets/Images/Aboutus/Cybersecurity-768x386.png";
// // import Logo1 from "../../assets/Images/Aboutus/Data_logo2.png";
// import { getDataSequrity } from "../../utils/Getdata";
// import { FaShieldAlt } from "react-icons/fa";
// import "./Data.css";
// const Data = () => {
//   return (
//     <div>
//       <PageBanner title="Data Security" bgImage={bannerImg} />
//       <section className="data-security-section">
//         <div className="container">
//           {/* ROW 1 */}
//           <div className="row align-items-center mb-5">
//             <div className="col-lg-6">
//               <span className="subtitle"> COMPLIANCE & DATA SECURITY</span>

//               <h2 className="security-title">
//                 How We Prioritize <span>Data Security</span>
//               </h2>

//               <p className="security-desc">
//                 We follow strict compliance standards and secure processes to
//                 protect client financial data and ensure accurate,
//                 regulation-ready records across all regions we serve.
//               </p>
//               <p className="security-desc">
//                 Compliance and data security are at the core of our accounting
//                 and bookkeeping services. We follow strict regulatory standards
//                 and secure processes to protect client financial data while
//                 ensuring accurate, audit-ready, and regulation-compliant records
//                 across all regions we serve. From adhering to country-specific
//                 tax and reporting requirements in the USA, Australia, and UAE,
//                 to maintaining strong confidentiality through encrypted systems
//                 and controlled access, we prioritize complete data protection.
//                 Our standardized workflows include regular quality checks to
//                 minimize errors and maintain high accuracy, supported by secure
//                 cloud-based accounting platforms such as QuickBooks and Xero
//                 with controlled user permissions.
//               </p>
//             </div>

//             <div className="col-lg-6 text-center">
//               <div className="security-image-wrapper">
//                 <img
//                   src={Dataimg}
//                   alt="Data Security"
//                   className="main-security-img"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="security-highlight">
//             <FaShieldAlt />
//             <p>
//               <strong>Regulatory Compliance</strong> We adhere to
//               country-specific accounting standards, tax regulations, and
//               reporting requirements for the USA, Australia, and UAE to maintain
//               fully compliant books. .
//             </p>
//           </div>
//           <div className="security-highlight">
//             <FaShieldAlt />
//             <p>
//               <strong>Data Confidentiality & Security</strong> We adhere to
//               country-specific accounting standards, tax regulations, and
//               reporting requirements for the USA, Australia, and UAE to maintain
//               fully compliant books. .
//             </p>
//           </div>
//           <div className="security-highlight">
//             <FaShieldAlt />
//             <p>
//               <strong>Standardized Procedures & Quality Checks</strong> We
//               adhere to country-specific accounting standards, tax regulations,
//               and reporting requirements for the USA, Australia, and UAE to
//               maintain fully compliant books. .
//             </p>
//           </div>
//           <div className="security-highlight">
//             <FaShieldAlt />
//             <p>
//               <strong>Secure Cloud-Based Accounting Systems</strong> We adhere
//               to country-specific accounting standards, tax regulations, and
//               reporting requirements for the USA, Australia, and UAE to maintain
//               fully compliant books. .
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Data;


import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import { FaShieldAlt } from "react-icons/fa";
import { getDataSequrity } from "../../utils/Getdata"; 
import { useEffect, useState } from "react";
import "./Data.css";

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDataSecurity();
  }, []);

  const fetchDataSecurity = async () => {
    const res = await getDataSequrity();
    if (res?.success) {
      setData(res.data);
    }
  };

  return (
    <div>
      {/* BANNER (STATIC IMAGE KEPT) */}
      <PageBanner title="Data Security" bgImage={bannerImg} />

      <section className="data-security-section">
        <div className="container">
          {/* ROW 1 */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <span className="subtitle">
                {data?.section_tag}
              </span>

              <h2 className="security-title">
                {data?.title?.split(" ").slice(0, -2).join(" ")}{" "}
                <span>
                  {data?.title?.split(" ").slice(-2).join(" ")}
                </span>
              </h2>

             

              {data?.description &&
                data.description
                  .split(/\r?\n\r?\n/)
                  .map((para, index) => (
                    <p key={index} className="security-desc">
                      {para}
                    </p>
                  ))}
            </div>

            <div className="col-lg-6 text-center">
              <div className="security-image-wrapper">
                <img
                  src={data?.main_image}
                  alt="Data Security"
                  className="main-security-img"
                />
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          {data?.how_we_keep_secure?.map(
            (item, index) => (
              <div className="security-highlight" key={index}>
                <FaShieldAlt />
                <p>
                  <strong>{item.title}</strong>{" "}
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Data;