import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="container col-md-10">
        <h1>Sign Up</h1>
        <label htmlFor="myfile">Photo</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          placeholder="+"
        />
        <div className="row">
          <form className="col-md-5">
            <div className="form-group">
              <label htmlFor="name" className="mb-0">
                Name
              </label>
              <input
                type="text"
                className="form-control inputcolor"
                id="examplename"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="mb-0">
                Email address
              </label>
              <input
                type="email"
                className="form-control inputcolor"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="examplePhoneNumber" className="mb-0">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control inputcolor"
                id="examplePhoneNumber1"
                placeholder="Phone Number"
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
                placeholder="Password"
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
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="reset" className="btn btn-danger">
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

export default Home;
