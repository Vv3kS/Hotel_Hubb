



// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     uid: '',
//     contactNo: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form fields before proceeding
//     const newErrors = {};
//     if (!formData.username) {
//       newErrors.username = 'Username is required';
//     }
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }
//     if (!formData.firstName) {
//       newErrors.firstName = 'First Name is required';
//     }
//     if (!formData.lastName) {
//       newErrors.lastName = 'Last Name is required';
//     }
//     if (!formData.uid) {
//       newErrors.uid = 'UID is required';
//     }
//     if (!formData.contactNo) {
//       newErrors.contactNo = 'Contact Number is required';
//     }

//     setErrors(newErrors);

//     // If there are no errors, you can proceed with the registration logic
//     if (Object.keys(newErrors).length === 0) {
//       try {
//         const response = await fetch('http://localhost:5001/registration', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           console.log('Registration successful:', data.message);
//           // You can redirect the user or perform other actions after successful registration
//         } else {
//           console.error('Registration failed:', data.error);
//           // Handle registration failure
//         }
//       } catch (error) {
//         console.error('Error during registration:', error.message);
//         // Handle any unexpected errors
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Username:</label>
//           <input
//             type="text"
//             className={`form-control ${errors.username ? 'is-invalid' : ''}`}
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//           {errors.username && <div className="invalid-feedback">{errors.username}</div>}
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email:</label>
//           <input
//             type="email"
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password:</label>
//           <input
//             type="password"
//             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//           {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//         </div>
//         <div className="mb-3">
//           <label className="form-label">First Name:</label>
//           <input
//             type="text"
//             className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//           />
//           {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Last Name:</label>
//           <input
//             type="text"
//             className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//           />
//           {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
//         </div>
//         <div className="mb-3">
//           <label className="form-label">UID:</label>
//           <input
//             type="text"
//             className={`form-control ${errors.uid ? 'is-invalid' : ''}`}
//             name="uid"
//             value={formData.uid}
//             onChange={handleInputChange}
//           />
//           {errors.uid && <div className="invalid-feedback">{errors.uid}</div>}
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Contact Number:</label>
//           <input
//             type="text"
//             className={`form-control ${errors.contactNo ? 'is-invalid' : ''}`}
//             name="contactNo"
//             value={formData.contactNo}
//             onChange={handleInputChange}
//           />
//           {errors.contactNo && <div className="invalid-feedback">{errors.contactNo}</div>}
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;




import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    uid: '',
    contactNo: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields before proceeding
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.uid) {
      newErrors.uid = 'UID is required';
    }
    if (!formData.contactNo) {
      newErrors.contactNo = 'Contact Number is required';
    }

    setErrors(newErrors);

    // If there are no errors, you can proceed with the registration logic
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Registration successful:', data.message);
          // You can redirect the user or perform other actions after successful registration
        } else {
          console.error('Registration failed:', data.error);
          // Handle registration failure
        }
      } catch (error) {
        console.error('Error during registration:', error.message);
        // Handle any unexpected errors
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="uid" className="form-label">UID:</label>
          <input
            type="text"
            className={`form-control ${errors.uid ? 'is-invalid' : ''}`}
            name="uid"
            id="uid"
            value={formData.uid}
            onChange={handleInputChange}
          />
          {errors.uid && <div className="invalid-feedback">{errors.uid}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="contactNo" className="form-label">Contact Number:</label>
          <input
            type="text"
            className={`form-control ${errors.contactNo ? 'is-invalid' : ''}`}
            name="contactNo"
            id="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
          />
          {errors.contactNo && <div className="invalid-feedback">{errors.contactNo}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
