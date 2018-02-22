var repoFactory = function() {

    this.getRepo = function(repoTipo) {
        if (repoTipo === 'tarea') {
          var tarea = require('./tareaRepositorio')();
          return tareaRepo;
        }

        if (repoTipo === 'usuario') {
          var usuarioRepo = require('./usuarioRepositorio')();
          return tareaRepo;
        }

        if (repoTipo === 'proyecto'){
          var proyectoRepo = require('./proyectoRepositorio');
          return proyectoRepo;
        }

    }
};
module.exports = new repoFactory;
