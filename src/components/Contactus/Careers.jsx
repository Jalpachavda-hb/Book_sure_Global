import React, { useState } from "react";
import "./Contact.css";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    email: "",
    dob: "",
    phone: "",
    gender: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; 
    }

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.resume) newErrors.resume = "Resume is required";

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Career Form Data:", formData);
    alert("Application submitted successfully (Dummy)");

    setFormData({
      fullName: "",
      position: "",
      email: "",
      dob: "",
      phone: "",
      gender: "",
      resume: null,
    });
  };

  return (
    <>
      <PageBanner title="Careers" bgImage={bannerImg} />

      <section className="career-page">
        <div className="container">
          {/* HEADER */}
          <div className="career-header">
            {/* <span className="career-badge">Careers</span> */}
            <h1>Join Our Growing Team</h1>
            <p>
              We are always looking for talented professionals to grow with us.
              Apply today and build your future with our organization.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="career-card">
            <h3>Apply for This Position</h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                {/* FULL NAME */}
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <span>{errors.fullName}</span>}
                </div>

                {/* POSITION */}
                <div className="form-group">
                  <label>Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Applied position"
                  />
                  {errors.position && <span>{errors.position}</span>}
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                  {errors.email && <span>{errors.email}</span>}
                </div>

                {/* DOB */}
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                  {errors.dob && <span>{errors.dob}</span>}
                </div>

                {/* PHONE */}
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10 digit mobile number"
                  />
                  {errors.phone && <span>{errors.phone}</span>}
                </div>

                {/* GENDER */}
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  {errors.gender && <span>{errors.gender}</span>}
                </div>

                {/* RESUME */}
                <div className="form-group full">
                  <label>Upload Resume</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                  />
                  {errors.resume && <span>{errors.resume}</span>}
                </div>
              </div>

              <button type="submit" className="career-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
