import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SubmissionPopup.css";

const SubmissionPopup = ({ type, message, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div
          className={`popup-icon ${
            type === "success" ? "success" : "error"
          }`}
        >
          {type === "success" ? <FaCheck /> : <FaTimes />}
        </div>

        <h3>
          {type === "success"
            ? "Submission Successful!"
            : "Submission Failed!"}
        </h3>

        <p>{message}</p>

        {type === "success" ? (
          <button
            className="popup-btn success-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        ) : (
          <button
            className="popup-btn error-btn"
            onClick={onClose}
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default SubmissionPopup;