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
