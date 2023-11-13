import mongoose, {Schema} from "mongoose";


//Crear la estructura de la collection 'users'
const userSchema = new Schema({
    nombre: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['usuario', 'admin'], // Utiliza 'enum' para especificar valores permitidos
        default: 'usuario',
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

//exportar schema de la collection
export default mongoose.model('users',userSchema);
