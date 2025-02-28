import Card from 'react-bootstrap/Card';
import './Card.css'

const capitalizeFirstLetter = (string) => {
  if (!string) return ''; // Manejar el caso de strings vacíos
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// eslint-disable-next-line react/prop-types
function CardReserva({nombre, habitacion, metodo_pago, fecha_ingreso, correo}) {
  return (
    <Card className='cardTestimonio'>
      <Card.Body>
        <Card.Title>{`Nombre Cliente: ${capitalizeFirstLetter(nombre)}`}</Card.Title>
        <Card.Text> {`Tipo de habitacion: ${capitalizeFirstLetter(habitacion)}`}</Card.Text>
        <Card.Text> {`Metodo de pago: ${capitalizeFirstLetter(metodo_pago)}`}</Card.Text>
        <Card.Text> {`Fecha de ingreso: ${capitalizeFirstLetter(fecha_ingreso)}`}</Card.Text>
        <Card.Text> {`Correo del cliente: ${capitalizeFirstLetter(correo)}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardReserva;