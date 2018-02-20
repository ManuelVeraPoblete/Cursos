// Probando los siclos do while

var numero = 0;
do {
	console.log(numero);
	numero++;
} while (numero < 11);
console.log("--------------------------------------");
numero = 0;
while (numero < 11 ) {
	console.log(numero);
	numero++;

}
console.log("--------------------------------------");
// Sumar los n primeros numeros

var cantidad = prompt("Ingrese Numero a Calcular");
var sumatoria = 0;
var i = 1;
do {
	sumatoria = sumatoria + i;
	i++;
} while (i <= cantidad);
console.log("la sumatoria de los " + cantidad + " primeros numeros es " + sumatoria);
