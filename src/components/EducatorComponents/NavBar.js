import React, { Link } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
//import Button from 'react-bootstrap/Button';
import { Nav } from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <>
        <Navbar className="navigation" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">E-Masomo</Navbar.Brand>
            <Nav.Link
              className="btn"
              variant="info"
              as={Link}
              to="/"
              onClick={() => localStorage.removeItem("jwt")}
            >
              Log out
            </Nav.Link>{" "}
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavBar;
