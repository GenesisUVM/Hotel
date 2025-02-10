import {Router} from "express"
import {registro, login} from '../controlers/authControlers.js'


const router = Router()

router.post('/registro', registro)
router.post('/login' , login)


export default router