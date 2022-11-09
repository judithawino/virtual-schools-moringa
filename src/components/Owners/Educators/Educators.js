import Card from 'react-bootstrap/Card';
import "../../../components/Owners/Owner.css"
// src/components/Owners/Owner.css
function Educator() {
  return (
    <div className='owner row' style={{display:'flex',flexWrap:'noWrap'}}>
    <Card style={{width: '21rem', margin:'25px'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=70" />
      <Card.Body>
        <Card.Title>Educator</Card.Title>
        <Card.Link href="/view/educator" variant="primary">View</Card.Link>
        <Card.Link href="/create/educator" variant="primary">Create</Card.Link>
        {/* <Card.Link href="/update/educator" variant="primary" >Update</Card.Link>
        <Card.Link href="/delete/educator" variant="primary" >Delete</Card.Link> */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Educator;