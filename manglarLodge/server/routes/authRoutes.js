import {Router} from "express"
import {registro, login, logout} from '../controlers/authControlers.js'
import {reserva, datosReserva} from '../controlers/authReservas.js'
import {testimonio, datosTestimonio} from '../controlers/authTestimonios.js'


const router = Router()

router.post('/registro', registro)
router.post('/login' , login)
router.post('/logout' , logout)
router.post('/reserva' , reserva)
router.get('/datosReserva' , datosReserva)
router.post('/testimonio' , testimonio)
router.get('/datostestimonio' , datosTestimonio)


export default router