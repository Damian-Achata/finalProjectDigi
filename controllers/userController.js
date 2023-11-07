
import bcrypt from 'bcrypt'
import { validationResult } from "express-validator";
import users from '../models/userModel.js';


export const userRegistro = (req, res) => {
    res.render('registro');
};

export const userCreate = async (req,res) => {

    //Validacion de datos recibidos 
    const errores = validationResult(req)

    const {nombre,email,password} = req.body


    if (!errores.isEmpty()) {
        return res.render('404');
    };


    //2.Buscar si el email no se repite
    try {
        let usuario = users.findOne({email});

        

    } catch (error) {
        return res.render('404');
    }

    

    res.render('indexUser', {
        nombre
    })
}
