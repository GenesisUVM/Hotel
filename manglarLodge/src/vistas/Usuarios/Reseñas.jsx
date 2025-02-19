import { useEffect, useState } from 'react';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormTestimonio from '../../componentes/FormReseñas';
import CardTestimonio from '../../componentes/CardTestimonio';
import NavUsuarios from '../../componentes/NavUsuarios';
import './Usuarios.css'

/*Componente vista de reseñas de los usuarios y formulario para dejar una reseña */

function Reseñas(){
    const [testimonios, setTestimonio] = useState([]);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const habitaciones  = [
        'individual',
        'matrimonial',
        'doble',
        'triple',
        'familiar4',
        'familiar5',
        'familiar6',
        'familiar8'
    ];

    useEffect(() => {
        const fetchTestimonios = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datostestimonio');
                console.log(response.data);
                setTestimonio(response.data);
            } catch (err) {
                console.error('Error obteniendo el testimonio', err);
                setError('Hubo un problema al cargar los datos. Intenta nuevamente más tarde.');
            }
        };
        
        fetchTestimonios();
        
    }, []);

   

    // Agrupar competencias por categoría
    const groupedTestimonios = habitaciones.reduce((acc, habitacion) => {
        acc[habitacion] = testimonios.filter(item => item.tipo_habitacion.toLowerCase() === habitacion.toLowerCase());
        return acc;
    }, {});


    return(
        <div className='vistaTestimonio'>
        <NavUsuarios />
        

        {error && <p className="error">{error}</p>}
        <div className='cardshabitaciones'>
        {habitaciones.map(habitacion => (
                <div key={habitacion}>
                    <h2 className='tituloCategorias'>{habitacion.charAt(0).toUpperCase() + habitacion.slice(1)}</h2>
                    {groupedTestimonios[habitacion].length > 0 ? (
                        groupedTestimonios[habitacion].map(item => (
                            <CardTestimonio 
                                key={item._id}
                                nombre={item.nombre}
                                habitacion={item.tipo_habitacion}
                                testimonio={item.testimonio} />
                        ))
                    ) : (
                        <p>No hay competencias registradas en esta categoría.</p>
                    )}
                </div>
            ))}
            </div>

            <Button variant="primary" onClick={handleShow} >
                Deja tu testimonio de nuestras habitaciones
            </Button>

            <Modal show={show} onHide={handleClose} className='modal' >
                <Modal.Header closeButton className='modalCuerpo'>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalCuerpo' >
                    <FormTestimonio />
                </Modal.Body>
                
            </Modal>

            
       
        </div>
    )
};

export default Reseñas;