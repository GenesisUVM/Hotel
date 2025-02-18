import {Reserva} from '../models/reservaModel.js'


export const reserva = async (req, res) => {
  const { fecha_ingreso, fecha_salida, correo, nombre, cedula, metodo_pago, tipo_habitacion} = req.body;
    
 try{

    const newReserva = new Reserva({
        fecha_ingreso, 
        fecha_salida, 
        correo, 
        nombre, 
        cedula, 
        metodo_pago, 
        tipo_habitacion
        })
    
      const reservaSaved = await newReserva.save();

      res.json({
        id: reservaSaved._id,
        correo: reservaSaved.correo,
        nombre: reservaSaved.nombre,
        tipo_habitacion: reservaSaved.tipo_habitacion
      });

   

 }catch(error){
    console.log(error);
 }

 
};

export const datosReserva = async (req, res) => {
    try {
       const reserva = await Reserva.find();
       res.json(reserva);
    } catch (error) {
          res.status(500).send(error);
    }
};