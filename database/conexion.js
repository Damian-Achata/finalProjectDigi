import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoLocal =  process.env.mongoUrlLocal;
const mongoAtlas = process.env.mongoUrlAtlas

const conexion = mongoose.connect(mongoLocal).then (
    () => {
        console.log('Conectado a la database');
    },
    err => {
        console.log(`No hay conexion por ${err}`);
    }

)

export default conexion;


