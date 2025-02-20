import {Blog} from '../models/BlogModel.js'


export const blog = async (req, res) => {
  const { titulo, direccion, descripcion, imgs} = req.body;
    
 try{

    const newBlog = new Blog({
        titulo, 
        direccion,
        descripcion,
        imgs
        })
    
      const blogSaved = await newBlog.save();

      res.json({
        id: blogSaved._id,
        titulo: blogSaved.titulo,
        direccion: blogSaved.direccion,
        descripcion: blogSaved.descripcion
      });

   

 }catch(error){
    console.log(error);
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