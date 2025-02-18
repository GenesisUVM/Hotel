import {useState} from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormUsuario(){
    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const [formData, setFormData] = useState({
        correo: '',
        contrasena:''
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
    const { register, handleSubmit, formState: {errors}, } = useForm();

    const onSubmit = handleSubmit(async(values) => {
        console.log(values);
        
        event.preventDefault();

        setFormData({
            correo: '',
            contrasena:''
        });

        // Muestra el mensaje de éxito
        setMessage('Registrado con éxito!');
        
        //  Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            setMessage('');
        }, 3000);
        
    })
    return(
        <div className='contForm'>
        <Form onSubmit={onSubmit} className='formRegistro'>
            <Form.Group controlId="formCorreo">
                    <Form.Label>Ingrese Correo</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="correo" 
                        {...register('correo', { required: true })} 
                        onChange={handleChange} 
                        value={formData.correo} 
                    />
                    {errors.correo && <span className="text-danger">{errors.correo.message}</span>}
                </Form.Group>

                <Form.Group controlId="formContrasena">
                    <Form.Label>Ingrese Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="contrasena" 
                        {...register('contrasena', { required: true })} 
                        onChange={handleChange} 
                        value={formData.contrasena} 
                    />
                    {errors.contrasena && <span className="text-danger">{errors.contrasena.message}</span>}
                </Form.Group>
            <br />
            <Button type='submit' className="botonIngresar">Ingresar</Button>
            
    
        </Form>
        <p>{message}</p>
       
          
        </div>
    )
};

export default FormUsuario