var Repo = require('./tareaRepositorio');

var Tarea = function (data) {
  this.nombre = data.nombre;
  this.competado = false;
}

Tarea.prototype.completar = function() {
  console.log('Completando Tarea: -> ' + this.nombre);
  this.completado = true;
};

Tarea.prototype.grabar = function () {
  console.log('Grabando Tarea: -> ' + this.nombre );
  Repo.grabar(this);
};

module.exports = Tarea;
