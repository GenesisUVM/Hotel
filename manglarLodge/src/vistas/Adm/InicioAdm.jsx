import FormUsuario from '../../componentes/FormUauario';
import NavBar from '../../componentes/NavUsuarios';
import { Link} from 'react-router-dom';
import './Adm.css'

/*Componente Vista de inicio de sesion del administrador*/

function InicioAdm(){
    return(
        <div className='vistaInicioAdm'>
        <NavBar />
        <FormUsuario />
        <Link to={'/'} className="linkContraseña">Crear Usuario Nuevo</Link>
        </div>
    )
};

export default InicioAdm;