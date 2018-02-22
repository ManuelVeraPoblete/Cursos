var Tarea         = require('./tarea')                ;
var tareaRepo     = require('./tareaRepositorio')     ;
var usuarioRepo   = require('./usuarioRepositorio')   ;
var proyectoRepo  = require('./proyectoRepositorio') ;


var tarea1        = new Tarea(tareaRepo.get(1)  ) ;
var usuario       =           usuarioRepo.get(1)  ;
var proyecto      =           proyectoRepo.get(1) ;

tarea1.usuario    = usuario                          ;
tarea1.proyecto   = proyecto                      ;

console.log(tarea1);
tarea1.grabar();
