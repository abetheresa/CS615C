import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_message: "",
    user_rating: "",
    user_subject: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateName = (name) => /^[A-Za-z ]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+?\d{10,15}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let newErrors = { ...errors };
    if (name === "user_name" && !validateName(value)) {
      newErrors.user_name = "Only letters and spaces are allowed.";
    } else {
      delete newErrors.user_name;
    }
    if (name === "user_email" && !validateEmail(value)) {
      newErrors.user_email = "Enter a valid email address.";
    } else {
      delete newErrors.user_email;
    }
    if (name === "user_phone" && !validatePhone(value)) {
      newErrors.user_phone = "Enter a valid phone number.";
    } else {
      delete newErrors.user_phone;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && formData.user_name && formData.user_email) {
      setSubmitted(true);
    }
  };

  const closePopup = () => {
    setSubmitted(false);
    setFormData({
      user_name: "",
      user_email: "",
      user_phone: "",
      user_message: "",
      user_rating: "",
      user_subject: "",
    });
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center text-primary mb-4">✨ Share Your Feedback! ✨</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className={`form-control ${errors.user_name ? "is-invalid" : ""}`}
            />
            {errors.user_name && <div className="invalid-feedback">{errors.user_name}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className={`form-control ${errors.user_email ? "is-invalid" : ""}`}
            />
            {errors.user_email && <div className="invalid-feedback">{errors.user_email}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              className={`form-control ${errors.user_phone ? "is-invalid" : ""}`}
            />
            {errors.user_phone && <div className="invalid-feedback">{errors.user_phone}</div>}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="user_message"
              value={formData.user_message}
              onChange={handleChange}
              className="form-control"
              rows="3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={Object.keys(errors).length > 0 || !formData.user_name || !formData.user_email}
          >
            🚀 Send your message
          </button>
        </form>
      </div>

      {/* ✅ Thank You Modal */}
      {submitted && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-4 text-center">
              <h3 className="text-success">🎉 Thank You!</h3>
              <p>Your feedback has been received. 😊</p>
              <button onClick={closePopup} className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bootstrap Modal Overlay */}
      {submitted && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default FeedbackForm;
