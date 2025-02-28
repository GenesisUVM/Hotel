import { useState } from 'react';
import './Forms.css';
import { useForm } from 'react-hook-form';
import { habitacionesRequest } from '../api/habitacionAuth.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormHabitaciones() {
    const [formData, setFormData] = useState({
        numero_personas: '', 
        precio: '',
        descripcion: '',
        servicios: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        console.log('Valores enviados:', values);
    
        try {
            const res = await habitacionesRequest(formData); // Envía directamente el objeto formData
            console.log(res);
            setMessage('Publicado con éxito!');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error al publicar:', error);
            setMessage('Error al publicar. Inténtalo de nuevo.');
        }
    });
    return (
        <div className='contForm'>
            <Form onSubmit={onSubmit} className='formBlog'>
                <Form.Group controlId="formNumeroPersonas">
                    <Form.Label>Ingrese el numero de personas por habitacion</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="numero_personas" 
                        {...register('numero_personas', { required: true })} 
                        onChange={handleChange} 
                        value={formData.numero_personas} 
                    />
                    {errors.numero_personas && <span className="text-danger">Este campo es requerido</span>}
                </Form.Group>
                <Form.Group controlId="formNumeroPersonas">
                    <Form.Label>Ingrese el precio de la habitacion</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="precio" 
                        {...register('precio', { required: true })} 
                        onChange={handleChange} 
                        value={formData.precio} 
                    />
                    {errors.precio && <span className="text-danger">Este campo es requerido</span>}
                </Form.Group>
                <Form.Group controlId="formDescripcion">
                    <Form.Label>Ingrese la descripcion de la habitacion</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="descripcion" 
                        {...register('descripcion', { required: true })} 
                        onChange={handleChange} 
                        value={formData.descripcion} 
                    />
                    {errors.descripcion && <span className="text-danger">Este campo es requerido</span>}
                </Form.Group>
                <Form.Group controlId="formServicios">
                    <Form.Label>Ingrese los servicios asociados a la habitacion</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="servicios" 
                        {...register('servicios', { required: true })} 
                        onChange={handleChange} 
                        value={formData.servicios} 
                    />
                    {errors.servicios && <span className="text-danger">Este campo es requerido</span>}
                </Form.Group>
                <br />
                <Button type='submit' className="botonIngresar">Publicar</Button>
            </Form>
            <p>{message}</p>
        </div>
    );
}

export default FormHabitaciones;