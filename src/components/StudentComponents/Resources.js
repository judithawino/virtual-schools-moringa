import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Styles/Resources.css'
import { Container, Navbar } from 'react-bootstrap';


const Resources = () => {
    const cardInfo = [
        {image:"https://media.geeksforgeeks.org/wp-content/uploads/20190709181948/Python-Crash-Course.jpg", title:"Newdoc", text:"welcome"},
        {image:"https://miro.medium.com/max/1200/1*qjzRVOyNL_AP_ZfRT0OfOw.jpeg", title:"Setbook", text:"nice book"},
    ]; 

    const renderCard = (card, index) => {
        return(
            
            <Row xs={1} md={3} className="grid">
            {Array.from({ length: 12}).map((_, idx) => (
            <Col>
            <Card style={{ width: '9rem', height:'15rem',margin:'20px' }} key={index} className="box">
                    <Card.Img variant="top" src = {card.image} />
                <Card.Body>

                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                       {card.text}
                    </Card.Text>

                </Card.Body>
            </Card>
            </Col> 
            ))}
         </Row>
        )
    }
    
  return (
      <div className='res-nav'>

        <Navbar className='navig' bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home" >
            <i className='bi bi-house' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
        </Navbar.Brand>
        </Container>

        </Navbar>
        <div className="res">
        {cardInfo.map(renderCard)}
        </div>
     </div>    
  ) 
}

export default Resources;
