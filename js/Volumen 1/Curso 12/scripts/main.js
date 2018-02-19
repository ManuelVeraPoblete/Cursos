alert("esto es apocalipsis zombie , usted esta saqueando una tienda y derrepente un zombie pasa a traves de la puerta  ");

var arma = prompt("Escoje tu Arma")

var numeroAleatorio = Math.round(Math.random());

alert ( "Ataca a los Zombies con tu arma " + arma );

if (numeroAleatorio === 0 ) {

	alert(" Zombie te muerde.... Tu Pierdes");

} else if ( numeroAleatorio == 1 ){
	alert (" Mataste al zombien con tu arma " + arma + ".... Tu Ganas!!!");

}