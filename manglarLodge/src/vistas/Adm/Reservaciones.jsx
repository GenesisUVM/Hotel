import { useEffect, useState } from 'react';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NavAdm from '../../componentes/NavAdm';
import './Adm.css'
import FormReservas from '../../componentes/FormReservas';
import CardReserva from '../../componentes/CardReserva';

/*Componente vista de reseñas de los usuarios y formulario para dejar una reseña */

function Reservaciones(){
    const [testimonios, setTestimonio] = useState([]);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const habitaciones  = [
        'Individual',
        'Matrimonial',
        'Doble',
        'Triple',
        'Familiar4',
        'Familiar5',
        'Familiar6',
        'Familiar8'
    ];

    useEffect(() => {
        const fetchTestimonios = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosReserva');
                console.log(response.data);
                setTestimonio(response.data);
            } catch (err) {
                console.error('Error obteniendo la reserva', err);
                setError('Hubo un problema al cargar los datos. Intenta nuevamente más tarde.');
            }
        };
        
        fetchTestimonios();
        
    }, []);

   

    // Agrupar reservas por tipo de habitaciones
    const groupedTestimonios = habitaciones.reduce((acc, habitacion) => {
        acc[habitacion] = testimonios.filter(item => item.tipo_habitacion.toLowerCase() === habitacion.toLowerCase());
        return acc;
    }, {});

    //Opcion para que la fecha se muestre unicamnete el dia, mes y año
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options);
    };


    return(
        <div className='vistaTestimonio'>
        <NavAdm />
        

        {error && <p className="error">{error}</p>}
        <div className='cardshabitaciones'>
        {habitaciones.map(habitacion => (
                <div key={habitacion}>
                    <h2 className='tituloCategorias'>{habitacion.charAt(0).toUpperCase() + habitacion.slice(1)}</h2>
                    {groupedTestimonios[habitacion].length > 0 ? (
                        groupedTestimonios[habitacion].map(item => (
                            <CardReserva 
                                key={item._id}
                                nombre={item.nombre}
                                habitacion={item.tipo_habitacion}
                                fecha_ingreso={item.fecha_ingreso ? formatDate(item.fecha_ingreso) : 'Fecha no disponible'} 
                                correo={item.correo} 
                                />
                        ))
                    ) : (
                        <p>No hay competencias registradas en esta categoría.</p>
                    )}
                </div>
            ))}
            </div>

            <Button variant="primary" onClick={handleShow} >
                Reserva
            </Button>

            <Modal show={show} onHide={handleClose} className='modal' >
                <Modal.Header closeButton className='modalCuerpo'>
                <Modal.Title>Formulario de reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalCuerpo' >
                    <FormReservas />
                </Modal.Body>
                
            </Modal>

            
       
        </div>
    )
};

export default Reservaciones;