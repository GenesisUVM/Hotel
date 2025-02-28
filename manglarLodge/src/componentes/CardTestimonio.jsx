import Card from 'react-bootstrap/Card';
import './Card.css'

const capitalizeFirstLetter = (string) => {
  if (!string) return ''; // Manejar el caso de strings vacíos
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// eslint-disable-next-line react/prop-types
function CardTestimonio({nombre, habitacion, testimonio}) {
  
  return (
    <Card className='cardTestimonio'>
      <Card.Header>
        <Card.Title>{`Cliente: ${capitalizeFirstLetter(nombre)}`}</Card.Title>
        <Card.Text> {`Tipo habitacion: ${capitalizeFirstLetter(habitacion)}`}</Card.Text>
        </Card.Header>
      <Card.Body>
      
        <Card.Text> {`Testimonio: ${capitalizeFirstLetter(testimonio)}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardTestimonio;