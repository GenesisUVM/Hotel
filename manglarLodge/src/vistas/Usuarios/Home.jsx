import NavUsuarios from '../../componentes/NavUsuarios';
import Card from 'react-bootstrap/Card';
import './Usuarios.css'
import img from '../../img/playa.jpg'
/*Componente vista de registro de usuarios */

function Home(){
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
            
        </div>
        </div>
    )
};

export default Home;