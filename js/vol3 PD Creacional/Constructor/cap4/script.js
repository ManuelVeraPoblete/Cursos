var Tarea = function(nombre) {
    this.nombre       = nombre;
    this.completada   = false;

}

Tarea.prototype.completar = function () {
    console.log('Completando Tares: '+ this.nombre);
    this.completada = true;
};

Tarea.prototype.grabar = function() {
    console.log('Graband Tarea ' + this.nombre);
};

module.exports = Tarea;
