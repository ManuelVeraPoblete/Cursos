var Calculadora = function( start ) {
  var self = this;

  this.add = function (x) {
      start = start + x;
      return self;
  };

  this.multiply = function(x) {
    start = start * x;
    return self;
  };

  this.equals = function(callback) {
    callback(start);
    return self;
  };
}

// module.exports = Calculadora;

module.exports = {
  add: function(x,y){
    return new Calculadora(x).add(y || 0);
  },
  multiply: function(x,t) {
    return new Calculadora(x).multiply(y || 1);
  }
};
