import FormRegistro from '../../componentes/FormRegistro';
import NavUsuarios from '../../componentes/NavUsuarios';
import { Link} from 'react-router-dom';
import './Usuarios.css'

/*Componente vista de registro de usuarios */

function Registro(){
    return(
        <div className='vistaRegistro'>
        <NavUsuarios />
        <FormRegistro />
        <Link to={'/usuario/loginUsuario'} className="linkContraseña">Inicia sesion</Link>
        <Link to={'/adm/loginAdm'} className="linkContraseña">Inicia sesion como Administrador</Link>
        </div>
    )
};

export default Registro;