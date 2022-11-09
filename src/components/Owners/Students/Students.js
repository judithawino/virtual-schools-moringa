import Card from 'react-bootstrap/Card';
import './Owner.css'
function Student() {
  return (
    <div className='owner'>
    <Card style={{ width: '21rem', margin:'25px',display:'flex' }} >
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Card.Body>
        <Card.Title>Student</Card.Title>
        <div className='links'>
        <Card.Link href="/create/students" >Create</Card.Link>
        <Card.Link href="/update/students" >Update</Card.Link>
        <Card.Link href="/delete/students"  >Delete</Card.Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Student;