import React from 'react';

const LoginForm = () => {
  return (
    <div className="container mt-5">
      <div className="row">
     
        <div className="col-md-6">
         
          <img
            src="/images/arts.jpg"
            alt=""
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <form>
            <h2 className="mb-4 text-center">Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
