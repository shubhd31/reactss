import React from "react";
import "./SignIn.css";

function SignIn(): JSX.Element {
  return (
    <section className="container mt-5 ">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/* <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div> */}
          <div className="card shadow-lg p-4 border col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <h3 className="mb-3 text-center" style={{ color: "blue" }}>
                LogIn
              </h3>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="text-center text-lg-start mb-2 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn"
                  style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
