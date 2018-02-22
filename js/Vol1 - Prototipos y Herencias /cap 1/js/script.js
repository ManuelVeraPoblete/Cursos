var arreglo = ['blanco','azul','rojo'];

Object.defineProperty(Array.prototype, 'ultimo', {get: function() {
  return this[this.length-1]
}})

var arreglo2 = ['uno','dos','tres']
console.log(arreglo.ultimo)
console.log(arreglo2.ultimo)
