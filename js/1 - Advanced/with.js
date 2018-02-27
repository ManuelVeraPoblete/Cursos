'use strict';
var obj = {
    a: {
        b:{
            c: ' hola'
        }
    }
}

console.log(obj.a.b.c);
console.log(obj.a.b);
console.log(obj.a);
console.log(obj);

var c = 'esto es importante';

(function(nuevovalor){
    console.log(nuevovalor);
}(obj.a.b.c))