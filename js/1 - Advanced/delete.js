// solo se pueden eliminar variables de un objetos
// si tratamos de elimiar variables no hace nada
// pero si usuamos 'use stric' marcara un error automaticamente

// 'use strict';
var obj = { a:100 , b:200 };

console.log(obj);

delete obj.a;

console.log(obj);