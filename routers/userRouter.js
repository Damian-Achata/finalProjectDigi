
//responde a la ruta user
import { Router } from 'express';
const userRouter = Router(); 
import {userRegistro,userCreate,userLoginForm,userLogin} from '../controllers/userController.js'
import {check} from 'express-validator';
import { authToken } from '../middlewares/jwt.js';


userRouter.get('/', userRegistro);
userRouter.get('/login', userLoginForm);

userRouter.post('/',
    [
        check('nombre').isLength({min: 4}),
        check('email').isEmail(),
        check('password').isLength({min: 8})
    ],    
userCreate)

userRouter.post('/login',
    [
        check('email').isEmail(),
        check('password').isLength({min: 8})
    ], 
    userLogin,authToken)



export default userRouter;
