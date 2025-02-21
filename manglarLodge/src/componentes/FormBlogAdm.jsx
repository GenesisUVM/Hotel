import { useState } from 'react';
import './Forms.css';
import { useForm } from 'react-hook-form';
import { articuloRequest } from '../api/blogAuth.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormBlogAdm() {
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
                [name]: Array.from(files) // Convierte los archivos a un array
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        console.log('Valores enviados:', values);

        const data = new FormData(); // Crea una nueva instancia de FormData
        data.append('titulo', formData.titulo); 
        data.append('direccion', formData.direccion); 
        data.append('descripcion', formData.descripcion); 

        // Manejo de imágenes
        if (formData.imgs) { // Verifica que imgs no sea null
            for (let img of formData.imgs) {
                data.append('imgs', img); // Usa la instancia de FormData (data)
            }
        }

        try {
            const res = await articuloRequest(data); 
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
                <Form.Group controlId="formTitulo">
                    <Form.Label>Ingrese el titulo</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="titulo" 
                        {...register('titulo', { required: true })} 
                        onChange={handleChange} 
                        value={formData.titulo} 
                    />
                    {errors.titulo && <span className="text-danger">Este campo es requerido</span>}
                </Form.Group>
                <Form.Group controlId="formDireccion">
                    <Form.Label>Ingrese la dirección</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="direccion" 
                        {...register('direccion', { required: true })} 
                        onChange={handleChange} 
                        value={formData.direccion} 
                    />
                    {errors.direccion && <span className="text-danger">Este campo es requerido</span>}
                </Form.Group>
                <Form.Group controlId="formDescripcion">
                    <Form.Label>Ingrese la descripción</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="descripcion" 
                        {...register('descripcion', { required: true })} 
                        onChange={handleChange} 
                        value={formData.descripcion} 
                    />
                    {errors.descripcion && <span className="text-danger">Este campo es requerido</span>}
                </Form.Group>
                <Form.Control 
                    type="file" 
                    name="imgs" 
                    accept="image/*" 
                    multiple 
                    onChange={handleChange} 
                />
                {errors.imgs && <span className="text-danger">Las imágenes son requeridas</span>}

                <br />
                <Button type='submit' className="botonIngresar">Publicar</Button>
            </Form>
            <p>{message}</p>
        </div>
    );
}

export default FormBlogAdm;