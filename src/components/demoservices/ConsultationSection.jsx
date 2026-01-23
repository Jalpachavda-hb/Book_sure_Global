import { useState } from "react";
import "./DemoServices.css";

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

// 👉 Example: dates blocked from ADMIN (API later)
const blockedDatesFromAdmin = [
  "2026-01-15",
  "2026-01-18",
  "2026-02-05",
];

const ConsultationSection = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday

  // ✅ Disable logic (PAST + SUNDAY + ADMIN BLOCK)
  const isDisabled = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateObj = new Date(year, month, day);

    const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    return (
      dateObj < today ||
      dateObj.getDay() === 0 ||
      blockedDatesFromAdmin.includes(formattedDate)
    );
  };

  return (
    <section className="consult-section">
      {/* CTA CARD */}
      <div className="consult-card">
        <h2>Book Your Free Strategy Call</h2>
        <p>
          Talk with our experts and discover how we can streamline your business
          operations with smart digital solutions.
        </p>

        <button
          className="consult-btn"
          onClick={() => setOpenCalendar(!openCalendar)}
        >
          Book Free Consultation
        </button>
      </div>

      {/* CALENDAR */}
      {openCalendar && (
        <div className="calendar-wrapper">
          <div className="calendar-card dark-calendar">
            
            {/* HEADER */}
            <div className="calendar-top">
              <h3>Select a Date & Time</h3>
            </div>

            {/* MONTH NAV */}
            <div className="calendar-nav">
              <button
                onClick={() =>
                  setCurrentDate(new Date(year, month - 1, 1))
                }
              >
                ‹
              </button>

              <span>{monthNames[month]} {year}</span>

              <button
                onClick={() =>
                  setCurrentDate(new Date(year, month + 1, 1))
                }
              >
                ›
              </button>
            </div>

            {/* WEEK DAYS */}
            <div className="calendar-week">
              {["MON","TUE","WED","THU","FRI","SAT","SUN"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* DAYS GRID */}
            <div className="calendar-grid">
              {[...Array(firstDay === 0 ? 6 : firstDay - 1)].map((_, i) => (
                <span key={`empty-${i}`} />
              ))}

              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const disabled = isDisabled(day);

                return (
                  <button
                    key={day}
                    className={`calendar-day ${
                      selectedDate === day ? "active" : ""
                    }`}
                    disabled={disabled}
                    onClick={() => setSelectedDate(day)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* TIME SLOTS */}
            {selectedDate && (
              <div className="time-section">
                <h4>Available Time</h4>
                <div className="time-slots">
                  {["10:00 AM","12:00 PM","02:00 PM","04:00 PM"].map(
                    (time) => (
                      <button key={time} className="time-btn">
                        {time}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ConsultationSection;
