// al declarar un numero con un o mas ceros delante .... javascript lo toma como un octal
// en resumen ... jamas declarar numeros con ceros al principio..jajaj

// si realmente quiero usuar octales tengo que hacer un parseInt(numoer, base); para que me funcione.

//'use strict';

var x = 120 ,
    y = 021 ,
    z = 002 ;
console.log(x+y);
var a = 120 ,
    b = 21 ,
    c = 2 ;
console.log(a+b+c);