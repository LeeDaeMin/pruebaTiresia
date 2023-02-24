const axios = require('axios');
const apiUrl = 'http://172.16.111.226/vg/gestion/apps/gsie.cgi?D.action=sie&siemodel=RHNOM&siefunction=012&aleatorio=0.6682740249671042&&sesid=yRVoRhICMKrHKPGHvk_zpktQmmYSRo&aseixer=0.88621665164828'

exports.FormCrearDatos = (req, res) =>{
    res.render('guardar-datos',{
        homePage: 'Guardar Datos'
    })
}



exports.getAnswer = async(req, res, next) => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        // Pais
        console.log(data)
        return data;
    } catch(error) {
        next(error)
    }

}