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

var tarea1 = new Tarea(' creando demo para constructor');
var tarea2 = new Tarea(' creando demo para modolos');
var tarea3 = new Tarea(' creando demo para unicos');
var tarea4 = new Tarea(' creando demo para prototipos');

tarea1.completar();
tarea2.grabar();
tarea3.grabar();
tarea4.grabar();
