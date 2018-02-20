// Trabajando con array en funciones

function ordena_mayor(arreglo) {
	var paso = 0;
	for (var i = 0; i < arreglo.length; i++) {
		for (var j = i + 1; j < arreglo.length; j++) {
	      if (arreglo[i] < arreglo[j]) {
					paso = arreglo[j];
					arreglo[j] = arreglo[i];
					arreglo[i] = paso;
				}
		}
	}
	return arreglo;
}

function ordena_menor(arreglo) {
	var paso = 0;
	for (var i = 0; i < arreglo.length; i++) {
		for (var j = i + 1; j < arreglo.length; j++) {
	      if (arreglo[i] > arreglo[j]) {
					paso = arreglo[j];
					arreglo[j] = arreglo[i];
					arreglo[i] = paso;
				}
		}
	}
	return arreglo;
}



var numeros = [9,1,8,2,7,3,6,4,5,0];
console.log("arreglo sin ordenar ",numeros);
console.log("Ordenador de Mayor a Menor ",ordena_mayor(numeros));
console.log("Ordenador de Mayor a Menor ",ordena_menor(numeros));
numeros.push(200);
numeros.push(25);
console.log("arreglo sin ordenar ",numeros);
console.log("Ordenador de Mayor a Menor ",ordena_mayor(numeros));
console.log("Ordenador de Mayor a Menor ",ordena_menor(numeros));
