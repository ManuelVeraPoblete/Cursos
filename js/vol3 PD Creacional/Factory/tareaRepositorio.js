var Repo = function () {

    var db = {};

    var get = function(id) {
        console.log('Llamando tarea -> ' + id );
        return {
          nombre: 'nueva tarea desde la base de datos'
        }
    }

    var grabar = function(tarea) {
      console.log('Grabando -> ' + tarea.nombre + ' en la base de datos');
    }

    console.log('Nuevo reporte de tarea');
    return {
      get: get,
      grabar: grabar
    }
}

module.exports = Repo();
