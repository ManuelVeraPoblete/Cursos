var Libro = function(nombre , precio) {

    var cambiandoPrecio = [] , precioCambiado = [];

    this.nombre = function(val) {
        return nombre;
    };

    this.precio = function(val) {
        if (val !== undefined && val !== precio) {
            for (var i = 0; i < cambiandoPrecio.length; i++) {
                if (!cambiandoPrecio[i](this, val)){
                    return precio;
                }
            }
          precio = val ;
          for (var i = 0; i < precioCambiado.lenght; i++) {
              precioCambiado[i](this);
          }
        }
        return precio;
    };

    this.cambiandoPrecio = function(callback) {
        cambiandoPrecio.push(callback);
    };

    this.precioCambiado = function(callback) {
        precioCambiado.push(callback);
    };

};

var libro = new Libro ('JavaScript: las buenas partes',14000);
console.log('El nombre es -> ' + libro.nombre());
console.log('El precio es -> ' + libro.precio());

libro.cambiandoPrecio(function(b, precio){
    if (precio > 100000) {
        console.log('Error del sistema, el precio ha ido inesperadamente alto ')
        return false;
    }
    return true;
});

libro.precioCambiado(function(b) {
  console.log('El precio del libro ha cambiado a -> '+ b.precio());
});

libro.precio(12);
libro.precio(3000000);
