
import bcrypt from 'bcrypt'
import { validationResult } from "express-validator";
import users from '../models/userModel.js';
import { generarToken,authToken } from '../middlewares/jwt.js';


export const userRegistro = (req, res) => {
    res.render('registro');
};

export const userLoginForm = (req, res) => {
    res.render('login');
}

export const userCreate = async (req, res) => {

    //Validacion de datos recibidos 
    const errores = validationResult(req)


    const { nombre, email, password } = req.body




    if (!errores.isEmpty()) {
        return res.render('404');
    };


    //2.Buscar si el email no se repite
    try {
        let usuario = await users.findOne({ email });

        if (usuario) {
            return res.render('404', { errorMessage: 'El usuario ya existe' });
        }

        //3.Encriptar password
        usuario = new users(req.body);
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        //4.Enviar a la database
        await usuario.save();


        return res.render('login')
    } catch (error) {
        return res.render('404', { errorMessage: 'Hubo un error al buscar el usuario' });
    }

}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    //Validacion de datos recibidos 
    const errores = validationResult(req)


    if (!errores.isEmpty()) {
        return res.render('404');
    };

    try {
        const usuario = await users.findOne({email: email});

        if (!usuario) {
            return res.render('registro', {data: 'El usuario no existe'})
        }

        const match =  bcrypt.compareSync(password,usuario.password);

        if (match) {
            //Generar Token
            const token = generarToken(usuario.nombre,usuario.role);
            res.cookie('token', token, { httpOnly: true });
            //Login
            const nombreUser = usuario.nombre;
            return res.render('indexUser',{nombre: nombreUser,userLoggedIn:true, token});
        }
        
    } catch (error) {
        return res.render('404',{errorMessage: 'Errores en la base de datos'});
    }

}
