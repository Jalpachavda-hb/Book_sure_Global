// import "./Aboutus.css";
// import Mission from "../../assets/Images/Aboutus/mission.jpg";
// import Vision from "../../assets/Images/Aboutus/vision.jpg";
// import {getcompanyhighlight} from "../../utils/Getdata";
// const Ourmission = () => {
//   return (
//     <>
//       <section className="mission-vision-section container">
//         <div className="mv-box">
//           <div className="mv-content mission">
//             <h4>Our Mission</h4>
//             <p>
//               To provide accurate, secure and cost-effective accounting
//               solutions powered by global expertise.
//             </p>
//           </div>

//           <div className="mv-img">
//             <img src={Mission} alt="Mission" />
//           </div>

//           <div className="mv-content vision">
//             <h4>Our Vision</h4>
//             <p>To be a trusted global partner for accounting excellence.</p>
//           </div>

//           <div className="mv-img">
//             <img src={Vision} alt="Vision" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Ourmission;

import React, { useEffect, useState } from "react";
import { getcompanyhighlight } from "../../utils/Getdata";
import "./Aboutus.css";

const Ourmission = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadMission();
  }, []);

  const loadMission = async () => {
    const res = await getcompanyhighlight();
   
    setData(res);
  };

  if (!data) return null;

  return (
    <section className="mission-vision-section container">
      <div className="mv-box">

        <div className="mv-content mission">
          <h4>{data.mission_title}</h4>
          <p>{data.mission_description}</p>
        </div>

        <div className="mv-img">
          <img src={data.mission_image} alt="Mission" />
        </div>

        <div className="mv-content vision">
          <h4>{data.vision_title}</h4>
          <p>{data.vision_description}</p>
        </div>

        <div className="mv-img">
          <img src={data.vision_image} alt="Vision" />
        </div>

      </div>
    </section>
  );
};

export default Ourmission;