// sin usar stric -> al tratar de sobreescribir una variables no pasa nada se 
// quedara igual como la definimos
// al usar strict -> si tratamos de sobreescribor la variable marcara un error 
// y detendra la ejecucion de la app

'use strict';
var obj = {};
Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: ' Esta variale es solo readonly'

});
obj.readOnly = "Tratando de Sobre escribir";
console.log(obj.readOnly);