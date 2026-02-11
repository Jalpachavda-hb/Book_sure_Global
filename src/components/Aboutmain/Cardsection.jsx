// import React from "react";
// import { FaRegSmile } from "react-icons/fa";
// import "./Aboutus.css";
// import { GoTrophy } from "react-icons/go";
// import { IoMdGlobe } from "react-icons/io";
// import { GoStopwatch } from "react-icons/go";
// import {getcompanyhighlight} from "../../utils/Getdata";
// const Cardsection = () => {
//   return (
//     <section className="stats-row-section">
//       <div className="container">
//         <div className="row">

//           <div className="col-lg-3 col-md-6">
//             <div className="stat-item">
//               <GoTrophy className="stat-icon" />
//               <div className="stat-content">
//                 <h4>45+</h4>
//                 <p>Successfully<br />Completed Projects</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6">
//             <div className="stat-item">
//               <FaRegSmile className="stat-icon" />
//               <div className="stat-content">
//                 <h4>92K</h4>
//                 <p>Satisfied<br />100% Our Clients</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6">
//             <div className="stat-item">
//               <IoMdGlobe className="stat-icon" />
//               <div className="stat-content">
//                 <h4>19+</h4>
//                 <p>All Over The World<br />We Are Available</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6">
//             <div className="stat-item">
//               <GoStopwatch  className="stat-icon" />
//               <div className="stat-content">
//                 <h4>25+</h4>
//                 <p>Years of Experiences<br />To Run This Company</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cardsection;

import React, { useEffect, useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { GoTrophy, GoStopwatch } from "react-icons/go";
import { getcompanyhighlight } from "../../utils/Getdata";
import "./Aboutus.css";

const Cardsection = () => {
  const [data, setData] = useState(null);

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count4, setCount4] = useState(1);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const res = await getcompanyhighlight();
    setData(res);
  };

  // SIMPLE COUNTER FUNCTION
  const startCounter = (setter, target) => {
    let start = 1;
    const end = Number(target);
    const duration = 2000; // 2 seconds
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setter(start);
    }, incrementTime);
  };

  useEffect(() => {
    if (!data) return;

    startCounter(setCount1, data.stat_1_value);
    startCounter(setCount2, data.stat_2_value);
    startCounter(setCount4, data.stat_4_value);

  }, [data]);

  if (!data) return null;

  return (
    <section className="stats-row-section">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="stat-item">
              <GoTrophy className="stat-icon" />
              <div className="stat-content">
                <h4>{count1}+</h4>
                <p>{data.stat_1_text}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">  
            <div className="stat-item">
              <FaRegSmile className="stat-icon" />
              <div className="stat-content">
                <h4>{count2}K</h4>
                <p>{data.stat_2_text}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="stat-item">
              <GoStopwatch className="stat-icon" />
              <div className="stat-content">
                <h4>{count4}+</h4>
                <p>{data.stat_4_text}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cardsection;