
//responde a la ruta user
import { Router } from 'express';
const router = Router(); 
import {userRegistro,userCreate} from '../controllers/userController.js'
import {check} from 'express-validator'


router.get('/', userRegistro);

router.post('/',
    [
        check('nombre').isLength({min: 4}),
        check('email').isEmail(),
        check('password').isLength({min: 8})
    ],    
userCreate)

export default router;