import express, { Router } from 'express'
import * as userController from '../controllers/userAccountController'
const router = express.Router()

router.get('/',(req,res)=> {
    res.send('matheusviado')
})
router.post('/user-register', userController.userRegister)
export default router




