import {Usuario} from '../models/usuarioModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';


// Registro de usuario
export const registrar = async (req, res) => {
    const { nombre, correo, contraseña, confirmarContraseña, rol} = req.body;
  
    if (contraseña !== confirmarContraseña) {
      return res.status(400).json({ mensaje: 'Las contraseñas no coinciden' });
    }
  
    const usuarioExistente = await Usuario.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }
  
    const salt = await bcrypt.genSalt(10);
    const contraseñaEncriptada = await bcrypt.hash(contraseña, salt);
  
    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      contraseña: contraseñaEncriptada,
      rol,
    });
  
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  };
  
  // Login de usuario
  export const login = async (req, res) => {
    const { correo, contraseña } = req.body;
  
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({ mensaje: 'Usuario no encontrado' });
    }
  
    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
    }
  
    const token = jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  
    res.json({ token });
  };