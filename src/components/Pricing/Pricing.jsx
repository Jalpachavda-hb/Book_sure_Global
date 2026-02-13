// import React from "react";
// import PageBanner from "../PageBanner/PageBanner";
// import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
// import "./Pricing.css";
// import InquiryForm from "./InquiryForm";
// import {getActivePricingModel} from  "../../utils/Getdata"
// // Decorative Images
// import shapeTop from "../../assets/Images/Services/blog_shape01.png";
// import shapeBottom from "../../assets/Images/Services/blog_shape02.png";

// const Pricing = () => {
//   return (
//     <>
//       <PageBanner title="Pricing Plan" bgImage={bannerImg} />

//       <section className="pricing-section-new">
//         <img src={shapeTop} alt="shape" className="pricing-shape top-shape" />
//         <img
//           src={shapeBottom}
//           alt="shape"
//           className="pricing-shape bottom-shape"
//         />

//         <div className="container">
//           {/* ✅ Heading */}
//           <div className="pricing-heading text-center">
//             <span className="pricing-tag">FLEXIBLE PRICING PLAN</span>
//             <h2>
//               We’ve Offered The Best <br /> Pricing For You
//             </h2>
//           </div>

//           {/* ✅ Cards */}
//           <div className="row justify-content-center g-4 mt-5">
//             {/* ✅ Card 1 */}
//             <div className="col-lg-4 col-md-6">
//               <div className="pricing-card-ui">
//                 <span className="plan-label">PAY AS YOU GO</span>

//                 <h3 className="price">
//                   $15.00 <span>/ Month</span>
//                 </h3>

//                 {/* ✅ Real Data */}
//                 <ul>
//                   <li>
//                     ✔ <strong>Flexible Hours</strong> – Engage our team only
//                     when required, with no minimum commitment.
//                   </li>
//                   <li>
//                     ✔ <strong>No Long-Term Obligation</strong> – Pay strictly
//                     for the hours utilised.
//                   </li>
//                   <li>
//                     ✔ <strong>Scalable Usage</strong> – Easily increase or
//                     reduce support based on your workload.
//                   </li>
//                 </ul>

//                 {/* ✅ Contact Line */}
//                 <p className="pricing-contact">
//                   <strong>Contact us now for further enquiry.</strong>
//                 </p>

//                 {/* ✅ Button Same */}
//                 <button className="pricing-btn">GET THIS PLAN NOW →</button>
//               </div>
//             </div>

//             {/* ✅ Card 2 */}
//             <div className="col-lg-4 col-md-6">
//               <div className="pricing-card-ui active">
//                 <span className="plan-label">MONTHLY PLAN</span>

//                 <h3 className="price">
//                   $29.00 <span>/ Month</span>
//                 </h3>

//                 {/* ✅ Real Data */}
//                 <ul>
//                   <li>
//                     ✔ <strong>Dedicated Resources</strong> – Assigned
//                     professionals working exclusively on your tasks.
//                   </li>
//                   <li>
//                     ✔ <strong>Fixed Monthly Cost</strong> – Predictable
//                     budgeting with transparent pricing.
//                   </li>
//                   <li>
//                     ✔ <strong>Workflow Continuity</strong> – Consistent support
//                     ensuring uninterrupted operations.
//                   </li>
//                 </ul>

//                 {/* ✅ Contact Line */}
//                 <p className="pricing-contact">
//                   <strong>Contact us now for further enquiry.</strong>
//                 </p>

//                 {/* ✅ Button Same */}
//                 <button className="pricing-btn active-btn">
//                   GET THIS PLAN NOW →
//                 </button>
//               </div>
//             </div>

//             {/* ✅ Card 3 */}
//             <div className="col-lg-4 col-md-6">
//               <div className="pricing-card-ui">
//                 <span className="plan-label">PROJECT BASED</span>

//                 <h3 className="price">
//                   $89.00 <span>/ Month</span>
//                 </h3>

//                 {/* ✅ Real Data */}
//                 <ul>
//                   <li>
//                     ✔ <strong>Customized Scope</strong> – Services and pricing
//                     aligned with your specific project needs.
//                   </li>
//                   <li>
//                     ✔ <strong>Defined Timelines</strong> – Work delivered within
//                     mutually agreed schedules.
//                   </li>
//                   <li>
//                     ✔ <strong>Outcome Driven</strong> – Focused on achieving
//                     clearly defined objectives and deliverables.
//                   </li>
//                 </ul>

