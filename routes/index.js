const express= require('express');
const router = express.Router();
const homeController = require('../controller/homeController.js');
const datosController = require('../controller/datosController.js');

/* osanchez@tiresia.co */


module.exports = function(){
    router.get('/home', homeController.home);
    router.get('/guardar-datos' , datosController.getAnswer)
    router.post('/guardar-datos' , datosController.getAnswer)
    return router;
}