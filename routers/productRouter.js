import { Router } from 'express';
const prodRouter = Router();
import {listarProductos,agregarProductos,actualizarProductos,eliminarProductos} from '../controllers/productController.js'

// Ruta para listar todos los productos
prodRouter.get('/', listarProductos);
// En tu archivo de rutas
prodRouter.get('/insert', (req, res) => {
    // Lógica para renderizar la vista cargarProductos.hbs
    res.render('cargarProductos');
  });
  


// Ruta para agregar un nuevo producto
prodRouter.post('/insert', agregarProductos);

// Ruta para actualizar un producto por ID
prodRouter.put('/update/:id', actualizarProductos);

// Ruta para eliminar un producto por ID
prodRouter.delete('/delete/:id', eliminarProductos);

export default prodRouter;
