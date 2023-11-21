
import productos from '../models/productModel.js';
import { isAdmin } from '../middlewares/admin.js';


// 1. Create (Crear / INSERT)
export const agregarProductos = async (req, res) => {
    console.log(req.body);
    const { title, price, stock, image, description } = req.body;
    console.log(`Recibimos los Productos y son: ${title} Stock: ${stock}`);

    const nuevoProducto = new productos({
        title: title,
        price: price,
        stock: stock,
        image: image,
        description: description
    });

    await nuevoProducto.save()
        .then((result) => {
            console.log('Producto insertado correctamente');
            res.redirect('/products/insert'); // Redirigir a la página de carga de productos
        })
        .catch((err) => {
            console.error('Error al insertar producto:', err);
            res.status(500).json({
                ok: false,
                message: 'Error al insertar producto',
                error: err.message,
            });
        });
};


// 2. Read (Leer / FIND)
export const listarProductos = async (req, res) => {
    console.log('Estoy funcionando');
    try {
        // Verifica si el usuario es administrador
        const admin = req.users && req.users.role === 'admin';
        const verProd = await productos.find();
        console.log(verProd);
        res.render('verProductos', { productos: verProd,isAdmin:admin });
    } catch (error) {
        console.error('Error al listar productos:', error);
        res.redirect('404');
    }
};

// Update (Actualizar / UPDATE)
export const actualizarProductos = async (req, res) => {
    const id = req.params.id;
    const { title, price, stock, image, description } = req.body;

    try {
        const productoActualizado = await productos.findByIdAndUpdate(id, {
            title,
            price,
            stock,
            image,
            description
        }, { new: true });

        if (!productoActualizado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.redirect('/products/'); // Redireccionar a la lista de productos
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({
            ok: false,
            message: 'Error al actualizar producto',
            error: error.message,
        });
    }
};



// 4. Delete (Eliminar / DELETE)
export const eliminarProductos = async (req, res) => {
    const productoId = req.params.id;
    
    await productos.findByIdAndDelete(productoId)
        .then((result) => {
            console.log(`Hemos eliminado el producto: ${result}`);
            res.redirect('/products/');
        })
        .catch((err) => {
            console.error('Error al eliminar producto:', err);
            res.status(500).json({
                ok: false,
                message: 'Error al eliminar producto',
                error: err.message,
            });
        });
};

