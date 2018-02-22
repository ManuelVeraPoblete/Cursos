'use strict'

class Tarea {
    constructor(nombre) {
        this.nombre     = nombre;
        this.completada = false;
    };

    completar() {
        console.log('Completando Tarea ->'+ this.nombre );
        this.completed = true;
    };

    grabar() {
        console.log('Grabando Tarea -> '+ this.nombre)
    };
}

var tarea1 = new Tarea(' creando demo para constructor');
var tarea2 = new Tarea(' creando demo para modolos');
var tarea3 = new Tarea(' creando demo para unicos');
var tarea4 = new Tarea(' creando demo para prototipos');

tarea1.completar();
tarea2.grabar();
tarea3.grabar();
tarea4.grabar();
