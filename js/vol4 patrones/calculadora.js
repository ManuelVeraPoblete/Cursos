var Calc = function (star) {
    var resultado = this;
    this.add      = function(x)         { star = star + x ; return resultado; };
    this.multiply = function(x)         { star = star * x ; return resultado; };
    this.equals   = function(callback)  { callback(star)  ; return resultado; };
}
new Calc(0).add(1)
           .add(2)
           .multiply(3)
           .equals(function(result){
                console.log('el ressultado es -> ' + result );
           });
