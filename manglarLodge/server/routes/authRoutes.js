import {Router} from "express"
import multer from 'multer'; // Importa multer
import {registro, login, logout} from '../controlers/authControlers.js'
import {reserva, datosReserva} from '../controlers/authReservas.js'
import {testimonio, datosTestimonio} from '../controlers/authTestimonios.js'
import {blog, datosBlog} from '../controlers/authBlog.js'


const router = Router()

const upload = multer({ dest: 'uploads/' });

router.post('/registro', registro)
router.post('/login' , login)
router.post('/logout' , logout)
router.post('/reserva' , reserva)
router.get('/datosReserva' , datosReserva)
router.post('/testimonio' , testimonio)
router.get('/datostestimonio' , datosTestimonio)
router.post('/blog', upload.array('imgs', 10), blog);
router.get('/datosBlog' , datosBlog)


export default router