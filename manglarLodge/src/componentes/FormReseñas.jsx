import {useState} from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {testimonioRequest} from '../api/testimoniosAuth.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormTestimonio(){

    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const [formData, setFormData] = useState({
        nombre: '', 
        tipo_habitacion: '',
        testimonio: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    /*Logica para enviar los datos del formulario a la base de datos */
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async(values, event) => {
        console.log(values);
        const res = await testimonioRequest(values)
        console.log(res)

        event.preventDefault();

        setFormData({
            nombre: '', 
            tipo_habitacion: '',
            testimonio: ''
        });

        // Muestra el mensaje de éxito
        setMessage('Reservado con éxito!');
        
        //  Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            setMessage('');
        }, 3000);
    })

    

    return(
        <div className='contForm'>
        <Form onSubmit={onSubmit} className='formReserva'>
                <Form.Group controlId="formNombre">
                    <Form.Label>Ingrese Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="nombre" 
                        {...register('nombre', { required: true })} 
                        onChange={handleChange} 
                        value={formData.nombre} 
                    />
                    {errors.nombre && <span className="text-danger">{errors.nombre.message}</span>}
                </Form.Group>
               
               
                <Form.Group controlId="formTipoHabitacion">
                    <Form.Label>Tipo de Habitacion</Form.Label>
                    <Form.Select aria-label="Default select example" 
                            {...register('tipo_habitacion', { required: true })} 
                            onChange={handleChange} 
                            value={formData.tipo_habitacion} 
                            >
                        <option>Seleccione tipo de habitacion</option>
                        <option value="individual">Individual</option>
                        <option value="matrimonial">Matrimonial</option>
                        <option value="doble">Doble</option>
                        <option value="triple">Triple</option>
                        <option value="familiar4">Familiar 4 personas</option>
                        <option value="familiar5">Familiar 5 personas</option>
                        <option value="familiar6">Familiar 6 personas</option>
                        <option value="familiar8">Familiar 8 personas</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formTestimonio">
                    <Form.Label>Ingrese su experiencia en la Habitacion seleccionada</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="testimonio" 
                        {...register('testimonio', { required: true })} 
                        onChange={handleChange} 
                        value={formData.testimonio} 
                    />
                    {errors.testimonio && <span className="text-danger">{errors.testimonio.message}</span>}
                </Form.Group>

                <br />
                <Button type='submit' className="botonIngresar">Publicar</Button>
            
            
        </Form>
        <p>{message}</p>
        </div>
    )
};

export default FormTestimonio;