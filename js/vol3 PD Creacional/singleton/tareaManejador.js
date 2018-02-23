var repo = require('./repo');

var mireporte = repo();

var tareaManejador = function () {
  return {
    save: function(){
      mireporte.save('Hola desde el Manejador de Reportes');
    }
  }
}

module.exports = tareaManejador();
