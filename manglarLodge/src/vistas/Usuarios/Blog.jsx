import { useEffect, useState } from 'react';
import axios from 'axios';
import CardBlog from '../../componentes/CardBlog';
import NavUsuarios from '../../componentes/NavUsuarios';
import './Usuarios.css'

/*Componente vista del blog del lado de los usuarios  */
function Blog(){
    const [articulo, setArticulo] = useState([]);
    const [error, setError] = useState(null);
  
  


    useEffect(() => {
        const fetchArticulos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/datosBlog');
                console.log(response.data);
                setArticulo(response.data);
            } catch (err) {
                console.error('Error obteniendo el articulo', err);
                setError('Hubo un problema al cargar los datos. Intenta nuevamente más tarde.');
            }
        };
        
        fetchArticulos();
        
    }, []);

    return(
        <>
        <NavUsuarios />
        {error && <p className="error">{error}</p>}
            <div className='cardshabitaciones'>
                {articulo.length > 0 ? (
                    articulo.map(item => (
                        <CardBlog 
                            key={item._id}
                            titulo={item.titulo}
                            direccion={item.direccion}
                            descripcion={item.descripcion} 
                            imgs={item.imgs} 
                            />
                    ))
                ) : (
                    <p>No hay artículos disponibles en este momento.</p>
                )}
            </div>
        </>
    )
};

export default Blog;