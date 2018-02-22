var Tarea         = require('./tarea')          ;
var repoFactory   = require('./repoFactoryCache')    ;

var tarea1 = new Tarea(repoFactory.getRepo/'tarea').get(1);
var tarea2 = new Tarea(repoFactory.getRepo/'tarea').get(2);

var usuario = repoFactory.getRepo('usuario').get(1);
var proyecto = repoFactory.getRepo('proyecto').get(1);

tarea1.usuario = usuario;
tarea1.proyecto = proyecto;
tarea1.save();
