import React,{Link} from 'react'
import Container from 'react-bootstrap/Container';
// import moment from 'moment';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Styles/Navbar.css';
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar className='navigation' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Masomo</Navbar.Brand>

          <Nav.Link className='btn' variant="info"  as={Link} to="/"
                onClick={() => localStorage.removeItem("jwt")}>Log out</Nav.Link>{' '}


        </Container>

      </Navbar>

    </>
  )
}

export default NavBar;
