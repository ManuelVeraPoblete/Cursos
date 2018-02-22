'use strict';

function Gato(nombre, color) {
  this.nombre  = nombre ;
  this.color   = color;
}

var fify = new Gato('Fify','Blanco');

Gato.prototype.edad = 3

console.log(Gato.prototype);
console.log(fify.__proto__);

console.log('creando un nuevo gato');
var muffin = new Gato('Muffin','Negro');
console.log('-----------------');

console.log(Gato.prototype);
console.log(muffin.__proto__);
console.log("La Edad de Muffin es "+ muffin.edad +' Años');
console.log("La Edad de Fify es "+ fify.edad +' Años');

fify.edad = 5;
console.log("Cambiando la edad de fify");
console.log("La Edad de Muffin es "+ muffin.edad +' Años');
console.log("La Edad de Fify es "+ fify.edad +' Años');

console.log('Ceando a Kyti');
var kity = new Gato('Kity','Marron');
console.log('La edad de kyti es ' + kity.edad);

console.log('Cambiando la edad del prototipo a 7 años');
Gato.prototype.edad = 7;

console.log('Verificamos la Edad de los Objetos ya creados');
console.log("La Edad de Muffin es "+ muffin.edad +' Años');
console.log("La Edad de Fify es "+ fify.edad +' Años');
console.log('La edad de kyti es ' + kity.edad+ ' Años');

console.log('por lo visto cambiaron todas las edades de los objetos que ');
console.log('no se actualizo la edad solo fify al cual se le asigno la edad de 5 años ');
console.log('no cambio ');
console.log('SOSPECHOSA LA WEA');
