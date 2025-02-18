import FormTestimonio from '../../componentes/FormReseñas';
import NavUsuarios from '../../componentes/NavUsuarios';
import './Usuarios.css'

/*Componente vista de reseñas de los usuarios y formulario para dejar una reseña */

function Reseñas(){
    return(
        <div className='vistaTestimonio'>
        <NavUsuarios />
        <FormTestimonio />
        </div>
    )
};

export default Reseñas;