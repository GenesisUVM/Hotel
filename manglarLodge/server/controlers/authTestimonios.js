import {Testimonio} from '../models/testimoniosModel.js'


export const testimonio = async (req, res) => {
  const { nombre, tipo_habitacion, testimonio} = req.body;
    
 try{

    const newTestimonio = new Testimonio({
        nombre, 
        tipo_habitacion,
        testimonio
        })
    
      const testimonioSaved = await newTestimonio.save();

      res.json({
        id: testimonioSaved._id,
        nombre: testimonioSaved.nombre,
        tipo_habitacion: testimonioSaved.tipo_habitacion,
        testimonio: testimonioSaved.testimonio
      });

   

 }catch(error){
    console.log(error);
 }

 
};

export const datosTestimonio = async (req, res) => {
    try {
       const testimonio = await Testimonio.find();
       res.json(testimonio);
    } catch (error) {
          res.status(500).send(error);
    }
};