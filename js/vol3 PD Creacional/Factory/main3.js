var Tarea = require('./tarea');
var repoFactory = require('./repoFactory2');

var tarea1 = new Tarea(repoFactory.tarea.get(1));
var tarea2 = new Tarea(repoFactory.tarea.get(2));

var user = repoFactory.usuario.get(1);
var proyecto = repoFactory.proyecto.get(1);

tarea1.usuario = usuario;
tarea1.proyecto = proyecto;

tarea1.grabar();
