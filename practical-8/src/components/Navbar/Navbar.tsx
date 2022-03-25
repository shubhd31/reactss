import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import * as React from "react";
import "./Navbar.css";
import { FC } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/logoutSlice";

const NavbarMain = () => {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("login"));
  const navigate: NavigateFunction = useNavigate();
  const logoutHandler = (): void => {
    navigate("/");
    dispatch(logout(false));
  };
  return (
    <Navbar bg="#e3f2fd" style={{ backgroundColor: "#e3f2fd" }}>
      <Container style={{ flexWrap: "wrap" }}>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          {/* <LinkContainer to="/ContactUS">
            <Nav.Link>ContactUS</Nav.Link>
          </LinkContainer> */}

          {/* <LinkContainer to="/SignUp">
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer> */}
          {data ? (
            <>
              <LinkContainer to="/user">
                <Nav.Link>User</Nav.Link>
              </LinkContainer>

              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </>
          ) : (
            <LinkContainer to="/SignIn">
              <Nav.Link>SignIn</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
