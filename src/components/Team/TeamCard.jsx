// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import "./Team.css";

// export default function TeamCard({ image, name, role, slug }) {
//   return (
//     <Link to={`/team/${slug}`} className="team-card-link">
//       <div className="team-card-wrapper">
//         <div className="team-image-box shine-animate">
//           <img src={image} alt={name} />
//         </div>

//         <div className="team-info-box">
//           <h4>{name}</h4>
//           <p>{role}</p>

//         </div>
//       </div>
//     </Link>
//   );
// }


export default function TeamCard({
  image,
  name,
 qualification,

  onClick,
}) {
  return (
    <div className="team-card-wrapper" onClick={onClick}>
      <div className="team-image-box shine-animate">
        <img src={image} alt={name} />
      </div>

      <div className="team-info-box">
        <h4>{name}</h4>
        <span className="team-role">{qualification}</span>
      </div>
    </div>
  );
}