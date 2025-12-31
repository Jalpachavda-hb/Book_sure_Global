import React from "react";
import PageBanner from "../PageBanner/PageBanner";
import TeamCard from "./TeamCard";
import "./Team.css";

import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import team from "../../assets/Images/Services/Our-Culture-1.jpg";
// Images
import teamImg from "../../assets/Images/Aboutus/team.jpg";
import { Link } from "react-router-dom";
/* =======================
   TEAM DATA (Single Source)
======================= */
export const founders = [
  {
    image: teamImg,
    name: "Trupal patel",
    role: "Managing Director & Founder",
    slug: "john-cooper",
    details: `
Trupal Patel brings over 20 years of professional expertise to Integrity, encompassing Project Finance, Bookkeeping, Payroll, Audit, Taxation, and Insolvency. As a key figure at Integrity, Trupal spearheads new initiatives, financial planning, and operations.

In addition to his role at Integrity, Trupal is the Founder and Managing Partner of Trupal J Patel & Co., a reputable Chartered Accountant firm established in 2003. The firm has been providing stellar professional services for over two decades.

Trupal is a qualified Chartered Accountant (CA) from the Institute of Chartered Accountants of India (ICAI) and holds degrees in Bachelor of Commerce and Law from Gujarat University. Moreover, he is also an Insolvency Professional (IP) from Insolvency & Bankruptcy Board of India (IBBI).

Additionally, He is a member of American Bankruptcy Institute (ABI), Insol International, Insolvency & Bankruptcy Board of India (IBBI), Turnaround Management Association (TMA) and Indo-American Chamber of Commerce (IACC).

Beyond the professional sphere, Trupal enjoys spending quality time with his family, indulging in his favorite sport, cricket, and immersing himself in books during the weekends.
    `,
  },
  {
    image: teamImg,
    name: "Kirti Patel",
    role: "Director & Co-Founder",
    slug: "eleanor-pena",
    details: `
Kirti Patel is a highly accomplished and visionary leader, renowned for her exceptional ability to drive significant growth within organizations. As the Managing Director at Integrity Data Services Pvt. Ltd., Kirti oversees business consulting, development, financial management, operational strategies, and the overall strategic planning of the company. Additionally, she is the founder of KTP Consulting, a firm with over 2 decades of experience in delivering consulting services.

With strong legal knowledge and hands-on expertise in Data Analysis, Data Management and Back-office support services, Kirti brings a wealth of practical knowledge to her roles. She holds degrees in Bachelor of Science and Bachelor of Law from Gujarat University. Kirti's leadership is marked by a commitment to excellence and a strategic approach that fosters sustained success.

Apart from her professional interests, she loves spending time with her family, cooking delicious meals and gardening.
    `,
  },
];

