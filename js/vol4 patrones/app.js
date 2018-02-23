var Calculadora = require('./calculadora2');

Calculadora
    .add(1 , 2)
    .multiply(3)
    .equals(function(result) {
        console.log(result);
      });
