import { useState } from "react";
import "./Contact.css";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import { postcareer } from "../../utils/HandleSubmit";
import SubmissionPopup from "../../utils/SubmissionPopup";
const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }

    if (name === "resume") {
      const file = files[0];

      if (file && file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          resume: "Resume must be less than 2MB",
        }));
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    // Remove error on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.position.trim()) newErrors.position = "Position is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be exactly 10 digits";

    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await postcareer(formData);

      if (res.success) {
        setPopup({
          show: true,
          type: "success",
          message:
            "Thank you for your submission. We have received your information and will process it shortly.",
        });

        setFormData({
          fullName: "",
          position: "",
          email: "",
          phone: "",
          resume: null,
        });

        setErrors({});
      } else {
        setPopup({
          show: true,
          type: "error",
          message: res.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBanner title="Careers" bgImage={bannerImg} />

      <section className="career-page">
        <div className="container">
          <div className="career-header">
            <h1>Join Our Growing Team</h1>
            <p>
              We are always looking for talented professionals to grow with us.
              Apply today and build your future with our organization.
            </p>
          </div>

          <div className="career-card">
            <h3>Apply Now</h3>

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

              <button type="submit" className="career-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
      {popup.show && (
        <SubmissionPopup
          type={popup.type}
          message={popup.message}
          onClose={() => setPopup({ show: false, type: "", message: "" })}
        />
      )}
    </>
  );
};

export default Careers;
