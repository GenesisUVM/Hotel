import {Router} from "express"
import {registro, login, logout} from '../controlers/authControlers.js'
import {reserva, datosReserva} from '../controlers/authReservas.js'


const router = Router()

router.post('/registro', registro)
router.post('/login' , login)
router.post('/logout' , logout)
router.post('/reserva' , reserva)
router.get('/datosReserva' , datosReserva)


export default router