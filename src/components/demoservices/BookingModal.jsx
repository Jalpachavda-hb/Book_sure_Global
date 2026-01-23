import { useState } from "react";
import "./DemoServices.css";

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

const BookingModal = ({ onClose }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="modal-overlay">
      <div className="booking-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h3>Schedule Your Free Call</h3>
        <p>Pick your preferred date & time</p>

        <div className="booking-grid">
          <div>
            <label>Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label>Select Time</label>
            <div className="time-grid">
              {timeSlots.map((t, i) => (
                <button
                  key={i}
                  className={time === t ? "active" : ""}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          className="confirm-btn"
          disabled={!date || !time}
          onClick={() => alert(`Meeting Booked on ${date} at ${time}`)}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
