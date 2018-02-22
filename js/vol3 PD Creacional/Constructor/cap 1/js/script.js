
var Tarea = function(nombre) {
    this.nombre       = nombre;
    this.completada   = false;

    this.completar = function() {
        console.log('completando tarea: ' + this.nombre);
        this.completada = true;
    }

    this.grabar = function() {
        console.log('Grabando Tarea: '+ this.nombre);
    }
}

var tarea1 = new Tarea('Creando demo para constructores');
var tarea2 = new Tarea('Creando demo para modulos'      );
var tarea3 = new Tarea('Creando demo para unicos'   );
var tarea4 = new Tarea('Creando demo para prototipos'   );


tarea1.completar();
tarea2.grabar();
tarea3.grabar();
tarea4.grabar();
