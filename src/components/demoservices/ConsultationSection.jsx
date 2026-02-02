import { useState } from "react";
import "./DemoServices.css";

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

// Blocked Dates Example
const blockedDatesFromAdmin = ["2026-01-15", "2026-02-05"];

const ConsultationSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // ✅ Disable Past + Sundays + Blocked
  const isDisabled = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateObj = new Date(year, month, day);

    const formatted = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    return (
      dateObj < today ||
      dateObj.getDay() === 0 ||
      blockedDatesFromAdmin.includes(formatted)
    );
  };

  return (
    <section className="consult-new">
      <div className="consult-wrapper">

        {/* ✅ LEFT CONTENT */}
        <div className="consult-left">
          <h2>
            Book a <span>Free Consultation</span>
          </h2>

          <p>
            Schedule your strategy call with our experts and get a personalized
            roadmap to streamline your accounting & business operations.
          </p>

      
          <button className="consult-main-btn">
            Get Started Today →
          </button>
        </div>

        {/* ✅ RIGHT CALENDAR CARD */}
        <div className="consult-right">
          <div className="calendar-modern">

            {/* HEADER */}
            <h3>Select Your Date</h3>

            {/* MONTH NAV */}
            <div className="cal-nav">
              <button
                onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
              >
                ‹
              </button>

              <span>
                {monthNames[month]} {year}
              </span>

              <button
                onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
              >
                ›
              </button>
            </div>

            {/* DAYS */}
            <div className="cal-grid">
              {["M","T","W","T","F","S","S"].map((d) => (
                <span key={d} className="cal-day-name">
                  {d}
                </span>
              ))}

              {/* Empty slots */}
              {[...Array(firstDay === 0 ? 6 : firstDay - 1)].map((_, i) => (
                <span key={i}></span>
              ))}

              {/* Month days */}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const disabled = isDisabled(day);

                return (
                  <button
                    key={day}
                    disabled={disabled}
                    className={`cal-date ${
                      selectedDate === day ? "active" : ""
                    }`}
                    onClick={() => setSelectedDate(day)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* ✅ TIME SLOTS */}
            {selectedDate && (
              <div className="slot-box">
                <h4>Available Time Slots</h4>

                <div className="slots">
                  {["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"].map(
                    (time) => (
                      <button key={time} className="slot-btn">
                        {time}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConsultationSection;
