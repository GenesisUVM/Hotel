import FormHabitaciones from '../../componentes/FormHabitaciones';
import NavAdm from '../../componentes/NavAdm';
import './Adm.css'

/*Componete vista de habitaciones del rol administrador */
function Habitaciones(){
    return(
        <>
        <NavAdm />
        <FormHabitaciones />
        </>
    )
};

export default Habitaciones;