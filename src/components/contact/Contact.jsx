import React from "react";
import "./contact.css";
import bgimgcon from "../../assets/Images/contect-bg.jpg";
const Contact = () => {
  return (
    <section className="contactcontain fade-in-section  ">
      <div className="container ">
        <div className="row align-items-center  ">
          <div className="hero-content-left  animated-content position-relative z-index text-white">
            <h4 className="page-tital  ">Contact Us</h4>
            <p className="contain-colur">
              “We’re here to help you stay organized”
            </p>
          </div>
        </div>
      </div>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links_1">
            <img src={bgimgcon} alt="background img" className="contact-img" />
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input type="text" className="mt-2" name="sender" required="" />
                <label className="cardlabal mb-3">Name:</label>
              </div>

              <div className="form-item">
                <input type="text" className="mt-2" name="email" required="" />
                <label className="cardlabal mb-3">Email:</label>
              </div>

              <div className="form-item">
                <textarea
                  className="mt-2"
                  name="message"
                  required=""
                  defaultValue={""}
                />
                <label className="cardlabal mb-2">Message:</label>
              </div>
              <button className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./contact.css";
// import bgimgcon from "../../assets/Images/contect-bg.jpg";

// const Contact = () => {
//   // const location = useLocation();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });

//     AOS.refresh();
//   }, );
//   return (
//     <section className="contactcontain">
//       <div className="container">
//         <div className="row align-items-center">
//           <div
//             className="hero-content-left position-relative z-index text-white"
//             data-aos="fade-up"
//           >
//             <h4 className="page-tital mt-1">Contact Us</h4>
//             <p className="contain-colur">
//               “We’re here to help you stay organized”
//             </p>
//           </div>
//         </div>
//       </div>

//       <section id="contact">
//         <div className="contact-box">
//           <div className="contact-links_1" data-aos="fade-right">
//             <img src={bgimgcon} className="contact-img" alt="Contact Background" />
//           </div>

//           <div className="contact-form-wrapper" data-aos="fade-left">
//             <form>
//               <div className="form-item">
//                 <input type="text" className="mt-2" name="sender" required />
//                 <label className="cardlabal mb-3">Name:</label>
//               </div>

//               <div className="form-item">
//                 <input type="text" className="mt-2" name="email" required />
//                 <label className="cardlabal mb-3">Email:</label>
//               </div>

//               <div className="form-item">
//                 <textarea className="mt-2" name="message" required />
//                 <label className="cardlabal mb-2">Message:</label>
//               </div>

//               <button className="submit-btn">Send</button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Contact;
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./contact.css";
// import bgimgcon from "../../assets/Images/contect-bg.jpg";

// const Contact = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//     AOS.refresh();
//   }, []);

//   return (
//     <section className="contactcontain fade-in-section" id="contact">
//       <div className="container">
//         <div className="row align-items-center">
//           <div
//             className="hero-content-left position-relative z-index text-white"
//             data-aos="fade-up"
//           >
//             <h4 className="page-tital mt-1">Contact Us</h4>
//             <p className="contain-colur">“We’re here to help you stay organized”</p>
//           </div>
//         </div>
//       </div>

//       <section id="contact">
//         <div className="contact-box">
//           <div className="contact-links_1" data-aos="fade-right">
//             <img src={bgimgcon} className="contact-img" alt="Contact Background" />
//           </div>

//           <div className="contact-form-wrapper" data-aos="fade-left">
//             <form>
//               <div className="form-item">
//                 <input type="text" className="mt-2" name="sender" required />
//                 <label className="cardlabal mb-3">Name:</label>
//               </div>

//               <div className="form-item">
//                 <input type="email" className="mt-2" name="email" required />
//                 <label className="cardlabal mb-3">Email:</label>
//               </div>

//               <div className="form-item">
//                 <textarea className="mt-2" name="message" required />
//                 <label className="cardlabal mb-2">Message:</label>
//               </div>

//               <button className="submit-btn">Send</button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Contact;
