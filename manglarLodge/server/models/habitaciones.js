import mongoose from "mongoose";


const HabitacionesSchema = new mongoose.Schema({
    numero_personas: {
        type: mongoose.Schema.Types.String, required: true, trim: true, 
    },precio: {
        type: mongoose.Schema.Types.Number, required: true, trim: true, 
    },descripcion: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },servicios: {
        type: mongoose.Schema.Types.String, required: true, trim: true, 
    }
});

export  const Habitaciones = mongoose.model("Habitaciones", HabitacionesSchema);