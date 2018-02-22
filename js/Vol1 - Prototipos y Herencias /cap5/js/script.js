'use strict';
class Animal {
  constructor(sonido){
    this.sonido = sonido || 'Gruñe';
  }

  hablar() {
    console.log(this.sonido);
  }
};

class Gato extends Animal {
  constructor(nombre , color){
    super('Miau');
    this.nombre = nombre;
    this.color = color;
  }
};

class Perro extends Animal {
  constructor(nombre , color){
    super('Guau');
    this.nombre = nombre;
    this.color = color;
  }
};



var fify    = new Gato('Fify','Blanco');
var naganto = new Perro('Naganto','Blanco');

console.log(fify.__proto__.__proto__.hasOwnProperty('hablar'))
console.log(fify);

console.log(naganto.__proto__.__proto__.hasOwnProperty('hablar'))
console.log(naganto);

console.log(' creo que de esta manera queda mas limpio... quisas el ejemplo no sea el mejor');
console.log(' pero creo entender la funcionalidad');
console.log(' la idea es tener una clase base  que sirva de constructor primario y que el resto ');
console.log(' de las clases hereden sus funcionalidades basicas.. para luego agregar atributos');
console.log(' a la nueva clase.... espero estar bien en mi rasonamiento');
console.log(' en mi parecer es mejor crear clases que funciones... es mas limpia la programacion')
