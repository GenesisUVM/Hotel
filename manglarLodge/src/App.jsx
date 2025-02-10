import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './vistas/Usuarios/LandingPage'
import Reservas from './vistas/Usuarios/Resevas'
import Reseñas from './vistas/Usuarios/Reseñas'
import Blog from './vistas/Usuarios/Blog'
import Habitaciones from './vistas/Adm/Habitaciones'
import BlogForm from './vistas/Adm/BlogForm'
import InicioAdm from './vistas/Adm/InicioAdm'
import InicioUsuario from './vistas/Usuarios/inicioUsuario'
import Registro from './vistas/Usuarios/Registro'

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Registro />} />
      <Route path='/loginAdm' element={<InicioAdm />} />
      <Route path='/loginUsuario' element={<InicioUsuario />} />
      <Route path='/landingPage' element={<LandingPage />} />
      <Route path='/reservas' element={<Reservas />} />
      <Route path='/reseñas' element={<Reseñas />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/habitaciones' element={<Habitaciones />} />
      <Route path='/blogForm' element={<BlogForm />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
