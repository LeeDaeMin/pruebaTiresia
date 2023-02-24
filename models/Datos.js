const Sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt-nodejs');

const Datos = db.define('datos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING(60),

    telf: Sequelize.INTEGER,
    direccionResidencia: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: { 
            isEmail: { msg:  'Agrega un correo válido' }
        }
    },
    Pais: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {msg: 'El Pais NO puede Estar Vacio'}
        }
    },
    Departamento: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {msg: 'El Departamento NO puede Estar Vacio'}
        }
    },
},  {
    hooks: {
        beforeCreate(datos){
            datos.password = bcrypt.hashSync(datos.password, bcrypt.genSaltSync(10), null);
        }
    }
});

//Metodo para comparar los contraseñas 


module.exports = Datos