import { useEffect, useState } from 'react';
import axios from 'axios';
import NavUsuarios from '../../componentes/NavUsuarios';
import Card from 'react-bootstrap/Card';
import './Usuarios.css'
import img from '../../img/playa.jpg'
import CardHabitacion from '../../componentes/CardHabitaciones';
/*Componente vista de registro de usuarios */

function Home(){
    const [habitacion, setHabitacion] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHabitaciones = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosHabitacion');
                console.log(response.data);
                setHabitacion(response.data);
            } catch (err) {
                console.error('Error obteniendo la habitacion', err);
                setError('Hubo un problema al cargar los datos. Intenta nuevamente más tarde.');
            }
        };
        
        fetchHabitaciones();
        
    }, []);
    return(
        <div className='vistaHome'>
        <NavUsuarios />
        <div className='contenedor'>
            <Card className="bg-dark text-white cards">
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay className='textImgs'>
                <Card.Text className='text'>
                Nuestro Hotel se encuentra en el hermoso pueblo de Chichiriviche, estado Falcón, donde el clima es ideal pata pasar unas vacaciones
                        en familia, con paisajes que explorar con olos paquetes que te facilitamos en nuestra pagina.
                    
                </Card.Text>
                <Card.Text className='text'> El hotel tiene 50 años de historia, en el casco central de la ciudad, donde podras visitar en cuestion de minutos lugares increibles como las cuevas y los cayos que rodean la costa.
                </Card.Text>
                <div className='contSecond'>
                <p>
                    Contamos con Habitaciones en las cuales podemos ofrecerte habitaciones individuales, matrimoniales, dobles, triples, familiares desde 4 hasta 8 personas, tambien pasar un grato fin de semana en pareja. 
                </p> 
            </div>
            </Card.ImgOverlay>
            </Card>
            {error && <p className="error">{error}</p>}
            <div className='cardshabitaciones'>
                <h2 className='tituloCategorias'>Habitaciones</h2>
                {habitacion.length > 0 ? (
                    habitacion.map((item) => (
                        <CardHabitacion
                            key={item._id}
                            numero_personas={item.numero_personas}
                            precio={item.precio}
                            descripcion={item.descripcion }
                            servicios={item.servicios}
                        />
                    ))
                ) : (
                    <p>No hay habitaciones registradas.</p>
                )}
            </div>
        </div>
        </div>
    )
};

export default Home;