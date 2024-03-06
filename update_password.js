// update_password.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdatePassword = () => {
  const [formData, setFormData] = useState({ currentPassword: '', newPassword: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update password logic here
    // Validate form fields before proceeding
    const newErrors = {};
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current Password is required';
    }
    if (!formData.newPassword) {
      newErrors.newPassword = 'New Password is required';
    }

    setErrors(newErrors);

    // If there are no errors, you can proceed with the update password logic
    if (Object.keys(newErrors).length === 0) {
      // Add your update password logic here
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Current Password:</label>
          <input
            type="password"
            className={`form-control ${errors.currentPassword ? 'is-invalid' : ''}`}
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleInputChange}
          />
          {errors.currentPassword && <div className="invalid-feedback">{errors.currentPassword}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">New Password:</label>
          <input
            type="password"
            className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
          {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
