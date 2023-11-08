import { connect, Schema, model } from 'mongoose';
import { config } from 'dotenv';
config();
const mongoUrlLocal = process.env.mongoUrlLocal;

connect(mongoUrlLocal)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log('error db:', e));

const productoSchema = new Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  imagen: String,
  descripcion: String
});

const  producto = model('producto', productoSchema);
export default producto;