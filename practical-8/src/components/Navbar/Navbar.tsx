import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import * as React from "react";
import "./Navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/loginSlice";
import { userAction } from "../interface/Interface";

const NavbarMain = () => {
  const data: userAction = JSON.parse(localStorage.getItem("login") || "{}");
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const logoutHandler = (): void => {
    navigate("/");
    dispatch(logout(false));
  };
  return (
    <Navbar style={{ backgroundColor: "#e3f2fd" }}>
      <Container style={{ flexWrap: "wrap" }}>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          {Object.keys(data).length !== 0 ? (
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
