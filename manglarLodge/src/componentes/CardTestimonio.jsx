import Card from 'react-bootstrap/Card';
import './Card.css'


// eslint-disable-next-line react/prop-types
function CardTestimonio({nombre, habitacion, testimonio}) {
  return (
    <Card className='cardTestimonio'>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{habitacion}</Card.Text>
        <Card.Text>{testimonio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardTestimonio;