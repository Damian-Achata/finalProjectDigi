import { app } from './app.js';
import dotenv from 'dotenv';
dotenv.config();

// Importa la conexión a la base de datos
import conexion from './database/conexion.js';

const PORT = process.env.PORT || 3000;

// Usa la conexión para arrancar el servidor solo si la conexión es exitosa
conexion.then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });

  server.on('error', (err) => {
    console.error(`Server error: ${err}`);
  });
}).catch(err => {
  console.error(`Error connecting to the database: ${err}`);
});
