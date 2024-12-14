import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        contact: '',
        preferredStudy: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword, contact, preferredStudy } = formData;

        if (!name || !email || !password || !confirmPassword || !contact || !preferredStudy) {
            setError('Please fill out all fields');
            return;
          }

          if (!/\S+@\S+\.\S+/.test(email)){
            setError("Invalid email address");
            return;
          }

          if (password !== confirmPassword){
            setError("Passwords do not match");
            return;
          }

          if (!/^\+?[1-9]\d{1,14}$/.test(contact)){
            setError("Invalid Contact Number. Include the country code for WhatsApp.");
            return;
          }

          setError('');
          console.log("Registration Succesful:", formData);
          alert("Registration Successful!!!");
};

return(
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light pt-5" >
        <div className="ard shadow-lg p-4" style={{ width: '100%', maxWidth: '500px' }} >
            <h1 className='text-center mb-4'>Register</h1>
            {error && <div className='alert alert-danger'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your name"
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your password"
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Confirm your password"
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact Number (WhatsApp preferred)</label>
                    <input
                   type="tel"
                   id="contact"
                   name="contact"
                   value={formData.contact}
                   onChange={handleChange}
                   className="form-control"
                   placeholder="Enter your WhatsApp number with country code (e.g., +1234567890)"
                   required
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="preferredStudy" className="form-label">Preferred Field of Study</label>
                 <select
                   id="preferredStudy"
                   name="preferredStudy"
                   value={formData.preferredStudy}
                   onChange={handleChange}
                   className="form-select"
                   required
                 >
                   <option value="">Select a field</option>
                   <option value="Technology">Technology</option>
                   <option value="Business">Business</option>
                   <option value="Art & Design">Art & Design</option>
                   <option value="Health & Fitness">Health & Fitness</option>
                 </select>
               </div>
               <button type="submit" className="btn btn-success w-100 fw-bold">Register</button>
            </form>
            <div className='text-center fw-bold mt-3'>
                <p>Already have an Account? <a href='/login'>Login</a></p>
            </div>
        </div>
    </div>
);
};

export default Registration;
