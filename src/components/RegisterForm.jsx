import React from 'react'
import { useState } from 'react'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email:'',
        password:''
    });
const handleInputChange = (e) => {
const {name,value}= e.target;
setFormData({
    ...formData,
    [name]:value,
});
};

const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    setFormData({
        username:'',
        email:'',
        password:'',
    })
}


  return (
    <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-6">
        <h1>Register Here</h1>
        <form onSubmit={handleRegisterSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default RegisterForm
