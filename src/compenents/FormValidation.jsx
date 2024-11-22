import React, { useState } from 'react';
import styles from './styles/FormValidation.module.css';

const FormValidation = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!form.firstName) tempErrors.firstName = 'First Name is required';
    if (!form.lastName) tempErrors.lastName = 'Last Name is required';
    if (!form.email.includes('@')) tempErrors.email = 'Invalid email address';
    if (form.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    if (!form.dob) tempErrors.dob = 'Date of Birth is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label>First Name</label>
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
        {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
      </div>

      <div className={styles.field}>
        <label>Last Name</label>
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
        {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
      </div>

      <div className={styles.field}>
        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
      </div>

      <div className={styles.field}>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
      </div>

      <div className={styles.field}>
        <label>Date of Birth</label>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} />
        {errors.dob && <span className={styles.error}>{errors.dob}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
