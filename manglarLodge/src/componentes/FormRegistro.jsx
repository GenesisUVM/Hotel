import {useState} from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {registerRequest} from '../api/auth'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormRegistro(){

    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        contrasena:'',
        rol:''
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
        const res = await registerRequest(values)
        console.log(res)

        event.preventDefault();

        setFormData({
            nombre: '',
            correo: '',
            contrasena:'',
            rol:''
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

                <Form.Group controlId="formRol">
                    <Form.Label>Ingrese Rol</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="rol" 
                        {...register('rol', { required: true })} 
                        onChange={handleChange} 
                        value={formData.rol} 
                    />
                    {errors.rol && <span className="text-danger">{errors.rol.message}</span>}
                </Form.Group>
                <br />
                <Button type='submit' className="botonIngresar">Registrar</Button>
            
            
        </Form>
        <p>{message}</p>
        </div>
    )
};

export default FormRegistro;