import Card from 'react-bootstrap/Card';
import "../../../components/Owners/Owner.css"
function School() {
  return (
    <div className='owner'>
    <Card style={{ width: '21rem', margin:'25px',display:'flex'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" />
      <Card.Body>
        <Card.Title>School</Card.Title>
        <Card.Link  href="/view/school">View</Card.Link>
        <Card.Link  href="/create/school">Create</Card.Link>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default School;
