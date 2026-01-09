import React from "react";
import { useParams } from "react-router-dom";
import { founders, teamMembers } from "./Team"; // only import named exports
import "./Team.css";

const TeamDetail = () => {
  const { slug } = useParams();

  // Combine both founders and team members into a single array
  const allMembers = [...founders, ...teamMembers];

  // Find clicked member
  const member = allMembers.find((item) => item.slug === slug);

  // Safety check
  if (!member) {
    return (
      <div className="container py-5 text-center">
        <h3>Team member not found</h3>
      </div>
    );
  }

  return (
    <section className="team-detail-page">
      <div className="container">
        {/* Header */}
        <div className="team-detail-header mt-3">
          <h1>{member.name}</h1>
          <span>{member.role}</span>
        </div>

        <div className="row mt-5">
          {/* Image */}
          <div className="col-lg-4">
            <div className="team-detail-img">
              <img src={member.image} alt={member.name} />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-8">
            <div className="team-detail-content">
              {member.details && member.details.trim() !== "" ? (
                member.details
                  .split("\n")
                  .map(
                    (para, index) =>
                      para.trim() !== "" && <p key={index}>{para}</p>
                  )
              ) : (
                <p>No details available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetail;
