import {Router} from "express"
import {registro, login, logout} from '../controlers/authControlers.js'
import {reserva, datosReserva} from '../controlers/authReservas.js'
import {testimonio, datosTestimonio} from '../controlers/authTestimonios.js'
import {blog, datosBlog} from '../controlers/authBlog.js'
import {habitacion, datosHabitacion} from '../controlers/authHabitaciones.js'
import { uploadMiddleware } from '../middwares/multerConf.js';


const router = Router()


router.post('/registro', registro)
router.post('/login' , login)
router.post('/logout' , logout)
router.post('/reserva' , reserva)
router.get('/datosReserva' , datosReserva)
router.post('/testimonio' , testimonio)
router.get('/datostestimonio' , datosTestimonio)
router.post('/blog', uploadMiddleware, blog);
router.get('/datosBlog' , datosBlog)
router.post('/habitacion' , habitacion)
router.get('/datosHabitacion' , datosHabitacion)


export default router