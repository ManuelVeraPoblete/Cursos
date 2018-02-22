//var task = Object.create(Object.prototype);

//task.title = "My Task";
//task.description = "My Description";

var task = {
  title: 'Mi titulo',
  description: 'Mi Descripcion'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumarable: false,
  configurable: true
});

var urgenteTask = Object.create(task);

Object.defineProperty(urgenteTask, 'toString', {
  value: function (){
    return this.title + ' ' + ' Es Urgente';
  },
  writable: false,
  enumarable: false,
  configurable: false
});




console.log(task.toString());
console.log(urgenteTask.toString());
console.log(Object.keys(task));
console.log(Object.keys(urgenteTask));
