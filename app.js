import express from 'express';
import path from 'path';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import hbs from 'hbs';
import userRouter from './routers/userRouter.js'
import prodRouter from './routers/productRouter.js'
import cookieParser from 'cookie-parser';
import {isAdmin} from './middlewares/admin.js'
export const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { authToken } from './middlewares/jwt.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
// app.use(morgan('combined'));
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname,'public')));




//Configuracion de handlebars

//1.Set up del motor de plantillas.
app.set('view engine','hbs');

//2.Set up de la ruta de las plantillas.
app.set('views', path.join(__dirname, '/views'));

//3.Set up la ruta de los partials(codigo que se va a repetir (nav,footer,etc)). 
hbs.registerPartials(path.join(__dirname, '/views/partials'));

//Rutas
app.use('/user', userRouter)
app.use('/productos', prodRouter);

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/verProductos', (req,res) => {
    res.render('verProductos');
});

app.get('/cargarProductos',authToken,isAdmin, (req,res) => {
    res.render('cargarProductos')
});









