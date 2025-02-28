import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    titulo: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },direccion: {
        type: mongoose.Schema.Types.String, required: true, trim: true, 
    },descripcion: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },imgs: {
        type: mongoose.Schema.Types.Array, required: true, trim: true, 
    },pdf: {
        type: mongoose.Schema.Types.String,  trim: true, 
    }
});

export  const Blog = mongoose.model("Blog", BlogSchema);