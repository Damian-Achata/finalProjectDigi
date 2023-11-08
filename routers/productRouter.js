import express from 'express';
const prodRouter = express.Router();
import {listarProductos,agregarProductos,actualizarProductos,eliminarProductos} from '../controllers/productController.js';

// Ruta para listar todos los productos
prodRouter.get('/', listarProductos);

// Ruta para agregar un nuevo producto
prodRouter.post('/', agregarProductos);

// Ruta para actualizar un producto por ID
prodRouter.put('/:id', actualizarProductos);

// Ruta para eliminar un producto por ID
prodRouter.delete('/:id', eliminarProductos);

export default prodRouter;
