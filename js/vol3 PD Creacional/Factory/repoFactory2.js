var repoFactory = function() {
    var repos = this;
    var repoList = [{nombre:'tarea',origen:'./tareaRepositorio'},
                    {nombre:'usuario',origen:'/usuarioRepositorio'},
                    {nombre:'proyecto', origen:'./proyectoRepositorio'}];

    repoList.forEach(function(repo){
          repos[repo.nombre] = require(repo.origen)()
    });
};
module.exports = new repoFactory;
