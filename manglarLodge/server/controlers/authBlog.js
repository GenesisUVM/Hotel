import {Blog} from '../models/BlogModel.js'


export const blog = async (req, res) => {
  try {
    const { titulo, direccion, descripcion } = req.body;

    // Verifica que los archivos se hayan subido correctamente
    const imgs = req.files.imgs ? req.files.imgs.map(file => file.path) : [];
    const pdf = req.files.pdf ? req.files.pdf[0].path : null;

    // Asegúrate de que al menos una imagen y un PDF estén presentes
    if (!imgs.length) {
        return res.status(400).json({ error: 'No se han subido imágenes' });
    }

    if (!pdf) {
        return res.status(400).json({ error: 'No se ha subido un archivo PDF' });
    }

    // Crea un nuevo documento en la base de datos
    const newBlog = new Blog({
        titulo,
        direccion,
        descripcion,
        imgs,
        pdf,
    });

    // Guarda el documento en la base de datos
    const blogSaved = await newBlog.save();

    // Responde con el artículo creado
    res.status(201).json({
        message: 'Artículo creado con éxito',
        blog: {
            id: blogSaved._id,
            titulo: blogSaved.titulo,
            direccion: blogSaved.direccion,
            descripcion: blogSaved.descripcion,
            imgs: blogSaved.imgs,
            pdf: blogSaved.pdf,
        },
    });
} catch (error) {
    console.error('Error en el controlador:', error);
    res.status(500).json({ error: 'Error al guardar el artículo' });
}
 
};

export const datosBlog = async (req, res) => {
    try {
       const blog = await Blog.find();
       res.json(blog);
    } catch (error) {
          res.status(500).send(error);
    }
};