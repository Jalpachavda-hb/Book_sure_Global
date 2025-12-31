// import { FaEnvelope, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";
// import './Navbar.css';
// export default function TopBar() {
//   return (
//     <div className="topbar d-none d-lg-block">
//       <div className="container d-flex justify-content-between align-items-center">
//         <div className="topbar-left">
//           <span><FaEnvelope /> evanjohnson33@gmail.com</span>
//           <span className="ms-4">
//             <FaMapMarkerAlt /> 88 Brooklyn Golden Street, New York
//           </span>
//         </div>
//         <div className="topbar-right">
//           <FaFacebookF />
//         </div>
//       </div>
//     </div>
//   );
// }


import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Navbar.css";

export default function TopBar() {
  return (
    <div className="topbar d-none d-lg-block">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* LEFT */}
        <div className="topbar-left d-flex align-items-center mt-2">
          <span className="topbar-item">
            <FaEnvelope /> evanjohnson33@gmail.com
          </span>

          <span className="topbar-divider">|</span>

          <span className="topbar-item">
            <FaMapMarkerAlt /> 88 Brooklyn Golden Street, New York
          </span>
        </div>

        {/* RIGHT */}
        <div className="topbar-right d-flex align-items-center  mt-2">
          <a href="mailto:evanjohnson33@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>

          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>

          <a href="#" className="social-icon">
            <FaInstagram />
          </a>

          <a href="#" className="social-icon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
