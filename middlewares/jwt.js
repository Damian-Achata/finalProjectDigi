import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const secretKey = process.env.secretKey;

export const generarToken = (nombre,rol) => {

    //1. dato para incluir en el token
    //2. clave secreta para firmar el token
    //3. duración del token
    const token = jwt.sign(
        {
            nombre: nombre,
            role: rol
        },
        secretKey,
        {
            expiresIn: '1h'
        }
    );

    return token;

};

export const authToken = (req, res, next) => {

    //traemos el token del header
    const token = req.cookies.token;

    //verificamos si existe el token
    if (!token) {
        return res.status(401).json({
            mensaje: 'No hay token, permiso no válido'
        });
    }

    try {

        const match = jwt.verify(token, secretKey);

        console.log(match);

        req.user = match;

        console.log(req.user);

        next();

    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                mensaje: 'Token inválido'
            });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                mensaje: 'Token expirado'
            });
        } else {
            return res.status(401).json({
                mensaje: 'Error en la verificación del token'
            });
        }
    }
};