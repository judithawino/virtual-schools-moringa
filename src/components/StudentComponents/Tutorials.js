import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

const Tutorials = () => {
  return (
    <>
      <Navbar className='navigation' bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" >
               <i className='bi bi-house' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
          </Navbar.Brand>
        </Container>

      </Navbar>

    </>
  )
}

export default Tutorials;