//                 {/* ✅ Contact Line */}
//                 <p className="pricing-contact">
//                   <strong>Contact us now for further enquiry.</strong>
//                 </p>

//                 {/* ✅ Button Same */}
//                 <button className="pricing-btn">GET THIS PLAN NOW →</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <InquiryForm />
//     </>
//   );
// };

// export default Pricing;

import { useEffect, useState } from "react";
import PageBanner from "../PageBanner/PageBanner";
import SubmissionPopup from "../../utils/SubmissionPopup";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import "./Pricing.css";
import GetQuote from "../../assets/Images/Services/GetQuote.jpg";
// import InquiryForm from "./InquiryForm";
import { getActivePricingModel } from "../../utils/Getdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { addQuote } from "../../utils/HandleSubmit";
import shapeTop from "../../assets/Images/Services/blog_shape01.png";
import shapeBottom from "../../assets/Images/Services/blog_shape02.png";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadPricing();
  }, []);

  const loadPricing = async () => {
    const res = await getActivePricingModel();
    setPlans(res);
  };

  // ================= FORM HANDLERS =================

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      plan: selectedPlan,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    const res = await addQuote(payload);

    if (res.success) {
      setPopup({
        show: true,
        type: "success",
        message: "Thank you! Your inquiry has been submitted successfully.",
      });

      setShowQuoteModal(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
    } else {
      setPopup({
        show: true,
        type: "error",
        message: res.message,
      });
    }
  };
  useEffect(() => {
    if (showQuoteModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showQuoteModal]);
  return (
    <>
      <PageBanner title="Pricing Plan" bgImage={bannerImg} />

      <section className="pricing-section-new">
        <img src={shapeTop} alt="shape" className="pricing-shape top-shape" />
        <img
          src={shapeBottom}
          alt="shape"
          className="pricing-shape bottom-shape"
        />

        <div className="container">
          <div className="pricing-heading text-center">
            <span className="pricing-tag">FLEXIBLE PRICING PLAN</span>
            <h2>
              We’ve Offered The Best <br /> Pricing For You
            </h2>
          </div>

          <div className="mt-5">
            {plans.length <= 3 ? (
              <div className="row justify-content-center g-4">
                {plans.map((plan) => (
                  <div className="col-lg-4 col-md-6" key={plan.id}>
                    <div className="pricing-card-ui">
                      <div className="pricing-table-header">
                        <h3>{plan.title}</h3>
                      </div>

                      <ul className="pricing-content">
                        {Array.isArray(plan.features) &&
                          plan.features.map((feature, index) => (
                            <li key={index}>✔ {feature}</li>
                          ))}
                      </ul>

                      <button
                        className="pricing-btn"
                        onClick={() => {
                          setSelectedPlan(plan.title);
                          setShowQuoteModal(true);
                        }}
                      >
                        {plan.button_text || "Get A Quote"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {plans.map((plan) => (
                  <SwiperSlide key={plan.id}>
                    <div className="pricing-card-ui">
                      <div className="pricing-table-header">
                        <h3>{plan.title}</h3>
                      </div>

                      <ul className="pricing-content">
                        {Array.isArray(plan.features) &&
                          plan.features.map((feature, index) => (
                            <li key={index}>✔ {feature}</li>
                          ))}
                      </ul>

                      <button
                        className="pricing-btn"
                        onClick={() => {
                          setSelectedPlan(plan.title);
                          setShowQuoteModal(true);
                        }}
                      >
                        {plan.button_text || "Get A Quote"}
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}

      {showQuoteModal && (
        <div className="quote-modal-overlay">
          <div className="quote-modal">
            <button
              className="modal-close"
              onClick={() => setShowQuoteModal(false)}
            >
              ×
            </button>

            <div className="quote-modal-content">
              <div className="quote-left">
                <img src={GetQuote} alt="quote" />
              </div>

              <div className="quote-right">
                <h2 className="quote-title">Get A Quote</h2>

                <form className="quote-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}

                  <button type="submit" className="quote-submit">
                    Submit Request →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {popup.show && (
        <SubmissionPopup
          type={popup.type}
          message={popup.message}
          onClose={() => setPopup({ show: false, type: "", message: "" })}
        />
      )}
      {/* <InquiryForm /> */}
    </>
  );
};

export default Pricing;
