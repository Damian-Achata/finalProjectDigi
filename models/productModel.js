import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  imagen: { type: String },
  descripcion: { type: String }
});

export default mongoose.model('productos', productoSchema);


