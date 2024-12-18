import React, { useContext } from "react";
import logo from "../../Images/evangadi-logo-header.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userProvider } from "../../Context/UserProvider";
import "./Header.css";

function Header({ logOut }) {
  const [user, setUser] = useContext(userProvider);
  const navigate = useNavigate();

  function handleButtonClick() {
    if (user.userName) {
      logOut();
    } else {
      navigate("/secondPage");
    }
  }

  function handleHomeClick() {
    if (user.userName) {
      navigate("/home"); // Redirect to the home (question and answer) page if user is logged in
    } else {
      navigate("/"); // Otherwise, redirect to the landing page
    }
  }

  return (
    <Navbar expand="lg" className="navbar" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-icon"
        >
          <span>
            <i
              className="fas fa-bars"
              style={{ color: "black", fontSize: "2em" }}
            ></i>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="black link blakkk"
              onClick={handleHomeClick}
            >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/how-it-works" className="black link">
              How it Works
            </Nav.Link>
          </Nav>
          <Nav className="m-0 m-md-3">
            <button className="btn btn-success" onClick={handleButtonClick}>
              {user.userName ? "Log Out" : "Sign In"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
