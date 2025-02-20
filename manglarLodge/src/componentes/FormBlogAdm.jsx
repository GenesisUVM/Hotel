import {useState} from 'react';
import './Forms.css'
import {useForm} from 'react-hook-form'
import {articuloRequest} from '../api/blogAuth.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormBlogAdm(){

    /*Logica para limpiar el formulario y mostrar un mensjae de exito si se registra correctamente */
    const [formData, setFormData] = useState({
        titulo: '', 
        direccion: '',
        descripcion: '',
        imgs: null
    });
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'imgs') {
            setFormData({
                ...formData,
                [name]: Array.from(files) 
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    /*Logica para enviar los datos del formulario a la base de datos */
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async(values, event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        
        const data = new FormData();
        data.append('titulo', values.titulo);
        data.append('direccion', values.direccion);
        data.append('descripcion', values.descripcion);
        formData.imgs.forEach((img) => {
            data.append('imgs', img); // Usa el mismo nombre para que el servidor lo reconozca como un array
        });

        const res = await articuloRequest(data); 
        console.log(res);

        setFormData({
            titulo: '', 
            direccion: '',
            descripcion: '',
            imgs:''
        });

        // Muestra el mensaje de éxito
        setMessage('Publicado con éxito!');
        
        //  Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            setMessage('');
        }, 3000);
    })

    

    return(
        <div className='contForm'>
        <Form onSubmit={onSubmit} className='formBlog'>
                <Form.Group controlId="formTitulo">
                    <Form.Label>Ingrese el titulo</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="titulo" 
                        {...register('titulo', { required: true })} 
                        onChange={handleChange} 
                        value={formData.titulo} 
                    />
                    {errors.titulo && <span className="text-danger">{errors.titulo.message}</span>}
                </Form.Group>
                <Form.Group controlId="formDireccion">
                    <Form.Label>Ingrese el direccion</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="direccion" 
                        {...register('direccion', { required: true })} 
                        onChange={handleChange} 
                        value={formData.direccion} 
                    />
                    {errors.direccion && <span className="text-danger">{errors.direccion.message}</span>}
                </Form.Group>
                <Form.Group controlId="formDescripcio">
                    <Form.Label>Ingrese el descripcion</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="descripcion" 
                        {...register('descripcion', { required: true })} 
                        onChange={handleChange} 
                        value={formData.descripcion} 
                    />
                    {errors.descripcion && <span className="text-danger">{errors.descripcion.message}</span>}
                </Form.Group>
                <Form.Group controlId="formImagen">
                    <Form.Label>Subir imagen</Form.Label>
                    <Form.Control 
                        type="file" 
                        name="imgs" 
                        accept="image/*" 
                        multiple 
                        onChange={handleChange} 
                    />
                </Form.Group>

                <br />
                <Button type='submit' className="botonIngresar">Publicar</Button>
            
            
        </Form>
        <p>{message}</p>
        </div>
    )
};

export default FormBlogAdm;