const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const routes = require('./routes');

const app = express();

const db = require('./config/db');
    require('./models/Datos');
    db.sync().then(()=>console.log('DB Conectada')).catch((error)=>console.log(error))

 //Body Parser, leer formulario 
 app.use(express.json());
 app.use(express.urlencoded({extended: true}))

// Habilitar EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Ubicacion Vista
app.set('views', path.join(__dirname, './views'));

// Routing
app.use('/', routes());
;
// variable de entorno
require('dotenv').config({path: 'env.env'});



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
}); 