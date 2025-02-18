import FormUsuario from '../../componentes/FormUauario';
import NavUsuarios from '../../componentes/NavUsuarios';
import { Link} from 'react-router-dom';
import './Usuarios.css'

/*Componente vista de inicio de sesion para los usuarios */

function InicioUsuario(){
    return(
        <div className='vistaInicioUsuario'>
        <NavUsuarios />
        <FormUsuario />
        <Link to={'/'} className="linkContraseña">Crear Usuario Nuevo</Link>
        <Link to={'/adm/loginAdm'} className="linkContraseña">Inicia sesion como Administrador</Link>
        </div>
    )
};

export default InicioUsuario;