import React, { useState } from "react";
import "./Pricing.css";
const InquiryForm = () => {
  const [form, setForm] = useState({
    plan: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Numeric validation for phone
    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 10)) return;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.plan) newErrors.plan = "Please select a plan";
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Contact number is required";
    else if (form.phone.length !== 10)
      newErrors.phone = "Contact number must be 10 digits";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMsg(
        "Thank you! Our team will contact you as soon as possible."
      );

      // Reset form
      setForm({
        plan: "",
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      // Auto hide after 10 seconds
      setTimeout(() => {
        setSuccessMsg("");
      }, 10000);
    }
  };

  return (
    <>
      <div className="text-center mt-5 mb-3">
        <h3 className="page-tital fw-bold">Request Pricing Information</h3>
        <p className="text-muted">
          Submit your inquiry and our team will get back to you
        </p>
      </div>
      <div className="inquiry-wrapper mt-5">
        <div className="pricing-card p-4">
          <h5 className="fw-bold mb-3">Inquiry Form</h5>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Plan */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Select Plan Type
                </label>
                <select
                  name="plan"
                  className="form-select"
                  value={form.plan}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option value="MONTHLY PLAN">MONTHLY PLAN</option>
                  <option value="PROJECT BASED">PROJECT BASED</option>
                  <option value="PAY AS YOU GO">PAY AS YOU GO</option>
                </select>
                {errors.plan && (
                  <small className="text-danger">{errors.plan}</small>
                )}
              </div>

              {/* Name */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Contact Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone}</small>
                )}
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              {/* Message full width */}
              <div className="col-12">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  className="form-control"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}
              </div>
            </div>

            <button className="btn btnplan w-100 mt-3" type="submit">
              Submit Inquiry
            </button>
          </form>
          {successMsg && (
            <div className="alert alert-success py-2 mb-3 mt-5">{successMsg}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
