import {app} from './app.js'
const PORT = process.env.PORT || 3000;
import dotenv from 'dotenv';
dotenv.config();

//DataBase
import conexion from './database/conexion.js'




//Server
const server = app.listen(PORT, (err) => {
    console.log(`Server running on port http://localhost:${PORT}`);
})

server.on('error', (err) => {
    console.log(`Server error: ${err}`);
})