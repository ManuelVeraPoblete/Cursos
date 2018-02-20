// Creando Funciones
function saludar(nombre) {
	console.log("Hola " + nombre );
}

function factorial(numero) {
	var total = 1;
	for (var i = 1; i <= numero; i++) {
		total = total + ( total * i );
	}
	return total;
}

function sumatoria(numero) {
	var total = 0;
	for (var i = 0; i <= numero; i++) {
  	total = total + i;
	}
	return(total);
}

saludar("manolo");
saludar("maria");
saludar("andrea");
console.log("------------------------------------");
console.log ( " el factorial de 5 es " + factorial(5));
console.log ( " el factorial de 10 es " + factorial(10));
console.log ( " el factorial de 15 es " + factorial(15));
console.log ( " el factorial de 20 es " + factorial(20));
console.log("------------------------------------");
console.log ( " la sumatoria de los 5 primeros numeros es " + sumatoria(5));
console.log ( " la sumatoria de los 50 primeros numeros es " + sumatoria(50));
console.log ( " la sumatoria de los 500 primeros numeros es " + sumatoria(500));
console.log ( " la sumatoria de los 5000 primeros numeros es " + sumatoria(5000));
