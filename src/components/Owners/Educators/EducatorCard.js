import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Educator.css';
import { Link } from 'react-router-dom';
const EducatorCard = () => {
  return (
    <div div className='edu-card'>
    <Card style={{ width: '17rem', margin:'10px' }}>
      <Card.Img className='card-img' variant="top" src="https://thumbs.dreamstime.com/b/classroom-icon-vector-sign-symbol-isolated-white-backgrou-classroom-icon-vector-isolated-white-background-your-web-133827150.jpg" />
      <Card.Body>
        <Card.Title>Lessons</Card.Title>
        <Link to ="/lesson"variant="primary" >Go to Lessons</Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem',margin:'10px' }}>
      <Card.Img className='card-img' variant="top" src="https://cdn4.iconfinder.com/data/icons/books-32/240/book-10-512.png" />
      <Card.Body>
        <Card.Title>Resources</Card.Title>
        <Button variant="primary">Go to Resources</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem', margin:'10px' }}>
      <Card.Img className='card-img' variant="top" src="https://media.istockphoto.com/vectors/attendance-presence-vector-id1327585822?k=20&m=1327585822&s=612x612&w=0&h=VmLMJwZwM2YMm0eqRpYX77IkAmA6xjeXuimcTnjirx8=" />
      <Card.Body>
        <Card.Title>Attendance</Card.Title>
        <Button variant="primary">Go to Attendance</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem', margin:'10px' }}>
      <Card.Img className='card-img' variant="top" src="https://cdn-icons-png.flaticon.com/512/1935/1935433.png" />
      <Card.Body>
        <Card.Title>Tasks</Card.Title>
        <Button variant="primary">Go to Tasks</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
export default EducatorCard;