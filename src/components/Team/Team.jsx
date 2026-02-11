import React, { useState } from "react";
import PageBanner from "../PageBanner/PageBanner";
import TeamCard from "./TeamCard";
import TeamModal from "./Teamdetailpage";
import "./Team.css";

import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import teamImg from "../../assets/Images/Aboutus/team.jpg";

/* =======================
   TEAM DATA
======================= */

export const founders = [
  {
    image: teamImg,
    name: "Karishma Shah",
    role: "Founder",
    qualification: "MCom, BCom",
    experience: "5+ years in Accounting, Taxation & Compliance",
    description:
      "Focused on operational excellence and client service delivery.",
  },
  {
    image: teamImg,
    name: "Dimpal Patel",
    role: "Founder",
    qualification: "MCom, BCom",
    experience: "6+ years in Accounting, Taxation & Compliance",
    description:
      "Ensures accuracy, timelines, and structured accounting workflows.",
  },
  {
    image: teamImg,
    name: "Rinkesh Prajapati",
    role: "Founder",
    qualification: "BCom, CA Finalist",
    experience: "13+ years in Accounting, Taxation & Compliance (since 2013)",
    description: "Brings deep hands-on expertise across diverse industries.",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  React.useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedMember]);
  return (
    <>
      <PageBanner title="Our Team" bgImage={bannerImg} />

      <section className="our-team-page py-5">
        <div className="container">
          <div className="hero-content-left text-white mb-4">
            <h3 className="page-tital mt-1">Our Founders</h3>
            <p className="contain-colur">
              “Visionaries guiding our organization forward”
            </p>
          </div>

          <div className="row justify-content-center">
            {founders.map((member, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <TeamCard
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  qualification={member.qualification}
                  experience={member.experience}
                  description={member.description}
                  onClick={() => setSelectedMember(member)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ MODAL OUTSIDE MAP */}
      {selectedMember && (
        <TeamModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
};

export default Team;
