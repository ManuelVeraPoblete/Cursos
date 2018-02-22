var repoFactory = function() {
    this.getRepo = function(repoTipo){
        if (repoTipo === 'tarea'){
            if (this.tareaRepo) {
                console.log('Recibiendo from Cache');
                return this.tareaRepo;
            } else {
                this.tareaRepo = require('./tareaRepositorio')();
                return this.tareaRepo;
            }
        }
        if (repoTipo === 'usuario'){
            var usuarioRepo = require('./usuarioRepositorio')();
            return usuarioRepo;
        }
        if (repoTipo === 'proyecto' ) {
            var proyectoRepo = require('./projectoRepositorio')();
            return proyectoRepo;
        }
    }
};
