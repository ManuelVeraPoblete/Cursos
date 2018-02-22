'use strict';

function Animal(sonido){
  this.sonido = sonido ||'Ladrar';
}

Animal.prototype.hablar = function(){
  console.log(this.sonido);
}

function Perro(nombre,color) {
  Animal.call(this,'Ladra');
  this.nombre = nombre ;
  this.color = color;
}

function Gato(nombre, color ){
  Animal.call(this,'Maulla');
  this.nombre = nombre;
  this.color = color;
}

Perro.prototype = Object.create(Animal.prototype);

Perro.prototype.constructor = Perro;


var xuxa = new Perro('Xuxa','Negro');

xuxa.hablar();


console.log('xuxa');
console.log(xuxa);
console.log( xuxa.__proto__);
console.log( xuxa.__proto__.__proto__);
console.log( xuxa.__proto__.__proto__.__proto__);
console.log( xuxa.__proto__.__proto__.__proto__.__proto__);

var jack = new Gato('Jack','Cafe');

console.log('jack');
console.log(jack);
console.log( jack.__proto__);
console.log( jack.__proto__.__proto__);
console.log( jack.__proto__.__proto__.__proto__);

console.log( 'no cacho que paso... creo un perro que primero ladra despues')
console.log( 'despues maulla... con eso estoy claro.... pero despues ')
console.log( 'creo otro y maulla no ladra')

console.log( '----------------------------------------------');

console.log( 'creo que ahora lo pille , tengo un funcion perro y una funcion gato')
console.log( 'cuando creo un perro siempre ladrara pero el gato maullara pues no paso por la funcion')
console.log( 'donde cambio el sonido del perro.... creo estar bien')


console.log ('----------------------------------------------');
console.log ('podria solamente crear a toto igual como cree a xuxa y luego cambiar el atributo');
console.log ('de sonido.... veremos que pasa')

var toto = new Perro('Toto','Azul');
console.log(toto);
console.log( toto.__proto__);
console.log( toto.__proto__.__proto__);
console.log( toto.__proto__.__proto__.__proto__);

console.log('creado');
console.log('ahora cambiare el valor del atributo sonido y nuevamente desplegare los datos');
toto.sonido = ' Miau ';
console.log(toto);
console.log( toto.__proto__);
console.log( toto.__proto__.__proto__);
console.log( toto.__proto__.__proto__.__proto__);

console.log( ' puedo tener una funcion prototipo que es animal que servira de constructor ');
console.log( ' pero tendria que cambiar los atributos para que tuviera mas sentido pues ');
console.log( ' estaria creando un gato con una funcion perro.... no se si estoy bien')
console.log( ' la logica indica que si... pero creo que no estaria medio enrredado de comprender vere como sigue el curso')
