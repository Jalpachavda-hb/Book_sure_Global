// import { useState } from "react";
// import "./DemoServices.css";

// const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

// const ConsultationSection = () => {
//   const [openCalendar, setOpenCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const today = new Date();
//   const month = today.getMonth();
//   const year = today.getFullYear();
//   const days = daysInMonth(month, year);

//   return (
//     <section className="consult-section">
//       {/* CTA CARD */}
//       <div className="consult-card">
//         <h2>Book Your Free Strategy Call</h2>
//         <p>
//           Talk with our experts and discover how we can streamline your business
//           operations with smart digital solutions.
//         </p>

//         <button
//           className="consult-btn"
//           onClick={() => setOpenCalendar(!openCalendar)}
//         >
//           Book Free Consultation
//         </button>
//       </div>

//       {/* INLINE CALENDAR */}
//       {openCalendar && (
//         <div className="calendar-wrapper">
//           <div className="calendar-card">
//             <h3>Select a Date</h3>

//             <div className="calendar-grid">
//               {[...Array(days)].map((_, i) => {
//                 const day = i + 1;
//                 return (
//                   <div
//                     key={day}
//                     className={`calendar-day ${
//                       selectedDate === day ? "active" : ""
//                     }`}
//                     onClick={() => setSelectedDate(day)}
//                   >
//                     {day}
//                   </div>
//                 );
//               })}
//             </div>

//             {selectedDate && (
//               <div className="time-section">
//                 <h4>Select Time</h4>
//                 <div className="time-slots">
//                   {["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"].map(
//                     (time, i) => (
//                       <button key={i} className="time-btn">
//                         {time}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ConsultationSection;

import { useState } from "react";
import BookingModal from "./BookingModal";
import "./DemoServices.css";

const ConsultationSection1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="consult-section">
        <div className="consult-content">
          <h2>Let’s Build Something Great Together</h2>
          <p>
            Book a free 30-minute strategy call with our experts and get
            personalized guidance.
          </p>

          <button className="consult-btn" onClick={() => setOpen(true)}>
            Book Free Consultation
          </button>
        </div>
      </section>

      {open && <BookingModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default ConsultationSection1;
