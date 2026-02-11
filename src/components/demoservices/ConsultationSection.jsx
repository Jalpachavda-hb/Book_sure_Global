import { useState } from "react";
import "./DemoServices.css";
import november from "../../assets/Images/monthimg/November.jpg";
import december from "../../assets/Images/monthimg/december.jpg";
import october from "../../assets/Images/monthimg/october.jpg";
import June from "../../assets/Images/monthimg/june.jpg";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
];

const timeZones = [
  "India Standard Time (IST)",
  "Eastern European Time",
  "UK, Ireland, Lisbon Time",
  "Moscow Time",
  "Turkey Time",
];
const adminLeaveDates = ["2026-02-14", "2026-02-20", "2026-02-25"];

function DetailsForm() {
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState([""]);

  const handleGuestChange = (index, value) => {
    const updated = [...guests];
    updated[index] = value;
    setGuests(updated);
  };

  const addGuestField = () => {
    setGuests([...guests, ""]);
  };

  return (
    <div className="details-form">
      <h2>Enter Details</h2>

      <label>Name *</label>
      <input type="text" />

      <label>Email *</label>
      <input type="email" />

      <button
        type="button"
        className="add-guest-btn"
        onClick={() => setShowGuests(true)}
      >
        + Add Guests
      </button>

      {showGuests && (
        <div className="guest-section">
          {guests.map((guest, index) => (
            <input
              key={index}
              type="email"
              placeholder="Guest email"
              value={guest}
              onChange={(e) => handleGuestChange(index, e.target.value)}
            />
          ))}

          <button
            type="button"
            className="add-more-btn"
            onClick={addGuestField}
          >
            + Add another guest
          </button>
        </div>
      )}

      <label>
        Please share anything that will help prepare for our meeting.
      </label>
      <textarea rows="4"></textarea>

      <p className="terms-text">
        By proceeding, you confirm that you agree to our
        <span> Terms of Use </span> and <span> Privacy Policy</span>.
      </p>

      <button className="schedule-btn">Schedule Event</button>
    </div>
  );
}

export default function ConsultationSection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [showTimeZone, setShowTimeZone] = useState(false);
  const [selectedZone, setSelectedZone] = useState(timeZones[0]);
const [showModal, setShowModal] = useState(false);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const monthImages = [
    october, // January (temporary)
    october, // February
    october, // March
    october, // April
    october, // May
    June, // June
    June, // July
    June, // August
    october, // September
    october, // October
    november, // November
    december, // December
  ];

  const isDateDisabled = (day) => {
    const fullDate = new Date(year, month, day);
    const dayOfWeek = fullDate.getDay(); // 0 = Sunday

    // Format like 2026-02-14
    const formattedDate = fullDate.toISOString().split("T")[0];

    // Disable Sundays
    if (dayOfWeek === 0) return true;

    // Disable admin leave dates
    if (adminLeaveDates.includes(formattedDate)) return true;

    return false;
  };

  return (
    <section
      className={`consult-wrapper-new ${step === 2 ? "step-two-full" : ""}`}
    >
      {/* LEFT VECTOR */}
      <div className="consult-left-new">
        <img key={month} src={monthImages[month]} alt={monthNames[month]} />
      </div>

      {/* RIGHT CARD */}
      <div className="consult-card-new">
        {step === 1 && (
          <>
            <h2>Select a Date & Time</h2>

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

            <div
              className={`calendar-time-layout ${
                selectedDate ? "two-column" : "full-width"
              }`}
            >
              {/* LEFT CALENDAR */}
              <div className="calendar-box">
                <div className="cal-grid">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                    (d) => (
                      <span key={d} className="cal-day-name">
                        {d}
                      </span>
                    ),
                  )}

                  {[...Array(firstDay === 0 ? 6 : firstDay - 1)].map((_, i) => (
                    <span key={i}></span>
                  ))}
                  {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1;
                    const disabled = isDateDisabled(day);

                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        className={`cal-date 
        ${selectedDate === day ? "active" : ""} 
        ${disabled ? "disabled-date" : ""}`}
                        onClick={() => {
                          if (!disabled) {
                            setSelectedDate(day);
                            setSelectedTime(null);
                          }
                        }}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div className="timezone">🌍 {selectedZone}</div>
              </div>

              {/* RIGHT TIME COLUMN */}
              {selectedDate && (
                <div className="time-column">
                  <div className="selected-date-title">
                    {monthNames[month]} {selectedDate}, {year}
                  </div>

                  <div className="time-scroll">
                    {timeSlots.map((time) => (
                      <div key={time} className="time-row">
                        <button
                          className={`time-btn ${selectedTime === time ? "active" : ""}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>

                        {selectedTime === time && (
                          <button
                            className="next-inline-btn"
                            onClick={() => setStep(2)}
                          >
                            Next
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* STEP 2 FORM */}
        {step === 2 && (
          <div className="step-two-layout">
            {/* 🔹 LEFT SIDEBAR */}
            <div className="summary-sidebar">
              <button className="back-circle" onClick={() => setStep(1)}>
                ←
              </button>

              <div className="host-name">{/* Hardik Ghoya */}</div>
              <h3 className="meeting-title">30 Minute Meeting</h3>

              <div className="summary-detail">⏱ 30 min</div>
              <div className="summary-detail">
                📅 {selectedTime}, {monthNames[month]} {selectedDate}, {year}
              </div>
              <div className="summary-detail">🌍 {selectedZone}</div>
            </div>

            {/* 🔹 RIGHT FORM */}
            <DetailsForm />
          </div>
        )}
      </div>
    </section>
  );
}
