import { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    return /^[A-Za-z ]+$/.test(name);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && formData.user_name && formData.user_email) {
      console.log("Form submitted", formData);
      // Handle form submission logic here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{ justifySelf: 'center' }}>
      <h2 className="text-xl font-bold my-2">Abe Theresa Shaji Perincheril (24250837)</h2>
      <h3 className="text-lg mb-4">Share Your Feedback!</h3>

      <form onSubmit={handleSubmit} className="bg-white p-6 border rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold">Name  :    </label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="mail" className="block font-semibold"> Email   :    </label>
          <input
            type="email"
            id="mail"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="msg" className="block font-semibold">Message: </label>
          <textarea
            id="msg"
            name="user_message"
            value={formData.user_message}
            onChange={handleChange}
            className="w-full border p-2 rounded-md h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        <button style={{color:"blue"}}
          type="submit" 
          className="bg-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-400" 
          disabled={Object.keys(errors).length > 0 || !formData.user_name || !formData.user_email}
        >
          Send your message
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
