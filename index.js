const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const routes = require('./routes');

const app = express();


app.use(expressLayouts)
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, './views'));

// Routing
app.use('/', routes());
;
// variable de entorno
require('dotenv').config({path: 'env.env'});



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
}); 