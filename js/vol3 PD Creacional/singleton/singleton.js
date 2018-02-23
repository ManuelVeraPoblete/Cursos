var TareaRepo = (function () {
    var tareaRepo;
    function createRepo() {
        var tareaRepo = new Object("tarea");
        return tareaRepo;
    }
    return {
      getInstance: function() {
          if (!tareaRepo) {
            tareaRepo = createRepo();
          }
          return tareaRepo;
      }
    };
})();

var repo1 = TareaRepo.getInstance();
var repo2 = TareaRepo.getInstance();

if (repo1 === repo2 ){
  console.log ('mismo reporte');
}
