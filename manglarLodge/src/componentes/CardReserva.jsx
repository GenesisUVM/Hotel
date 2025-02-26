import Card from 'react-bootstrap/Card';
import './Card.css'


// eslint-disable-next-line react/prop-types
function CardReserva({nombre, habitacion, testimonio, fecha_ingreso, correo}) {
  return (
    <Card className='cardTestimonio'>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{habitacion}</Card.Text>
        <Card.Text>{testimonio}</Card.Text>
        <Card.Text>{fecha_ingreso}</Card.Text>
        <Card.Text>{correo}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardReserva;