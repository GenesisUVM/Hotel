import {useState} from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {reservaRequest} from '../api/reservaAuth'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormReservas(){

    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const [formData, setFormData] = useState({
        fecha_ingreso: '', 
        fecha_salida: '', 
        correo: '', 
        nombre: '', 
        cedula: '', 
        metodo_pago : '', 
        tipo_habitacion: ''
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
        const res = await reservaRequest(values)
        console.log(res)

        event.preventDefault();

        setFormData({
            fecha_ingreso: '', 
            fecha_salida: '', 
            correo: '', 
            nombre: '', 
            cedula: '', 
            metodo_pago : '', 
            tipo_habitacion: ''
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
            <Form.Group controlId="formFechaIngreso">
                    <Form.Label>Ingrese fecha de ingreso</Form.Label>
                    <Form.Control 
                        type="date" 
                        name="fecha_ingreso" 
                        {...register('fecha_ingreso', { required: true })} 
                        onChange={handleChange} 
                        value={formData.fecha_ingreso} 
                    />
                    {errors.fecha_ingreso && <span className="text-danger">{errors.fecha_ingreso.message}</span>}
                </Form.Group>

                <Form.Group controlId="formFechaSalida">
                    <Form.Label>Ingrese Fecha Salida</Form.Label>
                    <Form.Control 
                        type="date" 
                        name="fecha_salida" 
                        {...register('fecha_salida', { required: true })} 
                        onChange={handleChange} 
                        value={formData.fecha_salida} 
                    />
                    {errors.fecha_salida && <span className="text-danger">{errors.fecha_salida.message}</span>}
                </Form.Group>

                <Form.Group controlId="formCorreo">
                    <Form.Label>Ingrese Correo </Form.Label>
                    <Form.Control 
                        type="email" 
                        name="correo" 
                        {...register('correo', { required: true })} 
                        onChange={handleChange} 
                        value={formData.correo} 
                    />
                    {errors.correo && <span className="text-danger">{errors.correo.message}</span>}
                </Form.Group>

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
                <Form.Group controlId="formCedula">
                    <Form.Label>Ingrese Cedula</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="cedula" 
                        {...register('cedula', { required: true })} 
                        onChange={handleChange} 
                        value={formData.cedula} 
                    />
                    {errors.cedula && <span className="text-danger">{errors.cedula.message}</span>}
                </Form.Group>
                <Form.Group controlId="formMetodoPago">
                <Form.Label>Metodo de pago</Form.Label>
                <Form.Select aria-label="Default select example" 
                        {...register('metodo_pago', { required: true })} 
                        onChange={handleChange} 
                        value={formData.metodo_pago} 
                        >
                    <option>Seleccione metodo de pago</option>
                    <option value="transferencia">Transferencia bancaria</option>
                    <option value="pagoMovil">Pago movil</option>
                    <option value="punto">Punto</option>
                    <option value="efectivo">Efectivo</option>
                    <option value="binance">Binance </option>
                    <option value="zinli">Zinli </option>
                </Form.Select>
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
                <br />
                <Button type='submit' className="botonIngresar">Reservar</Button>
            
            
        </Form>
        <p>{message}</p>
        </div>
    )
};

export default FormReservas;