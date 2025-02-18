import mongoose from "mongoose";


const testimonioSchema = new mongoose.Schema({
    nombre: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },testimonio: {
        type: mongoose.Schema.Types.String, required: true, trim: true, 
    },tipo_habitacion: {
        type: mongoose.Schema.Types.String, required: true, trim: true, 
    }
});

export  const Testimonio = mongoose.model("Testimonio", testimonioSchema);