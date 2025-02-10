import {Usuario} from '../models/usuarioModel.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'


export const registro = async (req, res) => {
  const { nombre, correo, contrasena, rol} = req.body;
    
 try{
      const contrasenaHash = await bcrypt.hash(contrasena, 10)

    const newUser = new Usuario({
        nombre,
        correo,
        contrasena: contrasenaHash,
        rol
        })
    
      const usuarioSaved = await newUser.save();

      const token = await createAccessToken({id: usuarioSaved._id});
      res.cookie('token', token)
      res.json({
        id: usuarioSaved._id,
        correo: usuarioSaved.correo,
        rol: usuarioSaved.rol
      });

   

 }catch(error){
    console.log(error);
 }

 
};


export const login = async (req, res) => {
   const { correo, contrasena} = req.body;
     
  try{

      const userFound = await Usuario.findOne({correo})
      if (!userFound) return res.status(400).json({message:'Usuario no encontrado'});

      const contrasenaMatch = await bcrypt.compare(contrasena, userFound.contrasena)
      if(!contrasenaMatch) return res.status(400).json({message:'Contraseña Incorrecta'})
  
      const token = await createAccessToken({id: userFound._id});
      res.cookie('token', token)
      res.json({
        id: userFound._id,
        correo: userFound.correo,
        rol: userFound.rol
      });
 
 
  }catch(error){
     console.log(error);
  }
 
  
 };


 export const logout = async (req, res) =>{
   res.cookie('token', '',{
      expires: new Date(0)
   })
   return res.sendStatus(200)
 }