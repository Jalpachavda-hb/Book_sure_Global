

// import React, { useEffect, useState } from "react";
// import "./Contact.css";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { GetContactPageInfo } from "../../utils/Getdata";

// const GetInTouch = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     loadContactInfo();
//   }, []);

//   const loadContactInfo = async () => {
//     const res = await GetContactPageInfo();
//     console.log("Contact Page Info API:", res);
//     setData(res);
//   };

//   // ✅ IF NO DATA → RENDER NOTHING (NO TITLE / NO SECTION)
//   if (!data || data.is_active !== 1) return null;

//   const phones = data.phone ? data.phone.split(",") : [];
//   const emails = data.email ? data.email.split(",") : [];

//   return (
//     <section className="contact-form-section py-5">
//       <Container>
//         <Row className="align-items-start">
//           {/* LEFT COLUMN */}
//           <Col lg={5} className="mb-4 mb-lg-0">
//             <h2 className="contact-form-title">{data.title}</h2>

//             <p className="contact-form-subtitle">
//               {data.description}
//             </p>

//             <div className="contact-info mt-4">
//               {/* Address */}
//               {data.address && (
//                 <div className="d-flex align-items-center mb-5">
//                   <div className="contact-icon">
//                     <FaMapMarkerAlt />
//                   </div>
//                   <div>
//                     <h6>Address</h6>
//                     <p>{data.address}</p>
//                   </div>
//                 </div>
//               )}

//               {/* Phone */}
//               {phones.length > 0 && (
//                 <div className="d-flex align-items-center mb-5">
//                   <div className="contact-icon">
//                     <FaPhoneAlt />
//                   </div>
//                   <div>
//                     <h6>Phone</h6>
//                     {phones.map((p, i) => (
//                       <p key={i}>{p.trim()}</p>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Email */}
//               {emails.length > 0 && (
//                 <div className="d-flex align-items-center mb-5">
//                   <div className="contact-icon">
//                     <FaEnvelope />
//                   </div>
//                   <div>
//                     <h6>E-mail</h6>
//                     {emails.map((e, i) => (
//                       <p key={i}>{e.trim()}</p>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Col>

//           {/* RIGHT COLUMN */}
//           <Col lg={7}>
//             <div className="contact-form-card p-4 p-md-5 shadow-sm rounded">
//               <h5 className="mb-3 formtitle">Give Us a Message</h5>
//               <p className="text-muted small">
//                 Your email address will not be published. Required fields are marked *
//               </p>

//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Control as="textarea" rows={5} placeholder="Message *" />
//                 </Form.Group>

//                 <Row className="mb-3">
//                   <Col md={4}>
//                     <Form.Control type="text" placeholder="Name *" />
//                   </Col>
//                   <Col md={4}>
//                     <Form.Control type="email" placeholder="Email *" />
//                   </Col>
//                   <Col md={4}>
//                     <Form.Control type="text" placeholder="Phone" />
//                   </Col>
//                 </Row>

//                 <Form.Group className="mb-3">
//                   <Form.Check
//                     type="checkbox"
//                     label="Save my name, email, and website in this browser for the next time I comment."
//                   />
//                 </Form.Group>

//                 <Button type="submit" className="btn-submit">
//                   Submit Post
//                 </Button>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default GetInTouch;




import { useEffect, useState } from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GetContactPageInfo } from "../../utils/Getdata";

const GetInTouch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadContactInfo();
  }, []);

  const loadContactInfo = async () => {
    const res = await GetContactPageInfo();
    console.log("Contact Page Info API:", res);
    setData(res);
  };

  // ✅ IF NO DATA → RENDER NOTHING (NO TITLE / NO SECTION)
  if (!data || data.is_active !== 1) return null;

  const phones = data.phone ? data.phone.split(",") : [];
  const emails = data.email ? data.email.split(",") : [];

return (
  <section className="contact-modern-section py-5 contact-form-section">
    <Container>
      <Row className="align-items-center">

        {/* LEFT CONTENT */}
        <Col lg={6} className="mb-5 mb-lg-0">
          <div className="contact-left-content">
            <span className="contact-tag">GET IN TOUCH</span>
            <h2 className="contact-title">{data.title}</h2>

            <p className="contact-description">
              {data.description}
            </p>

            <div className="contact-cta-box">
              <h5>We’re Here to Help You Grow</h5>
              <p>
                Reach out to us anytime. Our team is ready to assist you with
                the right solutions for your business.
              </p>
            </div>
          </div>
        </Col>

        {/* RIGHT INFO CARDS */}
        <Col lg={6}>
          <div className="contact-info-grid">

            {/* Address */}
            {data.address && (
              <div className="contact-info-card">
                <div className="icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h6>Address</h6>
                  <p>{data.address}</p>
                </div>
              </div>
            )}

            {/* Phone */}
            {phones.length > 0 && (
              <div className="contact-info-card">
                <div className="icon-box">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h6>Phone</h6>
                  {phones.map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Email */}
            {emails.length > 0 && (
              <div className="contact-info-card">
                <div className="icon-box">
                  <FaEnvelope />
                </div>
                <div>
                  <h6>Email</h6>
                  {emails.map((e, i) => (
                    <p key={i}>{e.trim()}</p>
                  ))}
                </div>
              </div>
            )}

          </div>
        </Col>

      </Row>
    </Container>
  </section>
);
};

export default GetInTouch;