import { Link } from "react-router-dom";
import * as React from "react";
import "./Navbar.css";
import { FC } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarMain = () => {
  return (
    // <div>
    //   <div className="NavbarMain">
    //     <div className="NavbarLeft">
    //       <div className="NavbarLogo">
    //         <img
    //           src="data:image/png;base64,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"
    //           alt="logo"
    //         />
    //       </div>
    //     </div>
    //     <div className="NavbarRight">
    //       <div className="NavbarRightLinks">
    //         <ul className="pages">
    //           <Link className="link" to="/">
    //             Home
    //           </Link>
    //           <Link className="link" to="ContactUS">
    //             Contact Us
    //           </Link>
    //           <Link className="link" to="SignUp">
    //             Sign Up!
    //           </Link>
    //           <Link className="link" to="SignIn">
    //             Log In!
    //           </Link>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Navbar bg="#e3f2fd" style={{ backgroundColor: "#e3f2fd" }}>
      <Container style={{ flexWrap: "wrap" }}>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/ContactUS">
            <Nav.Link>ContactUS</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/SignUp">
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/SignIn">
            <Nav.Link>SignIn</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
