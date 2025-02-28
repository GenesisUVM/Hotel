import Card from 'react-bootstrap/Card';
import './Card.css'

const capitalizeFirstLetter = (string) => {
  if (!string) return ''; // Manejar el caso de strings vacíos
  return string.charAt(0).toUpperCase() + string.slice(1);
};



// eslint-disable-next-line react/prop-types
function CardHabitacion({numero_personas, precio, descripcion, servicios}) {
  return (
    <Card className='cardTestimonio'>
      <Card.Body>
        <Card.Title>{`${capitalizeFirstLetter(numero_personas)} personas por habitacion`}</Card.Title>
        <Card.Text>{`${precio} $$`}</Card.Text>
        <Card.Text>{`Descripcion de la habitacion: ${capitalizeFirstLetter(descripcion)}`}</Card.Text>
        <Card.Text>{`Servicios asociados a la habitacion: ${capitalizeFirstLetter(servicios)}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHabitacion;