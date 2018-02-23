var Promise = require('./promise.js');

var promise = new Promise();

setTimeout(function () {
  promise.resolve();
}, 1000);

setTimeout(function() {
  promise.done(function(date){
    console.log('Handler added after deferred object is done');
  });
}, 200);

promise.done(function(data){
  console.log('Deferred objet has completed');
});

var promise2 = new Promise();

promise2.failed(function() {
  console.log('Promise 2 Failed');
}).done(function() {
  console.log('Promise #2 has completed');
});

setTimeout(function() {
  promise2.failed();
}, 1000 );

console.log('Aplication completed');
