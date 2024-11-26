import React, { useState } from 'react';
import styles from '../design/FormValidation.module.css';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords must match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      {["firstName", "lastName", "email", "password", "confirmPassword"].map(
        (field) => (
          <div key={field} style={{ marginBottom: "10px" }}>
            <label>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
              <input
                type={field.includes("password") ? "password" : "text"}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                style={{ display: "block", width: "100%" }}
              />
            </label>
            {errors[field] && (
              <p style={{ color: "red" }}>{errors[field]}</p>
            )}
          </div>
        )
      )}
      <div style={{ marginBottom: "10px" }}>
        <label>
          Date of Birth:
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            style={{ display: "block", width: "100%" }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: "10px 20px", background: "green", color: "white", border: "none" }}>
        Submit
      </button>
    </form>
  );
};

export default FormValidation;

