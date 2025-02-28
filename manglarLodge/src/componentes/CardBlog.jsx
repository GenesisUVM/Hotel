/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import './Card.css'

const capitalizeFirstLetter = (string) => {
  if (!string) return ''; // Manejar el caso de strings vacíos
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function CardBlog({ titulo, direccion, descripcion, imgs,pdf }) {
  return (

    <Card  className='cardBlog'>
      {/* Renderiza solo la primera imagen si está disponible */}
      {imgs && imgs.length > 0 ? (
        <Card.Img variant="top" src={imgs[0]} alt="Card image" /> // Solo la primera imagen
      ) : (
        <Card.Img variant="top" src="default-image.jpg" alt="Default image" /> // Imagen por defecto si no hay imágenes
      )}
      <Card.Body>
        <Card.Title>{`${capitalizeFirstLetter(titulo)}`}</Card.Title>
        <Card.Text> {`${capitalizeFirstLetter(direccion)}`}</Card.Text>
        </Card.Body>
        <Card.Body>
        <Card.Text> {`${capitalizeFirstLetter(descripcion)}`}</Card.Text>
        <Card.Link href={`http://localhost:4000/${pdf}`} target="_blank" rel="noopener noreferrer" download>Descargar PDF guia turistica</Card.Link>
      </Card.Body>
    </Card>
    
    
  );
}

export default CardBlog;