import express from 'express';
import path from 'path';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import hbs from 'hbs';
export const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/registro', (req,res) => {
    res.render('registro');
});