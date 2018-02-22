var Repo = function () {

    var db = {};

    var get = function(id) {
        console.log('Llamando Tarea -> '+ id );
        return {
            nombre:' Nueva Tarea desde la Base de Datos'
        }
    }

    var grabar = function(tarea) {
        console.log('Grabando ' + tarea.nombre + ' en la base de datos');
    }

    return {
        get: get,
        grabar: grabar

    }
}

module.exports = Repo();
