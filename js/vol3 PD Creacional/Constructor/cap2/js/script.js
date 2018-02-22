
var Tarea = function(nombre) {
    this.nombre       = nombre;
    this.completada   = false;

}

Tarea.prototype.grabar = function() {
     console.log(' Grabando Tarea: ' + this.nombre);
};

Tarea.prototype.completar = function() {
     console.log('Completando Tarea: ' + this.nombre);
};

var tarea1 = new Tarea('Creando demo para constructores');
var tarea2 = new Tarea('Creando demo para modulos'      );
var tarea3 = new Tarea('Creando demo para unicos'   );
var tarea4 = new Tarea('Creando demo para prototipos'   );


tarea1.completar();
tarea2.grabar();
tarea3.grabar();
tarea4.grabar();
