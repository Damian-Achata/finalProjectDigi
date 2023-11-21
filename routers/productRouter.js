import { Router } from 'express';
const prodRouter = Router();
import {listarProductos,agregarProductos,actualizarProductos,eliminarProductos} from '../controllers/productController.js'
import { authToken } from '../middlewares/jwt.js';
import { isAdmin } from '../middlewares/admin.js';

// Ruta para listar todos los productos
prodRouter.get('/', listarProductos);
// En tu archivo de rutas
prodRouter.get('/insert', (req, res) => {
    // Lógica para renderizar la vista cargarProductos.hbs
    res.render('cargarProductos');
  });
// Ruta para mostrar el formulario de actualización de un producto por ID
prodRouter.get('/update/:id/edit',authToken,isAdmin, (req,res) => {
    res.render('actualizarProductos')
});
  
// Ruta para agregar un nuevo producto
prodRouter.post('/insert', authToken,isAdmin, agregarProductos);

// Ruta para actualizar un producto por ID
prodRouter.patch('/update/:id',authToken,isAdmin, actualizarProductos);

// Ruta para eliminar un producto por ID
prodRouter.delete('/delete/:id',authToken,isAdmin, eliminarProductos);

export default prodRouter;
