import {Habitaciones} from '../models//habitaciones.js'


export const habitacion = async (req, res) => {
  const { numero_personas, precio, descripcion, servicios} = req.body;
    
 try{

    const newHabitacion = new Habitaciones({
        numero_personas, 
        precio, 
        descripcion, 
        servicios
        })
    
      const habitacionSaved = await newHabitacion.save();

      res.json({
        id: habitacionSaved._id,
        numero_personas: habitacionSaved.numero_personas,
        precio: habitacionSaved.precio,
        descripcion: habitacionSaved.descripcion,
        servicios: habitacionSaved.servicios
      });

   

 }catch(error){
   console.error('Error al guardar la habitación:', error);
   res.status(500).json({ error: 'Error al guardar la habitación' });
 }

 
};

export const datosHabitacion = async (req, res) => {
    try {
       const habitacion = await Habitaciones.find();
       res.json(habitacion);
    } catch (error) {
          res.status(500).send(error);
    }
};