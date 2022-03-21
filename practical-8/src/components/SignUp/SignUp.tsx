import "./SignUp.css";
import * as React from "react";

const SignUp = () => {
  return (
    <div className="container">
      <div className="container col-md-10">
        <label className="h3 font-weight-bold text-left mt-3"> Sign Up </label>
        <div className="row">
          <form className="col-md-5">
            <div className="form-group">
              <div className="text-center">
                <label role="button">
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    id="file"
                    hidden
                  />
                  Photo +
                </label>
              </div>
              <label htmlFor="name" className="mb-0">
                Name
              </label>
              <input
                type="text"
                className="form-control inputcolor"
                id="examplename"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="mb-0">
                Email
              </label>
              <input
                type="email"
                className="form-control inputcolor"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="examplePhoneNumber" className="mb-0">
                PhoneNo
              </label>
              <input
                type="tel"
                className="form-control inputcolor"
                id="examplePhoneNumber1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="mb-0">
                Password
              </label>
              <input
                type="password"
                className="form-control inputcolor"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword2" className="mb-0">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control inputcolor"
                id="exampleInputPassword2"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="reset" className="btn btn-danger ml-3">
              Reset
            </button>
          </form>
          <img
            src="https://i.ibb.co/DVp4DTV/Microsoft-Teams-image.png"
            alt="Laptop Lady"
            className="col"
            // style={{ width: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