export const teamMembers = [
  {
    image: teamImg,
    name: "Alex Brown",
    role: "Project Manager",
    slug: "alex-brown",
    details: `
Trupal Patel brings over 20 years of professional expertise to Integrity, encompassing Project Finance, Bookkeeping, Payroll, Audit, Taxation, and Insolvency. As a key figure at Integrity, Trupal spearheads new initiatives, financial planning, and operations.

In addition to his role at Integrity, Trupal is the Founder and Managing Partner of Trupal J Patel & Co., a reputable Chartered Accountant firm established in 2003. The firm has been providing stellar professional services for over two decades.

Trupal is a qualified Chartered Accountant (CA) from the Institute of Chartered Accountants of India (ICAI) and holds degrees in Bachelor of Commerce and Law from Gujarat University. Moreover, he is also an Insolvency Professional (IP) from Insolvency & Bankruptcy Board of India (IBBI).

Additionally, He is a member of American Bankruptcy Institute (ABI), Insol International, Insolvency & Bankruptcy Board of India (IBBI), Turnaround Management Association (TMA) and Indo-American Chamber of Commerce (IACC).

Beyond the professional sphere, Trupal enjoys spending quality time with his family, indulging in his favorite sport, cricket, and immersing himself in books during the weekends.
    `,
  },
  {
    image: teamImg,
    name: "Emily White",
    role: "UI/UX Designer",
    slug: "emily-white",
    details: `
Trupal Patel brings over 20 years of professional expertise to Integrity, encompassing Project Finance, Bookkeeping, Payroll, Audit, Taxation, and Insolvency. As a key figure at Integrity, Trupal spearheads new initiatives, financial planning, and operations.

In addition to his role at Integrity, Trupal is the Founder and Managing Partner of Trupal J Patel & Co., a reputable Chartered Accountant firm established in 2003. The firm has been providing stellar professional services for over two decades.

Trupal is a qualified Chartered Accountant (CA) from the Institute of Chartered Accountants of India (ICAI) and holds degrees in Bachelor of Commerce and Law from Gujarat University. Moreover, he is also an Insolvency Professional (IP) from Insolvency & Bankruptcy Board of India (IBBI).

Additionally, He is a member of American Bankruptcy Institute (ABI), Insol International, Insolvency & Bankruptcy Board of India (IBBI), Turnaround Management Association (TMA) and Indo-American Chamber of Commerce (IACC).

Beyond the professional sphere, Trupal enjoys spending quality time with his family, indulging in his favorite sport, cricket, and immersing himself in books during the weekends.
    `,
  },
  {
    image: teamImg,
    name: "Michael Lee",
    role: "Backend Developer",
    slug: "michael-lee",
    details: `
Trupal Patel brings over 20 years of professional expertise to Integrity, encompassing Project Finance, Bookkeeping, Payroll, Audit, Taxation, and Insolvency. As a key figure at Integrity, Trupal spearheads new initiatives, financial planning, and operations.

In addition to his role at Integrity, Trupal is the Founder and Managing Partner of Trupal J Patel & Co., a reputable Chartered Accountant firm established in 2003. The firm has been providing stellar professional services for over two decades.

Trupal is a qualified Chartered Accountant (CA) from the Institute of Chartered Accountants of India (ICAI) and holds degrees in Bachelor of Commerce and Law from Gujarat University. Moreover, he is also an Insolvency Professional (IP) from Insolvency & Bankruptcy Board of India (IBBI).

Additionally, He is a member of American Bankruptcy Institute (ABI), Insol International, Insolvency & Bankruptcy Board of India (IBBI), Turnaround Management Association (TMA) and Indo-American Chamber of Commerce (IACC).

Beyond the professional sphere, Trupal enjoys spending quality time with his family, indulging in his favorite sport, cricket, and immersing himself in books during the weekends.
    `,
  },
  {
    image: teamImg,
    name: "Sophia Green",
    role: "Marketing Lead",
    slug: "sophia-green",
    details: `
Trupal Patel brings over 20 years of professional expertise to Integrity, encompassing Project Finance, Bookkeeping, Payroll, Audit, Taxation, and Insolvency. As a key figure at Integrity, Trupal spearheads new initiatives, financial planning, and operations.

In addition to his role at Integrity, Trupal is the Founder and Managing Partner of Trupal J Patel & Co., a reputable Chartered Accountant firm established in 2003. The firm has been providing stellar professional services for over two decades.

Trupal is a qualified Chartered Accountant (CA) from the Institute of Chartered Accountants of India (ICAI) and holds degrees in Bachelor of Commerce and Law from Gujarat University. Moreover, he is also an Insolvency Professional (IP) from Insolvency & Bankruptcy Board of India (IBBI).

Additionally, He is a member of American Bankruptcy Institute (ABI), Insol International, Insolvency & Bankruptcy Board of India (IBBI), Turnaround Management Association (TMA) and Indo-American Chamber of Commerce (IACC).

Beyond the professional sphere, Trupal enjoys spending quality time with his family, indulging in his favorite sport, cricket, and immersing himself in books during the weekends.
    `,
  },
];

const Team = () => {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <PageBanner title="Our Team" bgImage={bannerImg} />

      <section className="our-team-page py-5">
        <div className="container">
          {/* ===== FOUNDERS HEADER ===== */}
          {/* <div className="section-header text-center mb-5">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Our Founders</h2>
            <p className="section-subtitle">
              Visionaries guiding our organization forward
            </p>
          </div> */}
           <div className="hero-content-left animated-content position-relative z-index text-white mb-4">
           {/* <span className="section-tag">Leadership</span> */}
            <h3 className="page-tital mt-1">Our Founders</h3>
            <p className="contain-colur">“Visionaries guiding our organization forward”</p>
          </div>

          {/* ===== FOUNDERS CARDS ===== */}
          <div className="row justify-content-center">
            {founders.map((member, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <TeamCard
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  slug={member.slug}
                />
              </div>
            ))}
          </div>

          {/* ===== TEAM HEADER ===== */}
          {/* <div className="section-header text-center mt-5 mb-5">
            <span className="section-tag">Experts</span>
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Dedicated professionals working together
            </p>
          </div> */}
              <div className="hero-content-left animated-content position-relative z-index text-white mb-4">
           {/* <span className="section-tag">Leadership</span> */}
            <h3 className="page-tital mt-1">Our Team</h3>
            <p className="contain-colur">“Dedicated professionals working together”</p>
          </div>

          {/* ===== TEAM CARDS ===== */}
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <TeamCard
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  slug={member.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="accounting-cta">
        <div className="container">
          <div className="cta-grid">
            {/* LEFT CONTENT */}
            <div className="cta-content">
              <p className="cta-text">
                <strong>Integrity Data Services</strong> our culture is built on
                trust, collaboration, and continuous growth. We believe that a
                positive work environment drives innovation, strengthens
                relationships, and delivers exceptional value to our clients.
              </p>

              <Link to="/team/gallery">
                <button className="cta-btn">Explore More Here</button>
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="cta-image">
              <img src={team} alt="Accounting Services" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
