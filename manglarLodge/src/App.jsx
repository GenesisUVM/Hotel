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
import Perfil from './vistas/Usuarios/Perfil'


function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Registro />} />
      <Route path='/adm/loginAdm' element={<InicioAdm />} />
      <Route path='/usuario/loginUsuario' element={<InicioUsuario />} />
      <Route path='/usuario/landingPage' element={<LandingPage />} />
      <Route path='/usuario/reservas' element={<Reservas />} />
      <Route path='/usuario/reseñas' element={<Reseñas />} />
      <Route path='/usuario/blog' element={<Blog />} />
      <Route path='/usuario/perfil' element={<Perfil />} />
      <Route path='/adm/habitaciones' element={<Habitaciones />} />
      <Route path='/adm/blogForm' element={<BlogForm />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
