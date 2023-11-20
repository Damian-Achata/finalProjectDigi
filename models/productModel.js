import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String },
  description: { type: String }
});

export default mongoose.model('productos', productoSchema);


