var Tarea   =   require('./script.js');
var Repo    =   require('./tarearepositorio');

var tarea1 = new Tarea(Repo.get(1));


var tarea1 = new Tarea({nombre: ' creando demo para constructor'});
var tarea2 = new Tarea({nombre: ' creando demo para modolos'});
var tarea3 = new Tarea({nombre: ' creando demo para unicos'});
var tarea4 = new Tarea({nombre: ' creando demo para prototipos'});

tarea1.completar();
tarea2.grabar();
tarea3.grabar();
tarea4.grabar();
