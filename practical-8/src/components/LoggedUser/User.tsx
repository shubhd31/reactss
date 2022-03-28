import React from "react";
import "./User.css";

const User = () => {
  const data: any = JSON.parse(localStorage.getItem("login") || "{}");

  return (
    <>
      <div className="card_lu mt-5">
        <img src={data.image} alt="User Profile" style={{ width: "100%" }} />
        <h3 className="pt-3">{data.name}</h3>
        <p className="title_lu">{data.email}</p>
        <p>Contact</p>
        <div
          style={{ margin: "24px 0" }}
          className="d-flex justify-content-around pb-3"
        >
          <a href="#">
            <i className="fa fa-dribbble a_lu"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter a_lu"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin a_lu"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook a_lu"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default User;
