import {Blog} from '../models/BlogModel.js'


export const blog = async (req, res) => {
  const { titulo, direccion, descripcion } = req.body;
  const imgs = req.files ? req.files.map(file => file.path) : []; 

  if (!imgs.length) {
   return res.status(400).json({ error: 'No se han subido imágenes' });
}

 try{

    const newBlog = new Blog({
         titulo, 
        direccion,
        descripcion,
        imgs
        })
    
      const blogSaved = await newBlog.save();
      res.status(201).json({ message: 'Artículo creado con éxito', blog });
      res.json({
        id: blogSaved._id,
        titulo: blogSaved.titulo,
        direccion: blogSaved.direccion,
        descripcion: blogSaved.descripcion,
        imgs: blogSaved.imgs
      });

   

 }catch(error){
    console.log(error);
    res.status(400).json({ error: error.message });
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