import Card from 'react-bootstrap/Card';
import './Card.css'


// eslint-disable-next-line react/prop-types
function CardHabitacion({numero_personas, precio, descripcion, servicios}) {
    
  return (
    <Card className='cardTestimonio'>
      <Card.Body>
        <Card.Title>{numero_personas}</Card.Title>
        <Card.Text>{precio}</Card.Text>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>{servicios}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHabitacion;