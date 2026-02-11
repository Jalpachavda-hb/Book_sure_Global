// import React, { useState } from "react";
// import PageBanner from "../PageBanner/PageBanner";
// import TeamCard from "./TeamCard";
// import "./Team.css";
// import {getActiveteam_member} from "../../utils/Getdata";
// import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
// import teamImg from "../../assets/Images/Aboutus/team.jpg";

// export const founders = [
//   {
//     image: teamImg,
//     name: "Karishma Shah",
//     role: "Founder",
//     qualification: "MCom, BCom",
//     experience: "5+ years in Accounting, Taxation & Compliance",
//     description:
//       "Focused on operational excellence and client service delivery.",
//   },
//   {
//     image: teamImg,
//     name: "Dimpal Patel",
//     role: "Founder",
//     qualification: "MCom, BCom",
//     experience: "6+ years in Accounting, Taxation & Compliance",
//     description:
//       "Ensures accuracy, timelines, and structured accounting workflows.",
//   },
//   {
//     image: teamImg,
//     name: "Rinkesh Prajapati",
//     role: "Founder",
//     qualification: "BCom, CA Finalist",
//     experience: "13+ years in Accounting, Taxation & Compliance (since 2013)",
//     description: "Brings deep hands-on expertise across diverse industries.",
//   },
// ];

// export const experts = [
//   {
//     image: teamImg,
//     name: "Karishma Shah",
//     role: "Founder",
//     qualification: "MCom, BCom",
//     experience: "5+ years in Accounting, Taxation & Compliance",
//     description:
//       "Focused on operational excellence and client service delivery.",
//   },
//   {
//     image: teamImg,
//     name: "Dimpal Patel",
//     role: "Founder",
//     qualification: "MCom, BCom",
//     experience: "6+ years in Accounting, Taxation & Compliance",
//     description:
//       "Ensures accuracy, timelines, and structured accounting workflows.",
//   },
//   {
//     image: teamImg,
//     name: "Rinkesh Prajapati",
//     role: "Founder",
//     qualification: "BCom, CA Finalist",
//     experience: "13+ years in Accounting, Taxation & Compliance (since 2013)",
//     description: "Brings deep hands-on expertise across diverse industries.",
//   },
// ];

// const Team = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   React.useEffect(() => {
//     if (selectedMember) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [selectedMember]);
//   return (
//     <>
//       <PageBanner title="Our Team" bgImage={bannerImg} />

//       <section className="our-team-page py-5">
//         <div className="container">
//           <div className="hero-content-left text-white mb-4">
//             <h3 className="page-tital mt-1">Our Founders</h3>
//             <p className="contain-colur">
//               “Visionaries guiding our organization forward”
//             </p>
//           </div>

//           <div className="row justify-content-center">
//             {founders.map((member, index) => (
//               <div className="col-lg-4 col-md-6 mb-4" key={index}>
//                 <TeamCard
//                   image={member.image}
//                   name={member.name}
//                   // role={member.role}
//                   qualification={member.qualification}
//                   experience={member.experience}
//                   description={member.description}
//                   onClick={() => setSelectedMember(member)}
//                 />
//               </div>
//             ))}
//           </div>
//            <div className="hero-content-left text-white mb-4">
//             <h3 className="page-tital mt-1">Our Experts</h3>
//             <p className="contain-colur">
//               “Visionaries guiding our organization forward”
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Team;



import React, { useEffect, useState } from "react";
import PageBanner from "../PageBanner/PageBanner";
import TeamCard from "./TeamCard";
import "./Team.css";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import teamImg from "../../assets/Images/Aboutus/team.jpg";
import { getActiveteam_member } from "../../utils/Getdata";

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    const res = await getActiveteam_member();
    if (res.success) {
      setTeamData(res.data);
    }
  };

  // Filter by member_type
  const founders = teamData.filter(
    (member) => member.member_type === "founder"
  );

  const experts = teamData.filter(
    (member) => member.member_type === "employee"
  );

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "auto";
  }, [selectedMember]);

  return (
    <>
      <PageBanner title="Our Team" bgImage={bannerImg} />

      <section className="our-team-page py-5">
        <div className="container">

          {/* ===== FOUNDERS ===== */}
          <div className="hero-content-left text-white mb-4">
            <h3 className="page-tital mt-1">Our Founders</h3>
            <p className="contain-colur">
              “Visionaries guiding our organization forward”
            </p>
          </div>

          <div className="row justify-content-center">
            {founders.map((member) => (
              <div className="col-lg-4 col-md-6 mb-4" key={member.id}>
                <TeamCard
                  image={teamImg}
                  name={member.name}
                  qualification={member.education}
                  experience={member.experience}
                  description={member.description}
                  onClick={() => setSelectedMember(member)}
                />
              </div>
            ))}
          </div>

          {/* ===== EXPERTS ===== */}
          <div className="hero-content-left text-white mb-4 mt-5">
            <h3 className="page-tital mt-1">Our Experts</h3>
            <p className="contain-colur">
              “Dedicated professionals driving success”
            </p>
          </div>

          <div className="row justify-content-center">
            {experts.map((member) => (
              <div className="col-lg-4 col-md-6 mb-4" key={member.id}>
                <TeamCard
                  image={teamImg}
                  name={member.name}
                  qualification={member.education}
                  experience={member.experience}
                  description={member.description}
                  onClick={() => setSelectedMember(member)}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Team;