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

console.log('Verificando Prototipos de muffin');
console.log('primer nivel');
console.log(muffin.__proto__);
console.log('segundo nivel');
console.log(muffin.__proto__.__proto__);
console.log('tercer nivel');
console.log(muffin.__proto__.__proto__.__proto__)
console.log('tercer nivel es nulo.... se podran agregar nuevas propiedades?? veremos');
Gato.prototype.peso='300 gramos';

console.log('desplegamos los mismos 3 niveles veremos que pasa');
console.log('Verificando Prototipos de muffin');
console.log('primer nivel');
console.log(muffin.__proto__);
console.log('segundo nivel');
console.log(muffin.__proto__.__proto__);
console.log('tercer nivel');
console.log(muffin.__proto__.__proto__.__proto__)
console.log('la propiedad se agrega al prototipo cuando se despliegan muestra lo mismo ');
console.log('solo que ahora se agrego el peso y todos los gatos pesan 300 gramos ');

console.log('--------------------------------------------');
console.log('Ahora desplegare las propiedades de todos los gatos para ver como quedan los objetos');
console.log( muffin.nombre + '  ' + muffin.color + '  '+ muffin.edad + '  '+ muffin.peso);
console.log( fify.nombre   + '  ' + fify.color   + '  '+ fify.edad   + '  '+ fify.peso);
console.log( kity.nombre   + '  ' + kity.color   + '  '+ kity.edad   + '  '+ kity.peso);

console.log('si nos damos cuenta los 2 primeros fatos comenzaron sin edad y sin peso');
console.log('luego se agrego la propiedad edad al prototipo con 3 años ');
console.log('la cual asigno una edad de 3 años a todos los gatos');
console.log('luego se cambio la edad de fify a 5 años y solo fifi cambio edad...logico');
console.log('luego se agrego una propiedad al prototipo de peso');
console.log('luego todos los gatos pesan 300 gramos');
console.log('luego se cambio el valor de la propiedad edad del prototipo a 7 años');
console.log('esto causo que todos los gatos cambiaran de edad menos fify que se quedon con los 5 años')
console.log('que se le asignaron');
console.log('POR QUE CAMBIARON TODOS MENOS FIFY???');
console.log('segun el video ... es por las asignaciones de memoria');
console.log('solo fify tenia una nueva asigancion y al cambiar la propiedad solo cambio el valor');
console.log('delos gatos que apuntaban a la ropiedad antigua, fify ya tenia una nueva asignacion');
console.log('que apuntaba a otro lugar de la memoria');
console.log('me recuerda a c y el manejo de punteros... complidado de entender pero creo que es asi... ESPERO')
