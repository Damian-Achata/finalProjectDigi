import express from 'express';
const prodRouter = express.Router();
import productController from '../controllers/productController.js'

// Ruta para listar todos los productos
prodRouter.get('/verProductos', productController.listarProductos);


// Ruta para agregar un nuevo producto
prodRouter.post('/insert', productController.agregarProductos);

// Ruta para actualizar un producto por ID
prodRouter.put('/update/:id', productController.actualizarProductos);

// Ruta para eliminar un producto por ID
prodRouter.delete('/delete/:id', productController.eliminarProductos);

export default prodRouter;
