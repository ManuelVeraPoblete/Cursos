var repo = function() {
  var called = 0;
  var save = function(tarea) {
    called++;
    console.log('Grabando -> '+ tarea +
                'Llmadas  -> '+ called + ' veces ');
  }
  console.log('nuevamente subida reporte tarea');
  return {
    save: save
  }
}

module.exports = repo;
