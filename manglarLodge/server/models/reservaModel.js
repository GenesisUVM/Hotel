import mongoose from "mongoose";


const ReservaSchema = new mongoose.Schema({
    fecha_ingreso: {
        type: mongoose.Schema.Types.Date, required: true, trim: true,
    },fecha_salida: {
        type: mongoose.Schema.Types.Date, required: true, trim: true, unique: true
    },correo: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },nombre: {
        type: mongoose.Schema.Types.String, required: true, trim: true, unique: true
    },cedula: {
        type: mongoose.Schema.Types.Number, required: true,
    },metodo_pago:{
        type: mongoose.Schema.Types.String, required: true,
    },tipo_habitacion:{
        type: mongoose.Schema.Types.String, required: true,
    }
});

export  const Reserva = mongoose.model("Reserva", ReservaSchema);