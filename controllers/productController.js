
import productos from '../models/productModel.js';


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
        const verProd = await productos.find();
        console.log(verProd);
        res.render('verProductos', { productos: verProd });
    } catch (error) {
        console.error('Error al listar productos:', error);
        res.redirect('404');
    }
};


// 3. Update (Actualizar / UPDATE)
export const actualizarProductos = async (req, res) => {
    const id = req.params.id;
    const { nombre, edad, email, password } = req.body;

    await productos.findByIdAndUpdate(id, {
        nombre,
        edad,
        email,
        password
    }, { new: true })
        .then((result) => {
            console.log(`Producto actualizado: ${result}`);
            res.send(`<h1>Producto Actualizado ${id}</h1>`);
        })
        .catch((err) => {
            console.error('Error al actualizar producto:', err);
            res.status(500).json({
                ok: false,
                message: 'Error al actualizar producto',
                error: err.message,
            });
        });
};

// 4. Delete (Eliminar / DELETE)
export const eliminarProductos = async (req, res) => {
    const productoId = req.params.id;
    
    await productos.findByIdAndDelete(productoId)
        .then((result) => {
            console.log(`Hemos eliminado el producto: ${result}`);
            res.send(`<h1>Producto Eliminado ${productoId}</h1>`);
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

