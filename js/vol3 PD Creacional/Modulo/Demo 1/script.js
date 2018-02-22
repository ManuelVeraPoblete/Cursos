var Repo = require('./tareaRepositorio');

var Tarea = function(data) {
    this.nombre       = data.nombre;
    this.completada   = false;

}

Tarea.prototype.completar = function () {
    console.log('Completando Tares: '+ this.nombre);
    this.completada = true;
};

Tarea.prototype.grabar = function() {
    console.log('Graband Tarea ' + this.nombre);
    Repo.grabar(this);
};

module.exports = Tarea;
