import {Router} from "express"
import {registrar, login} from '../controlers/authControlers.js'


const router = Router()

router.post('/registro', registrar)
router.post('/login' , login)


export default router