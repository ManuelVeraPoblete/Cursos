//var task = Object.create(Object.prototype);

//task.title = "My Task";
//task.description = "My Description";

var task = {
  title: 'Mi titulo',
  description: 'Mi Descripcion'
};

task.toString = function() {
  return this.title + ' ' + this.description;
}

console.log(task.toString());
