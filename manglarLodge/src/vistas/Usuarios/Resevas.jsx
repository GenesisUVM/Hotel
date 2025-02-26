import FormReservas from '../../componentes/FormReservas';
import NavUsuarios from '../../componentes/NavUsuarios';
import './Usuarios.css'

/*Componente vista de Reservas para los usuarios */
function Reservas(){
    return(
        <div className='vistaReservas'>
            <NavUsuarios />
            <h3 className='titulo'>Formulario de reservacion</h3>
            <FormReservas />
        </div>
    )
};

export default Reservas;